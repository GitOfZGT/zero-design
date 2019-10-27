import React from "react";import ZpureComponent from "../ZpureComponent";
import PropTypes from "prop-types";
import "./style.scss";
class Com extends ZpureComponent {
	static propTypes = {
		links: PropTypes.arrayOf(PropTypes.object),
		copyright: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	};
	render() {
		const {show, links, copyright,className,forwardRef,ref,...others } = this.props;
		return (
			<div
				className={`z-page-footer ${className ? className : ""}`}
				ref={forwardRef}
				{...others}
			>
				{links ? (
					<div className="z-footer-link">
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
					<div className="z-footer-copyright">
						{typeof copyright == "function" ? copyright() : copyright}
					</div>
				) : null}
			</div>
		);
	}
}
export const ZpageFooter = React.forwardRef((props, ref) => <Com {...props} forwardRef={ref} />);
export default ZpageFooter;
