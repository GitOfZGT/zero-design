import React from "react";
import PropTypes from "prop-types";
import ZpureComponent from "../ZpureComponent";
import { Button, Popover } from "antd";
import "./style.scss";
class ZpopoverButton extends ZpureComponent {
	static propTypes = {
		title: PropTypes.any,
		content: PropTypes.any,
		onVisibleChange: PropTypes.func,
		onGetPopupContainer: PropTypes.func,
		exportMethods: PropTypes.func,
		isCustomVisible: PropTypes.bool,
		defaultDisabled: PropTypes.bool,
		defaultShow: PropTypes.bool,
		placement: PropTypes.string,
		btnClassName: PropTypes.string,
	};
	static defaultProps = {
		onGetButtonProps: () => {
			return {};
		},
		isCustomVisible: true,
		defaultDisabled: false,
		defaultShow: true,
		placement: "rightTop",
	};
	methods = {
		onVisibleChange: visible => {
			if (this.props.isCustomVisible && visible) {
				this.setState({
					visible: visible,
				});
			}
			this.props.onVisibleChange && this.props.onVisibleChange(visible);
		},
		getPopupContainer: () => {
			return this.props.onGetPopupContainer && this.props.onGetPopupContainer();
		},
		closePopover: () => {
			this.setState({
				visible: false,
			});
			this.props.onVisibleChange && this.props.onVisibleChange(false);
		},
		btnClick: () => {
			if (this.state.visible) {
				this.methods.closePopover();
			} else {
				this.setState({
					visible: true,
				});
				this.props.onVisibleChange && this.props.onVisibleChange(true);
			}
		},
		setDisabled: disabled => {
			this.setState({
				disabled,
			});
		},
		show: show => {
			this.setState({
				show,
			});
		},
	};
	state = {
		visible: false,
		disabled: this.props.defaultDisabled,
		show: this.props.defaultShow,
	};
	componentDidMount() {
		this.props.exportMethods && this.props.exportMethods(this.methods);
	}
	render() {
		const { title, content, isCustomVisible, placement, children, btnClassName } = this.props;
		const visible = isCustomVisible ? { visible: this.state.visible } : {};
		let buttonName = children;
		let isReactNode = false;
		if (React.isValidElement(children)) {
			isReactNode = true;
			buttonName = React.cloneElement(children, {
				...children.props,
				onClick: e => {
					this.methods.btnClick();
					children.props.onClick && children.props.onClick(e);
				},
				disabled: this.state.disabled,
				style: {
					...(children.props.style ? children.props.style : {}),
					...(this.state.show ? {} : { display: "none" }),
				},
				className: `${btnClassName} ${children.props.className ? children.props.className : ""}`,
			});
		}
		return (
			<span
				style={
					this.state.disabled ? { cursor: "not-allowed", display: "inline-block", pointerEvents: "none" } : {}
				}
			>
				<Popover
					placement={placement}
					title={
						<div className="z-scheduling-popover-title">
							{title}
							<span onClick={this.methods.closePopover} className="z-popover-close-btn">
								×
							</span>
						</div>
					}
					content={<div className="z-scheduling-popover-content">{content}</div>}
					trigger="contextMenu"
					overlayClassName="z-scheduling-popover"
					getPopupContainer={this.methods.getPopupContainer}
					onVisibleChange={this.methods.onVisibleChange}
					{...visible}
				>
					{isReactNode ? (
						buttonName
					) : (
						<Button
							type="primary"
							size="default"
							className={btnClassName}
							disabled={this.state.disabled}
							onClick={this.methods.btnClick}
							style={this.state.show ? {} : { display: "none" }}
						>
							{buttonName}
						</Button>
					)}
				</Popover>
			</span>
		);
	}
}

export default ZpopoverButton;
