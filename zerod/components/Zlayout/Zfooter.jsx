import React from "react";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
class Zfooter extends React.PureComponent {
	static propTypes = {
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		className: PropTypes.string,
	};
	static defaultProps = {
		height: "40px",
	};
	render() {
		const { height, className, children,style, ...others } = this.props;
		let newclassName = `${cssClass["z-layout-footer"]}${className ? " " + className : ""}`;
        let styles = { height: isNaN(Number(this.props.height)) ? this.props.height : this.props.height + "px" };
        styles = style ? Object.assign({}, style, styles) : styles;
		return (
			<section {...others} className={newclassName} style={styles}>
				{children}
			</section>
		);
	}
}
export default Zfooter;
