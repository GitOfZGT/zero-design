import React from "react";
import { Spin } from "antd";
import PropTypes from "prop-types";
import cssClass from "./style.scss";

export class ZpageLoading extends React.PureComponent {
	static propTypes = {
		showLoading: PropTypes.bool,
		size: PropTypes.string,
		exportMethods: PropTypes.func,
	};
	methods = {
		showLoading: (show, tip) => {
			this.setState({
				loading: show,
				tip,
			});
		},
	};
	state = {
		loading: false,
		tip: "",
	};
	componentDidMount() {
		this.props.exportMethods && this.props.exportMethods(this.methods);
	}
	render() {
		const { size, showLoading, tip, ...others } = this.props;
		const loading = showLoading !== undefined ? showLoading : this.state.loading;
		return (
			<div className={cssClass["z-page-loading-cover"]} style={{ display: loading ? "block" : "none" }}>
				<div className={cssClass["z-page-loading"]}>
					<Spin
						spinning={loading}
						size={size ? size : "large"}
						tip={this.state.tip ? this.state.tip : tip}
						{...others}
					/>
				</div>
			</div>
		);
	}
}

export default ZpageLoading;
