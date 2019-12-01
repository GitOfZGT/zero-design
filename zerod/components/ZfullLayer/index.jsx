import React from "react";
import ReactDOM from "react-dom";
import ZpureComponent from "../ZpureComponent";
import PropTypes from "prop-types";
import ZpageLoading from "../ZpageLoading";
import { once } from "../zTool";
import ModalContent from "../ZrightModal/ModalContent";
import RightModals from "../ZrightModal/RightModals";
import {
	const_showRightModal,
	const_showModalLoading,
	const_getModalScrollInstance,
	const_getScrollAreaWrapperEl,
	const_getInsertLocation,
} from "../constant";
import ZerodLayerContext from "../ZerodLayerContext";
import "./style.scss";
export class ZfullLayer extends ZpureComponent {
	static propTypes = {
		header: PropTypes.node,
		children: PropTypes.node,
		type: PropTypes.string, //normal | dark
		exportMethods: PropTypes.func,
		// getWrapperEl: PropTypes.func,
		// getScrollInstance: PropTypes.func,
		scroll: PropTypes.bool,
	};
	static defaultProps = {
		scroll: true,
		type: "dark",
	};
	isScale = false;
	getWrapperEl = el => {
		this.defaultWrapper = el;
	};
	getScrollInstance = scroll => {
		this.layerSroll = scroll;
	};
	methods = {
		showLayerRightModal: (show, witch, content, scroll, onTransitionend, wrapperEl, width) => {
			const_showRightModal.call(this, show, witch, content, scroll, onTransitionend, wrapperEl, width);
		},
		showLayerModalLoading: (show, witch,tip) => {
			if (witch === "mainRoute") {
				this.methods.showLoading(show,tip);
				return;
			}
			const_showModalLoading.call(this, show, witch);
		},
		getLayerModalInsertLocation: const_getInsertLocation,
		getLayerModalScrollInstance: witch => {
			if (witch === "mainRoute") {
				return this.layerSroll;
			}
			return const_getModalScrollInstance.call(this, witch);
		},
		getLayerScrollAreaWrapperEl: witch => {
			if (witch === "mainRoute") {
				return this.defaultWrapper;
			}
			return const_getScrollAreaWrapperEl.call(this, witch);
		},
		showLoading: (show,tip) => {
			this.ZpageLoadingRef.current.methods.showLoading(show,tip);
		},
		showLayer: (show, callback, scale) => {
			if (show) {
				this.setState(
					scale
						? {
								show,
								scale,
						  }
						: {
								show,
						  },
					() => {
						setTimeout(() => {
							this.setState({
								transparent: false,
							});
							callback && callback();
						}, 10);
					},
				);
				this.isScale = scale;
			} else {
				if (this.isScale) {
					this.setState({
						scale: true,
						transparent: true,
					});
					once(this.bodyElRef.current, "transitionend", () => {
						this.setState(
							{
								show,
							},
							callback,
						);
					});
				} else {
					this.setState(
						{
							show,
						},
						callback,
					);
				}
			}
			if (scale && show) {
				return this.methods.amplify;
			}
		},
		amplify: () => {
			setTimeout(() => {
				this.setState({
					scale: false,
				});
				once(this.bodyElRef.current, "transitionend", () => {
					this.layerSroll && this.layerSroll.refresh();
				});
			}, 10);
		},
		closeLayer: () => {
			this.RightModalsRef.current.methods.closeAllModal(() => {
				this.methods.showLayer(false);
			});
		},
	};
	componentDidMount() {
		this.props.exportMethods && this.props.exportMethods(this.methods);
	}
	state = {
		show: false,
		scale: false,
		transparent: true,
	};
	ZpageLoadingRef = React.createRef();
	bodyElRef = React.createRef();
	layerElRef = React.createRef();
	RightModalsRef = React.createRef();
	render() {
		const { header, children, type } = this.props;
		const { scale, show, transparent } = this.state;
		return ReactDOM.createPortal(
			<ZerodLayerContext.Provider value={this.methods}>
				<div
					ref={this.layerElRef}
					className={`z-full-layer ${type} ${transparent ? "transparent" : ""}`}
					style={{ display: show ? "block" : "none" }}
				>
					{header ? <div className="z-full-layer-heading">{header}</div> : null}
					<div
						className={`z-full-layer-body ${scale ? "scale" : ""}`}
						ref={this.bodyElRef}
						style={header ? { height: "calc(100% - 64px)" } : null}
					>
						{show ? (
							<ModalContent
								getWrapperEl={this.getWrapperEl}
								scroll={this.props.scroll}
								getScrollInstance={this.getScrollInstance}
							>
								{children}
							</ModalContent>
						) : null}
					</div>
					<div className="close" onClick={this.methods.closeLayer}>
						<span className="text">×</span>
					</div>
					<ZpageLoading ref={this.ZpageLoadingRef} size="default" />
					<RightModals ref={this.RightModalsRef} />
				</div>
			</ZerodLayerContext.Provider>,
			document.body,
		);
	}
}

export default ZfullLayer;
