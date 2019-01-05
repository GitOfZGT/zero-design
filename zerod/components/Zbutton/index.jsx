import React from "react";
import PropTypes from "prop-types";
export class Zbutton extends React.PureComponent {
	static propTypes = {
		className: PropTypes.string,
		style:PropTypes.object,
		size: PropTypes.string,
		type: PropTypes.string,
		disabled: PropTypes.bool,
		onClick:PropTypes.func,
	};
	static defaultProps = {
		size: "normal",
		type: "default",
		className: "",
		disabled:false,
	};
	render() {
		const { size, className, type, children, onClick, style, disabled } = this.props;
		return (
			<span
				className={`z-btn ${disabled ? "" : type} ${size} ${className}`}
				disabled={disabled}
				style={style}
				onClick={disabled?null:onClick}
			>
				{children}
			</span>
		);
	}
}
export default Zbutton;
