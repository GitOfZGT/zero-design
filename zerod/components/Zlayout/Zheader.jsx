import React from "react";
import ZpureComponent from "../ZpureComponent";
import PropTypes from "prop-types";
class Zheader extends ZpureComponent {
	static propTypes = {
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		className: PropTypes.string,
	};
	static defaultProps = {
		height: "64px",
	};
	render() {
		const { height, className, children, style, ...others } = this.props;
		let newclassName = `z-layout-header ${className ? className : ""}`;
		let styles = { height: isNaN(Number(this.props.height)) ? this.props.height : this.props.height + "px" };
		styles = style ? Object.assign({}, style, styles) : styles;
		return (
			<section {...others} className={newclassName} style={styles}>
				{children}
			</section>
		);
	}
}
export default Zheader;
