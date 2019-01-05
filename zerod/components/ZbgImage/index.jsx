import React from "react";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
export class ZbgImage extends React.PureComponent {
	static propTypes = {
		url: PropTypes.string,
		position: PropTypes.string,// top | center
		className: PropTypes.string,
		style: PropTypes.object,
		onClick: PropTypes.func,
	};
    static defaultProps={
        position:'center'
    }
	render() {
		let boxclassName = `${cssClass['z-bg-image-box']} z-flex-items-center ${this.props.className?this.props.className:''}`;
		return (
			<div
				className={boxclassName}
				onClick={(e) => {
					this.props.onClick && this.props.onClick(e);
				}}
				style={this.props.style}
			>
				<span>图片</span>
				<div className={`${cssClass["z-bg-image"]} ${cssClass[`is-bg-${this.props.position}`]}`} style={{ backgroundImage: `url(${this.props.url})` }} />
				{this.props.children}
			</div>
		);
	}
}

export default ZbgImage;
