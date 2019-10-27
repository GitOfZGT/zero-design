import React from "react";
import ZpureComponent from "../ZpureComponent";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { SketchPicker } from "react-color";
import { CSSTransition } from "react-transition-group";
import "./style.scss";
export class ZcolorPicker extends ZpureComponent {
	static propTypes = {
		value: PropTypes.string,
		defaultValue: PropTypes.string,
		onChange: PropTypes.func,
		className: PropTypes.string,
		valueType: PropTypes.string, // hex | rgb
		disabled: PropTypes.bool,
	};
	static defaultProps = {
		valueType: "hex",
	};
	state = {
		showPicker: false,
		color: "",
	};
	componentDidMount() {
		this.methods.initValue();
		// this.props.onChange && this.props.onChange(this.state.color);
		document.documentElement.addEventListener("click", this.methods.closePicker, false);
	}
	componentDidUpdate(prevProps) {
		if (this.props.value !== prevProps.value) {
			this.methods.initValue();
		}
	}

	componentWillUnmount() {
		document.documentElement.removeEventListener("click", this.methods.closePicker, false);
	}
	backgroundColor = "tranparent";
	position = {};
	methods = {
		initValue: () => {
			const val = this.props.value || this.props.defaultValue;
			if (!val) return;
			let color = "";
			if (val.includes("rgb")) {
				const rgba = val
					.trim()
					.replace(/[rgba\(\)]/g, "")
					.replace(/[，]/g, ",")
					.split(",");
				if ((rgba.length === 3) | (rgba.length === 4)) {
					color = {
						r: Number(rgba[0]),
						g: Number(rgba[1]),
						b: Number(rgba[2]),
						a: rgba[3] ? Number(rgba[3]) : 1,
					};
				} else {
					throw Error("rgb值书写有误");
				}
			} else if (val.includes("#") && val.length > 3) {
				color = val;
			} else {
				throw Error("颜色值只支持hex和rgb类型");
			}
			this.backgroundColor = color;
			this.setState({
				color,
			});
		},
		colorChange: (color, event) => {
			this.backgroundColor = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b},${color.rgb.a})`;
			this.setState({ color: color.rgb });
			this.props.onChange &&
				this.props.onChange(
					this.props.valueType == "rgb" ? this.backgroundColor : color[this.props.valueType],
					color,
				);
		},
		setPosition: () => {
			const _parPos = this.boxEl.getBoundingClientRect();
			const _childPos = this.pickerEl.getBoundingClientRect();
			let top = _parPos.top + _parPos.height;
			let left = _parPos.left;
			if (top + _childPos.height > document.documentElement.clientHeight) {
				top = _parPos.top - _childPos.height;
			}
			if (left + _childPos.width > document.documentElement.clientWidth) {
				left = _parPos.left - _childPos.width;
			}

			this.position = {
				top,
				left,
			};
			this.coverEl.style.visibility = "visible";
		},
		triggerPicker: e => {
			if (this.props.disabled || this.pickerEl.contains(e.target)) {
				return;
			}
			const show = !this.state.showPicker;
			if (show) {
				this.coverEl.style.display = "block";
				this.coverEl.style.visibility = "hidden";
				this.methods.setPosition();
			}
			this.setState({
				showPicker: show,
			});
		},
		onAnimationEnd: () => {
			if (!this.state.showPicker) {
				this.coverEl.style.display = "none";
			}
		},
		closePicker: e => {
			if (this.pickerEl.contains(e.target) || this.boxEl.contains(e.target)) {
				return;
			}
			this.setState({
				showPicker: false,
			});
		},
	};
	render() {
		const { className, disabled, style } = this.props;
		return (
			<span
				className={`z-color-box ${className ? className : ""} ${disabled ? "disabled" : ""}`}
				ref={el => (this.boxEl = el)}
				style={style}
				onClick={this.methods.triggerPicker}
			>
				<span className="z-bg" />
				<span
					className="z-color"
					style={
						this.state.color
							? {
									backgroundColor: this.backgroundColor,
							  }
							: null
					}
				/>
				{ReactDOM.createPortal(
					<div className="z-cover" ref={el => (this.coverEl = el)}>
						<CSSTransition in={this.state.showPicker} timeout={500} classNames="fadeIn-to-down">
							<div
								className="z-picker"
								style={this.position}
								ref={el => (this.pickerEl = el)}
								onAnimationEnd={this.methods.onAnimationEnd}
							>
								<SketchPicker color={this.state.color} onChange={this.methods.colorChange} />
							</div>
						</CSSTransition>
					</div>,
					document.body,
				)}
			</span>
		);
	}
}

export default ZcolorPicker;
