import React from "react";
import ReactDOM from "react-dom";
import ZpureComponent from "../ZpureComponent";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import ZpageLoading from "../ZpageLoading";
import { once } from "../zTool";
export class ZfullLayer extends ZpureComponent {
	static propTypes = {
		header: PropTypes.node,
		children: PropTypes.node,
		exportMethods: PropTypes.func,
	};
	isScale = false;
	methods = {
		showLayer: (show, callback, scale) => {
			if (show) {
				this.setState(
					scale
						? {
								show,
								scale,
						  }
						: {
								show,
						  },
					() => {
						setTimeout(() => {
							this.setState({
								transparent: false,
							});
							callback && callback();
						}, 10);
					},
				);
				this.isScale = scale;
			} else {
				if (this.isScale) {
					this.setState({
						scale: true,
						transparent: true,
					});
					once(this.bodyElRef.current, "transitionend", () => {
						this.setState(
							{
								show,
							},
							callback,
						);
					});
				} else {
					this.setState(
						{
							show,
						},
						callback,
					);
				}
			}
			if (scale && show) {
				return this.methods.amplify;
			}
		},
		amplify: () => {
			setTimeout(() => {
				this.setState({
					scale: false,
				});
			}, 10);
		},
		closeLayer: () => {
			this.methods.showLayer(false);
		},
		showLoading: (show) => {
			this.ZpageLoadingRef.current.methods.showLoading(show);
		},
	};
	componentDidMount() {
		this.props.exportMethods && this.props.exportMethods(this.methods);
	}
	state = {
		show: false,
		scale: false,
		transparent: true,
	};
	ZpageLoadingRef = React.createRef();
	bodyElRef = React.createRef();
	layerElRef = React.createRef();
	render() {
		const { header, children } = this.props;
		const { scale, show, transparent } = this.state;
		return ReactDOM.createPortal(
			<div
				ref={this.layerElRef}
				className={`z-full-layer ${transparent ? "transparent" : ""}`}
				style={{ display: show ? "block" : "none" }}
			>
				<div className="z-full-layer-heading">{header}</div>
				<div className={`z-full-layer-body ${scale ? "scale" : ""}`} ref={this.bodyElRef}>
					{children}
				</div>
				<div className="close" onClick={this.methods.closeLayer}>
					<span className="text">×</span>
				</div>
				<ZpageLoading ref={this.ZpageLoadingRef} size="default" />
			</div>,
			document.body,
		);
	}
}

export default ZfullLayer;
