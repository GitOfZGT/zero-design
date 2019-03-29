import React from "react";
import ZpureComponent from "../ZpureComponent";
import PropTypes from "prop-types";
import { Icon } from "antd";

import cssClass from "./style.scss";
// import Zlayout from "../Zlayout";
import ZpageLoading from "../ZpageLoading";
import { once } from "../zTool";
import RightModals from "./RightModals";
import ModalContent from "./ModalContent";
export class ZrightModal extends ZpureComponent {
	static propTypes = {
		show: PropTypes.bool,
		onClose: PropTypes.func,
		getWrapperEl: PropTypes.func, //
		showLoading: PropTypes.bool,
		mask: PropTypes.bool,
		scroll: PropTypes.bool,
		getScrollInstance: PropTypes.func,
		onTransitionend: PropTypes.func,
		zIndex: PropTypes.number,
		width: PropTypes.string,
		name: PropTypes.string,
		exportMethods: PropTypes.func,
	};
	static defaultProps = {
		scroll: true,
		mask: true,
		show: false,
		zIndex: 999,
		width: "90%",
	};
	state = {
		showCover: false,
		transparent: true,
		show: false,
	};
	hideClass = cssClass["is-right-hide"];
	closeModal = () => {
		this.props.onClose && this.props.onClose();
	};
	showAfter = (e) => {
		// if (e.target !== e.currentTarget) return;

		document.documentElement.style.overflow = "";
		this.props.onTransitionend && this.props.onTransitionend(this.props.show);
	};
	componentDidMount() {
		this.props.exportMethods && this.props.exportMethods(this.methods);
	}
	componentDidUpdate(prevProps) {
		if (this.props.show !== prevProps.show) {
			if (this.props.show) {
				this.setState({ showCover: true }, () => {
					setTimeout(() => {
						this.setState({
							transparent: false,
						});
					}, 10);
					setTimeout(() => {
						this.setState({
							show: this.props.show,
						});
					}, 60);
					once(this.boxEl, "transitionend", this.showAfter);
				});
			} else {
				this.setState({
					show: this.props.show,
				});
				setTimeout(() => {
					this.setState({
						transparent: true,
					});
					this.props.mask
						? once(this.coverElRef.current, "transitionend", () => {
								this.setState({
									showCover: false,
								});
								this.showAfter();
						  })
						: this.showAfter();
				}, 100);
			}
			document.documentElement.style.overflow = "hidden";
		}
	}
	methods = {
		showLoading: (show) => {
			this.loadingRef.current.methods.showLoading(show);
		},
	};
	loadingRef = React.createRef();
	coverElRef = React.createRef();
	render() {
		const { transparent } = this.state;
		return (
			<>
				{this.props.mask ? (
					<div
						ref={this.coverElRef}
						className={`${cssClass["z-pop-cover"]} ${transparent ? cssClass["transparent"] : ""}`}
						style={{ display: this.state.showCover ? "block" : "none", zIndex: this.props.zIndex - 1 }}
						onClick={this.closeModal}
					/>
				) : null}
				<div
					ref={(el) => (this.boxEl = el)}
					onClick={(e) => {
						e.nativeEvent.stopImmediatePropagation();
					}}
					className={`${cssClass["z-pop-content"]} app-body ${this.state.show ? "" : this.hideClass}`}
					style={{ width: this.props.width, zIndex: this.props.zIndex }}
					data-zgt_modal={this.props.name}
				>
					<ModalContent
						getWrapperEl={this.props.getWrapperEl}
						scroll={this.props.scroll}
						getScrollInstance={this.props.getScrollInstance}
						children={this.props.children}
					/>
					<div className={`${cssClass["z-pop-close"]} z-flex-items-v-center`}>
						<Icon type="right" className={`${cssClass["z-btn"]}`} onClick={this.closeModal} />
					</div>
					<ZpageLoading ref={this.loadingRef} showLoading={this.props.showLoading} />
				</div>
			</>
		);
	}
}

ZrightModal.RightModals = RightModals;
export default ZrightModal;
