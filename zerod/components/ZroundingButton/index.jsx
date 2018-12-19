import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import { Tooltip } from "antd";
const coverClass = cssClass["z-round-btn-cover"];
const btnWidth = 40,
	btnMargin = 10;
import { on, off, once, deepCopy } from "../zTool";
import ZerodMainContext from "../ZerodMainContext";
export const ZroundingButton = ZerodMainContext.setConsumer(
	class extends React.Component {
		static propTypes = {
			className: PropTypes.string,
			items: PropTypes.arrayOf(PropTypes.object),
			onVisibleChange:PropTypes.func,
		};
		static defaultProps = {
			items: [],
		};
		on = on;
		off = off;
		diameter = 0;
		$btns = [];
		isShow = false;
		transitioning = false;
		first = true;
		setPosition = () => {
			const postion = this.childEl.getBoundingClientRect();
			const direction = [
				postion.top,
				window.innerWidth - postion.left - postion.width,
				window.innerHeight - postion.top - postion.height,
				postion.left,
			];
			this.directionLen = direction.map((n) => {
				const len = Math.floor(n / (btnMargin + btnWidth));
				return len > 0 ? new Array(len).fill(1) : [];
			});
			this.diameterW = postion.width;
			this.diameterH = postion.height;
			const _leftCenter = postion.left + postion.width / 2;
			const _topCenter = postion.top + postion.height / 2;
			const $btns = (this.$btns = Array.prototype.slice.call(this.coverEl.children));
			$btns.forEach((el, i) => {
				el.style.top = _topCenter - btnWidth / 2 + "px";
				el.style.left = _leftCenter - btnWidth / 2 + "px";
				el.style.opacity = 0;
				el.style.transform = "scale(0.1)";
				if (this.first) {
					on(el, "click", (e) => {
						let parentEl = e.target;
						while (
							parentEl &&
							(typeof parentEl.className == "string" &&
							!parentEl.className.includes(cssClass["z-round-btn"])||typeof parentEl.className !== "string")
						) {
							parentEl = parentEl.parentElement;
						}
						const item = this.props.items[i];
						if (typeof item.onClick == "function" && parentEl && parentEl.dataset.disabled == "0") {
							item.onClick(item);
							this.showBtns();
						}

						e.stopPropagation();
					});
				}
			});
			this.first = false;
		};
		getTo(diameter, i) {
			const to = diameter / 2 + btnWidth / 2 + btnMargin;
			const d = to + (btnWidth + btnMargin) * i;
			return d;
		}
		showBtns = () => {
			if (!this.childEl || this.transitioning) return;
			this.transitioning = true;
			if (this.isShow) {
				this.$btns.forEach((el, i) => {
					if (i == 0) {
						once(el, "transitionend", () => {
							this.coverEl.style.display = "none";
							this.transitioning = false;
						});
					}
					el.style.opacity = 0;
					el.style.transform = "scale(0.1)";
				});
				this.isShow = false;

			} else {
				this.setPosition();
				if (!this.$btns.length) return;
				this.coverEl.style.display = "block";
				this.isShow = true;
				setTimeout(() => {
					const theBtns = this.$btns.slice(0);
					const lens = deepCopy(this.directionLen);
					let i = 0;
					while (theBtns.length) {
						lens.forEach((dir, index) => {
							if (dir.length && theBtns.length) {
								const el = theBtns.shift();
								let translate = "";
								switch (index) {
									case 0:
										translate = `translate(0px,-${this.getTo(this.diameterH, i)}px)`;
										break;
									case 1:
										translate = `translate(${this.getTo(this.diameterW, i)}px,0px)`;
										break;
									case 2:
										translate = `translate(0px,${this.getTo(this.diameterH, i)}px)`;
										break;
									case 3:
										translate = `translate(-${this.getTo(this.diameterW, i)}px,0px)`;
										break;
								}
								el.style.opacity = 1;
								el.style.transform = `scale(1) ${translate}`;
								dir.shift();
							}
						});
						i++;
					}
					this.transitioning = false;
				}, 10);
			}
			this.props.onVisibleChange&&this.props.onVisibleChange(this.isShow);
		};
		closeBtns = () => {
			if (this.isShow) this.showBtns();
		};
		setEvent = (ev) => {
			const childs = Array.prototype.slice.call(this.wrapEl.children);
			if (childs.length) {
				this.childEl = childs[0];
				this[ev](this.childEl, "click", this.showBtns);
				this[ev](document.documentElement, "click", this.closeBtns);
			}
			if (this.props.getInsertLocation) {
				const insert = this.props.getInsertLocation(this.wrapEl);
				const instance = this.props.getScrollInstance(insert);
				instance.scroll[ev]("scrollStart", this.closeBtns);
			}
		};
		componentDidMount() {
			this.setEvent("on");
		}
		componentWillUnmount() {
			this.setEvent("off");
		}
		render() {
			const { className,style } = this.props;
			const btnItems = this.props.items.map((item) => {
				return {
					...item,
					show: item.show == undefined ? true : item.show,
					disabled: item.disabled == undefined ? false : item.disabled,
				};
			});
			return (
				<span ref={(el) => (this.wrapEl = el)} className={className ? className : ""} style={style}>
					{this.props.children}
					{ReactDOM.createPortal(
						<div className={coverClass} ref={(el) => (this.coverEl = el)}>
							{btnItems.map((item, i) => {
								return item.show ? (
									<Tooltip placement="top" title={item.name} mouseLeaveDelay={0}>
										<div
											className={`${cssClass["z-round-btn"]} ${
												item.disabled ? cssClass["is-disabled"] : ""
											}`}
											key={i}
											data-disabled={item.disabled ? "1" : "0"}
										>
											{item.icon
												? typeof item.icon == "function"
													? item.icon()
													: item.icon
												: typeof item.name == "string" && item.name
												? item.name.slice(0, 1)
												: ""}
										</div>
									</Tooltip>
								) : null;
							})}
						</div>,
						document.body,
					)}
				</span>
			);
		}
	},
);

export default ZroundingButton;
