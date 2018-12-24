import React from "react";
import PropTypes from "prop-types";
import cssClass from "./style.scss";

import { BuildScroll, listenDivSizeChange, addClass, removeClass ,once} from "../zTool";
class Zbody extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		scroll: PropTypes.bool,
		getScrollInstance: PropTypes.func,
		getWrapperEl: PropTypes.func, //获取最外层包裹元素
		insertToScrollWraper: PropTypes.any,
	};
	state = {
		scrollAreaStyle: {},
		scrollAreaClassName: "",
	};
	hasShowToTop = false;
	backToTop = () => {
		this.scroollInstance.scroll.scrollTo(0,0,200);
	};
	showBackToTop = () => {
		if (this.scroollInstance.scroll.y < this.scroollInstance.scroll.maxScrollY * 0.3) {
			if (!this.hasShowToTop) {
				addClass(this.toTopBtnEl,cssClass['is-animate-start']);
				removeClass(this.toTopBtnEl, cssClass["is-hide"]);
				this.hasShowToTop = true;
				setTimeout(() => {
					addClass(this.toTopBtnEl, `fadeIn-to-down-enter`);
					once(this.toTopBtnEl,"animationend",()=>{
						addClass(this.toTopBtnEl,cssClass['is-opacity']);
						removeClass(this.toTopBtnEl,`fadeIn-to-down-enter ${cssClass['is-animate-start']}`)
					})
				},10);
			}
		} else {
			if (this.hasShowToTop) {
				removeClass(this.toTopBtnEl, `${cssClass['is-opacity']}`);
				addClass(this.toTopBtnEl, cssClass["is-hide"]);
				this.hasShowToTop = false;
			}
		}
	};
	createScroll = () => {
		if (this.scroollInstance) {
			this.scroollInstance.scroll.destroy();
			this.scroollInstance = null;
		}
		Array.prototype.slice.call(this.bodyEl.querySelectorAll(".resize-sensor")).forEach((el) => {
			if (el.parentElement == this.bodyEl) this.bodyEl.removeChild(el);
		});
		if (this.props.scroll) {
			this.scroollInstance = new BuildScroll(this.bodyEl, { scrollbars: "custom" });
			listenDivSizeChange(this._contentEl, this.scroollInstance.refresh);
			listenDivSizeChange(this.bodyEl, this.scroollInstance.refresh);
			this.scroollInstance.scroll.on("scrollEnd", this.showBackToTop);
			this.props.getScrollInstance && this.props.getScrollInstance(this.scroollInstance);
		}
	};
	metods = {
		setScrollAreaStyle: (style) => {
			if (typeof style !== "object") return;
			this.setState({
				scrollAreaStyle: style,
			});
		},
		setScrollAreaClassName: (className) => {
			if (typeof className !== "string") return;
			this.setState({
				scrollAreaClassName: className,
			});
		},
		resetScrollArea: () => {
			this.setState({
				scrollAreaStyle: {},
				scrollAreaClassName: "",
			});
		},
	};
	componentDidMount() {
		this.createScroll();
		this.props.getWrapperEl && this.props.getWrapperEl(this.wrapperEl, this.metods);
		this.bodyEl.onscroll = () => {
			if (this.bodyEl.scrollTop > 0) {
				this.bodyEl.scrollTop = 0;
			}
		};
	}
	componentDidUpdate(prevProps) {
		if (prevProps.scroll != this.props.scroll) {
			this.createScroll();
		}
	}
	componentWillUnmount() {
		if (this.scroollInstance) {
			this.scroollInstance.scroll.destroy();
			this.scroollInstance = null;
		}
	}
	render() {
		const {
			scroll,
			className,
			children,
			insertToScrollWraper,
			getScrollInstance,
			getWrapperEl,
			...others
		} = this.props;
		return (
			<section
				{...others}
				className={`${cssClass["z-layout-body"]} ${className ? className : ""}`}
				ref={(el) => (this.wrapperEl = el)}
			>
				<section
					style={this.state.scrollAreaStyle}
					className={`${cssClass["z-body-scroll"]} z-scroll-color ${this.state.scrollAreaClassName}`}
					ref={(el) => (this.bodyEl = el)}
				>
					{scroll ? (
						<div ref={(el) => (this._contentEl = el)}>
							<section>{children}</section>
						</div>
					) : (
						children
					)}
				</section>
				{typeof insertToScrollWraper === "function" ? insertToScrollWraper() : insertToScrollWraper}
				<i
					className={`${cssClass["z-to-top"]} ${
						this.hasShowToTop ? "" : cssClass["is-hide"]
					} z-toTop-btn zero-icon zerod-top`}
					ref={(el) => (this.toTopBtnEl = el)}
					onClick={this.backToTop}
				/>
			</section>
		);
	}
}
export default Zbody;
