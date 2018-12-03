import React from "react";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import Zheader from "./Zheader";
import Zbody from "./Zbody";
import Zfooter from "./Zfooter";
import ZheaderBtn from "./ZheaderBtn";
import { getStyle } from "../zTool";
import { listenDivSizeChange, once } from "../zTool";
export class Zlayout extends React.Component {
	static propTypes = {
		flexRow: PropTypes.bool,
		flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		className: PropTypes.string,
		onTransitionend: PropTypes.func,
	};
	layoutClassName = cssClass["z-layout"];
	layoutEl = null;
	setBodyHeight = (warpEl) => {
		let headerHeight = 0;
		let footerHeight = 0;
		let _body = null;
		Array.prototype.slice.call(warpEl.children).forEach((el) => {
			if (el.className.includes(cssClass["z-layout-body"])) {
				_body = el;
			} else if (el.className.includes(cssClass["z-layout-header"])) {
				headerHeight += parseInt(getStyle(el, "height"), 10);
			} else if (el.className.includes(cssClass["z-layout-footer"])) {
				footerHeight += parseInt(getStyle(el, "height"), 10);
			}
		});
		if (_body) {
			_body.style.height = `calc(100% - ${headerHeight}px - ${footerHeight}px)`;
			_body.style.top = headerHeight + "px";
			_body.style.bottom = footerHeight + "px";
		}
	};
	setHeight = () => {
		this.setBodyHeight(this.layoutEl);
	};
	onTransitionend = (e) => {
		if (e.target !== e.currentTarget) return;
		this.props.onTransitionend && this.props.onTransitionend();
	};
	componentDidMount() {
		let _body = null;
		Array.prototype.slice.call(this.layoutEl.children).forEach((el) => {
			if (el.className.includes(cssClass["z-layout-body"])) {
				_body = el;
			}
		});
		if (_body) {
			listenDivSizeChange(this.layoutEl, this.setHeight);
		}
		this.setHeight();
	}
	componentDidUpdate(prevProps) {
		if (this.props.width !== prevProps.width || this.props.height !== prevProps.height) {
			once(this.layoutEl, "transitionend", this.onTransitionend);
		}
	}
	render() {
		let classNames = `${this.layoutClassName} ${this.props.flexRow ? cssClass["is-flex"] : ""} ${
			this.props.className ? this.props.className : ""
		}`;
		let flex = this.props.flex ? this.props.flex : 1;
		const styles = this.props.style ? Object.assign({}, this.props.style, { height: "100%" }) : { height: "100%" };
		if (this.props.height != undefined) {
			styles.height = isNaN(Number(this.props.height)) ? this.props.height : this.props.height + "px";
		}
		if (this.props.width != undefined) {
			styles.width = isNaN(Number(this.props.width)) ? this.props.width : this.props.width + "px";
		}
		if (this.props.width == undefined && this.props.height == undefined) {
			classNames += ` z-flex-${flex}`;
		}
		return (
			<section className={classNames} style={styles} ref={(el) => (this.layoutEl = el)}>
				{this.props.children}
			</section>
		);
	}
}

Zlayout.Template = class extends React.Component {
	render() {
		return this.props.children;
	}
};
Zlayout.Zheader = Zheader;
Zlayout.Zbody = Zbody;
Zlayout.Zfooter = Zfooter;
Zlayout.ZheaderBtn = ZheaderBtn;
export default Zlayout;
