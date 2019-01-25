import React from "react";import ZpureComponent from "../ZpureComponent";
import PropTypes from "prop-types";
import Prism from "prismjs";
// import cssClass from "./style.scss";
export class ZcodeHighlight extends ZpureComponent {
	static propTypes = {
		mode: PropTypes.string, // block || inline || html
		lang: PropTypes.string,
		children: PropTypes.string,
	};
	static defaultProps = {
		lang: "html",
		mode: "block",
	};
	componentDidMount() {
		const { children, mode } = this.props;
		if (children) {
			if (children && mode === "html") {
				const childHtml = children.replace(/\<pre/g, '<pre class="line-numbers"');
				this.boxEl.innerHTML = childHtml;
			}
			Prism.highlightAllUnder(this.boxEl);
		}
	}
	render() {
		const { children, mode } = this.props;
		let childHtml = null;
		if (children && mode !== "html") {
			const code = <code className={`language-${this.props.lang}`}>{this.props.children}</code>;
			childHtml = this.props.mode === "block" ? <pre className="line-numbers">{code}</pre> : code;
		}
		return <div ref={(el) => (this.boxEl = el)}>{childHtml}</div>;
	}
}

export default ZcodeHighlight;
