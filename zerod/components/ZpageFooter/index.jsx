import React from "react";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
class Com extends React.Component {
	static propTypes = {
		links: PropTypes.arrayOf(PropTypes.object),
		copyright: PropTypes.any,
	};
	render() {
		const { links, copyright } = this.props;
		return (
			<div
				className={`${cssClass["z-page-footer"]} ${this.props.className ? this.props.className : ""}`}
				ref={this.props.forwardRef}
			>
				{links && (
					<div className={cssClass["z-footer-link"]}>
						{links.map((link) => (
							<a key={link.key} target={link.blankTarget ? "_blank" : "_self"} href={link.href}>
								{link.title}
							</a>
						))}
					</div>
				)}
				{copyright && <div className={cssClass["z-footer-copyright"]}>{copyright}</div>}
			</div>
		);
	}
}
export const ZpageFooter = React.forwardRef((props, ref) => <Com {...props} forwardRef={ref} />);
export default ZpageFooter;
