import React from "react";
import PropTypes from "prop-types";
import cssClass from "./style.scss";

import { BuildScroll, listenDivSizeChange } from "../zTool";
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
	}
	componentDidUpdate(prevProps) {
		if (prevProps.scroll != this.props.scroll) {
			this.createScroll();
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
		console.log("render", this.state.scrollAreaStyle);
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
			</section>
		);
	}
}
export default Zbody;
