import React from "react";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
class Com extends React.Component {
	static propTypes = {
		links: PropTypes.arrayOf(PropTypes.object),
		copyright: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	};
	render() {
		const { links, copyright } = this.props;
		return (
			<div
				className={`${cssClass["z-page-footer"]} ${this.props.className ? this.props.className : ""}`}
				ref={this.props.forwardRef}
			>
				{links ? (
					<div className={cssClass["z-footer-link"]}>
						{links.map((link, i) => (
							<a
								key={link.key ? link.key : i}
								target={link.blankTarget ? "_blank" : "_self"}
								href={link.href}
							>
								{link.title}
							</a>
						))}
					</div>
				) : null}
				{copyright ? (
					<div className={cssClass["z-footer-copyright"]}>
						{typeof copyright == "function" ? copyright() : copyright}
					</div>
				) : null}
			</div>
		);
	}
}
export const ZpageFooter = React.forwardRef((props, ref) => <Com {...props} forwardRef={ref} />);
export default ZpageFooter;
