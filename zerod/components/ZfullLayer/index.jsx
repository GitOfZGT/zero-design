import React from "react";
import ReactDOM from "react-dom";
import ZpureComponent from "../ZpureComponent";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import ZpageLoading from "../ZpageLoading";

export class ZfullLayer extends ZpureComponent {
	static propTypes = {
		header: PropTypes.node,
		children: PropTypes.node,
		exportMethods: PropTypes.func,
	};
	methods = {
		showLayer: (show, callback) => {
			this.setState(
				{
					show,
				},
				callback,
			);
		},
		closeLayer: () => {
			this.methods.showLayer(false);
		},
		showLoading: (show) => {
			this.setState({
				loading: show,
			});
		},
	};
	returned = this.props.exportMethods && this.props.exportMethods(this.methods);
	state = {
		show: false,
		loading: false,
	};
	render() {
		const { header, children } = this.props;
		return ReactDOM.createPortal(
			<div className="z-full-layer" style={{ display: this.state.show ? "block" : "none" }}>
				<div className="z-full-layer-heading">{header}</div>
				<div className="z-full-layer-body">{children}</div>
				<div className="close" onClick={this.methods.closeLayer}>
					<span className="text">×</span>
				</div>
				<ZpageLoading showLoading={this.state.loading} size="default" />
			</div>,
			document.body,
		);
	}
}

export default ZfullLayer;
