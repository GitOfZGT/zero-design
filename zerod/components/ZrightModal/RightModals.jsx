import React from "react";
import ReactDOM from "react-dom";
// my component
import ZrightModal from "./index";

import { dataType, GenNonDuplicateID } from "../zTool/";

export  class RightModals extends React.PureComponent {
	methods = {
		closeAllModal: () => {
			this.state.modals.forEach((modal) => {
				modal.ref.current.methods.close();
			});
		},
		getModalEls: (wrapperEl) => {
			const modalEls = [];
			Array.prototype.slice.call(wrapperEl.children).forEach((el) => {
				if (el.dataset["zgt_modal"]) {
					modalEls.push(el);
				}
			});
			return modalEls;
		},
		findModal: (witch) => {
			let modal = null;
			for (let index = 0; index < this.state.modals.length; index++) {
				const element = this.state.modals[index];
				if (element.options.witch == witch) {
					modal = element;
					break;
				}
			}
			return modal;
		},
		changeModals: (opt, wrapperEl) => {
			if (this.opening) return;
			this.opening = true;
			const end = opt.onTransitionend;
			const id = GenNonDuplicateID();
			opt.onTransitionend = (show) => {
				this.opening = false;
				if (show) {
					// const laster = this.state.modals.slice(-1)[0];
					// laster &&
					// 	laster.ref.current.methods.showModal({
					// 		content: laster.content,
					// 	});
				} else {
					const index = this.state.modals.findIndex((item) => item.id == id);
					this.state.modals.splice(index, 1);
					this.setState({
						modals: [...this.state.modals],
					});
				}
				typeof end == "function" && end(show);
			};

			if (opt.show) {
				const witch = opt.witch ? opt.witch : "modal_" + id;
				const hased = this.methods.findModal(witch);
				if (hased) {
					console.warn(`modal:"${witch}"只能打开一次`);
					return;
				}
				let len = 0;
				for (let index = 0; index < this.state.modals.length; index++) {
					const element = this.state.modals[index];
					if (element.wrapperEl == wrapperEl) {
						len++;
					}
				}
				if (len > 0) {
					const modalEls = this.methods.getModalEls(wrapperEl);
					modalEls.forEach((el) => {
						el.previousElementSibling.style.backgroundColor = "transparent";
					});
				}
				const width = opt.width ? opt.width : 94 - len * 6 + "%";
				const zIndex = 99 + len * 6;
				this.setState(
					{
						modals: [
							...this.state.modals,
							...[
								{
									id,
									wrapperEl,
									ref: React.createRef(),
									// content: opt.content,
									options: {
										...opt,
										width,
										zIndex,
										// content: null,
										witch,
									},
								},
							],
						],
					},
					() => {
						const laster = this.state.modals.slice(-1)[0];
						laster && laster.ref.current.methods.showModal(laster.options);
					},
				);
			} else {
				if (opt.witch) {
					const modal = this.methods.findModal(opt.witch);
					modal && modal.ref.current.methods.close();
				} else {
					const laster = this.state.modals.slice(-1)[0];
					laster && laster.ref.current.methods.close();
				}
			}
		},
	};
	onBeforeClose = (props) => {
		const index = this.state.modals.findIndex((item) => item.id == props.id);
		if (index == this.state.modals.length - 1 && this.state.modals.length > 1) {
			const modalEls = this.methods.getModalEls(props.wrapperEl);
			modalEls[this.state.modals.length - 2].previousElementSibling.style.backgroundColor = "";
		}
	};
	state = {
		modals: [],
	};
	render() {
		return this.state.modals.map((item) => {
			return item.wrapperEl
				? ReactDOM.createPortal(
						<RightModalSelf
							id={item.id}
							key={item.id}
							wrapperEl={item.wrapperEl}
							ref={item.ref}
							onBeforeClose={this.onBeforeClose}
						/>,
						item.wrapperEl,
				  )
				: null;
		});
	}
}

class RightModalSelf extends React.PureComponent {
	methods = {
		showModal: (opt) => {
			this.setState(opt);
		},
		showModalLoading: (show) => {
			this.modalRef.current && this.modalRef.current.methods.showLoading(show);
		},
		getScrollInstance: () => {
			return this.ScrollInstance;
		},
		getWrapperEl: () => {
			return { wrapperEl: this.wrapperEl, methods: this.wrapperMethods };
		},
		close: () => {
			this.props.onBeforeClose && this.props.onBeforeClose(this.props);
			this.setState({
				show: false,
			});
		},
	};
	state = {
		witch: "modalName",
		zIndex: 9,
		width: "90%",
		show: false,
		scroll: true,
		onTransitionend: () => {},
		content: null,
		mask:true,
	};
	modalRef = React.createRef();
	getScrollInstance = (instance) => (this.ScrollInstance = instance);
	getWrapperEl = (el, method) => {
		this.wrapperEl = el;
		this.wrapperMethods = method;
	};
	render() {
		const { witch, zIndex, width, show, scroll, content, onTransitionend ,mask} = this.state;
		const newOnTransitionend = (show) => {
			dataType.isFunction(onTransitionend) && onTransitionend(show, this.state);
		};
		return (
			<ZrightModal
				ref={this.modalRef}
				name={witch}
				zIndex={zIndex}
				width={width}
				show={show}
				scroll={scroll}
				getScrollInstance={this.getScrollInstance}
				onClose={this.methods.close}
				onTransitionend={newOnTransitionend}
				getWrapperEl={this.getWrapperEl}
				mask={mask}
			>
				{content}
			</ZrightModal>
		);
	}
}
export default  RightModals;