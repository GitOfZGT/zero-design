import React from "react";
import ZpureComponent from "../ZpureComponent";
import PropTypes from "prop-types";
import "./style.scss";
export class ZbgImage extends ZpureComponent {
	static propTypes = {
		url: PropTypes.string,
		position: PropTypes.string, // top | center
		className: PropTypes.string,
		style: PropTypes.object,
		onClick: PropTypes.func,
	};
	static defaultProps = {
		position: "center",
	};
	render() {
		let boxclassName = `z-bg-image-box z-flex-items-center ${this.props.className ? this.props.className : ""} ${
			this.props.url ? "" : "no-url"
		}`;
		return (
			<div
				className={boxclassName}
				onClick={e => {
					this.props.onClick && this.props.onClick(e);
				}}
				style={this.props.style}
			>
				{this.props.url ? null : <span>无图片</span>}
				<div
					className={`z-bg-image is-bg-${this.props.position}`}
					style={{ backgroundImage: `url(${this.props.url})` }}
				/>
				{this.props.children}
			</div>
		);
	}
}

export default ZbgImage;
