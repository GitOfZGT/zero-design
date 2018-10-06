import React from "react";
import PropTypes from "prop-types";
import cssClass from "./style.scss";

import { BuildScroll, listenDivSizeChange } from "../zTool";
class Zbody extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		scroll: PropTypes.bool,
		getScrollInstance: PropTypes.func,
		insertToScrollWraper: PropTypes.any,
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
	componentDidMount() {
		this.createScroll();
	}
	componentDidUpdate(prevProps) {
		if (prevProps.scroll != this.props.scroll) {
			this.createScroll();
		}
	}
	render() {
		const { scroll, className, children, insertToScrollWraper,id, getScrollInstance, ...others } = this.props;
		return (
			<section {...others} className={`${cssClass["z-layout-body"]} ${className?className:""}`}>
				<section
					className={`${cssClass["z-body-scroll"]} z-scroll-color`}
					ref={(el) => (this.bodyEl = el)}
				>
					{scroll ? (
						<div ref={(el) => (this._contentEl = el)}>
							<section>
								{children}
							</section>
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
