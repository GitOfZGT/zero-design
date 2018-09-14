import React from "react";
class Loading extends React.Component {
	static defaultProps = {
		showGlobalLoading: true,
	};

	componentDidMount() {
		this.parentEL = this.wrapEl.parentElement;
		document.body.appendChild(this.wrapEl);//放进body
	}
	componentWillUnmount() {
		this.parentEL.appendChild(this.wrapEl);//卸载之前放回来
	}
	render() {
		if (this.props.error) {
			throw Error(this.props.error);
		}
		return (
			<div
				className="global-loading"
				style={{ display: this.props.showGlobalLoading ? "block" : "none" }}
				ref={(el) => (this.wrapEl = el)}
			>
				<div className="global-loading-center-absolute">
					<div className="object object_one" />
					<div className="object object_two" />
					<div className="object object_three" />
					<div className="object object_four" />
				</div>
			</div>
		);
	}
}
export default Loading;
