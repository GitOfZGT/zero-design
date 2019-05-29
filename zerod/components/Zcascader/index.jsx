import React from "react";
import ZpureComponent from "../ZpureComponent";
import ZpageLoading from "../ZpageLoading";
import PropTypes from "prop-types";
import cssClass from "./style.scss";
import { hasClass, addClass, removeClass, getStyle, GenNonDuplicateID } from "../zTool";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import throttle from "lodash.throttle";
const rotateClassName = cssClass["rotate-90"];
const itemClassName = cssClass["z-cascader-item"];
import { animateTimout } from "../constant";
export class ZcascaderItemGroup extends ZpureComponent {
	static propTypes = {
		itemData: PropTypes.arrayOf(PropTypes.object),
		itemKeys: PropTypes.object,
		onItemClick: PropTypes.func,
		label: PropTypes.string,
	};
	static defaultProps = {
		itemKeys: {},
		itemData: [],
	};
	itemKeys = Object.assign({ name: "name", id: "id" }, this.props.itemKeys);
	getDefaultListData = list => {
		return list.map(item => {
			const name = item[this.itemKeys.name];
			return {
				active: item.active,
				disabled: item.disabled,
				data: item,
				name,
				id: item[this.itemKeys.id],
			};
		});
	};
	saveDefaultData = [];
	itemLens = -1;
	showLensData = () => {
		this.saveDefaultData = this.getDefaultListData(this.props.itemData);
		return this.moreBtnEl && hasClass(this.moreBtnEl, rotateClassName)
			? this.saveDefaultData.slice(0)
			: this.saveDefaultData.slice(0, this.itemLens);
	};
	state = {
		itemData: [],
		animateEnter: true,
		animateExit: false,
	};
	componentDidUpdate(prevProps) {
		if (prevProps.itemData !== this.props.itemData) {
			this.setState({
				animateEnter: true,
				animateExit: false,
			});
			this.setShowLens();
		}
	}
	methods = {
		showMore: () => {
			if (hasClass(this.moreBtnEl, rotateClassName)) {
				this.setState({
					animateEnter: true,
					animateExit: true,
					itemData: [...this.saveDefaultData.slice(0, this.itemLens)],
				});
				removeClass(this.moreBtnEl, rotateClassName);
			} else {
				this.setState({
					animateEnter: true,
					animateExit: true,
					itemData: [...this.saveDefaultData.slice(0)],
				});
				addClass(this.moreBtnEl, rotateClassName);
			}
		},
	};
	setShowLens = () => {
		this.bodyEl = this.infoEl.querySelector(".z-info-right");
		const bodyWidth = parseInt(getStyle(this.bodyEl, "width"), 10) - 32 - 40;
		let rowCountWidth = 0;
		this.itemLens = 0;
		for (let index = 0; index < this.props.itemData.length; index++) {
			const item = this.props.itemData[index];
			const _item = document.createElement("div");
			_item.innerText = item[this.itemKeys.name];
			_item.className = itemClassName;
			_item.style.visibility = "hidden";
			this.bodyEl.appendChild(_item);
			const itemWidth = parseInt(getStyle(_item, "width"), 10);
			this.bodyEl.removeChild(_item);
			if (rowCountWidth + itemWidth > bodyWidth) {
				break;
			} else {
				rowCountWidth += itemWidth;
				this.itemLens++;
			}
		}
		this.setState({
			itemData: this.showLensData(),
		});
	};
	componentDidMount() {
		this.setShowLens();
	}
	render() {
		return (
			<dl className="z-info" ref={el => (this.infoEl = el)}>
				<dt className="z-info-left">
					<span className="z-margin-bottom-10">{this.props.label}</span>
				</dt>
				<TransitionGroup
					component="dd"
					className="z-info-right"
					enter={this.state.animateEnter}
					exit={this.state.animateExit}
					appear={true}
				>
					{this.state.itemData.map((item, i) => {
						return (
							<CSSTransition
								key={item.id}
								timeout={this.state.animateExit ? animateTimout.flipOutTime : animateTimout.flipInTime}
								classNames="flipY"
							>
								<div
									className={`z-margin-bottom-10  ${itemClassName} ${
										item.active ? cssClass["active"] : ""
									} ${item.disabled ? cssClass["disabled"] : ""}`}
									onClick={event => {
										this.props.onItemClick && this.props.onItemClick(event, item, i, this.props);
									}}
								>
									{item.name}
								</div>
							</CSSTransition>
						);
					})}
				</TransitionGroup>
				{this.saveDefaultData.length > this.itemLens ? (
					<dd className={cssClass["z-cascader-right"]}>
						<i
							className="zero-icon zerod-doubleleft"
							ref={el => {
								this.moreBtnEl = el;
							}}
							onClick={this.methods.showMore}
						/>
					</dd>
				) : null}
			</dl>
		);
	}
}

export class Zcascader extends ZpureComponent {
	static propTypes = {
		itemKeys: PropTypes.object,
		lables: PropTypes.arrayOf(PropTypes.string),
		tree: PropTypes.arrayOf(PropTypes.object),
		treeAsync: PropTypes.func,
		selections: PropTypes.arrayOf(PropTypes.string),
		onSelect: PropTypes.func,
	};
	static defaultProps = {
		lables: ["省", "市", "区/县", "街道/镇", "村"],
		tree: [],
		selections: [],
	};
	itemKeys = Object.assign(
		{ name: "name", id: "id", disabled: "disabled", children: "children" },
		this.props.itemKeys,
	);

	getSelections = () => {
		this.selections = this.props.selections.slice(0);
	};
	state = {
		cascaders: [],
		showLoading: false,
	};

	methods = {
		onSelectClick: throttle((event, selectItem, selectItemIndex, props) => {
			if (selectItem.disabled) {
				return;
			}
			this.clickCascadersIndex = props.index;
			const currentCascaders = this.currentViewCascaders;
			// currentCascaders.splice(props.index + 1);

			this.selections.splice(this.clickCascadersIndex);
			this.selectItems.splice(this.clickCascadersIndex);

			if (selectItem.active) {
				//点击取消选择
				selectItem.active = false;
				if (typeof this.clickCascadersIndex === "number") {
					currentCascaders.splice(this.clickCascadersIndex + 1);
				}
				this.setState(
					{
						cascaders: [...currentCascaders],
					},
					() => {
						this.props.onSelect && this.props.onSelect(this.selectItems);
					},
				);
			} else {
				//选择
				if (!this.selections.includes(selectItem.id)) {
					this.selections.push(selectItem.id);
					const activeItem = { ...selectItem.data };
					activeItem[this.itemKeys.children] = null;
					this.selectItems.push(activeItem);
				}

				const cascsder = currentCascaders[this.clickCascadersIndex];
				const items = cascsder.itemData.slice(0);
				for (let i = 0; i < items.length; i++) {
					const element = items[i];
					if (element.active) {
						element.active = false;
						break;
					}
				}
				items[selectItemIndex].active = true;
				currentCascaders[this.clickCascadersIndex].itemData = items;

				this.methods.getChildsNode(selectItem.data);
			}
		}, 600),
		getChildsNode: data => {
			const childs = data[this.itemKeys.children];
			if (this.props.treeAsync) {
				this.setState({
					showLoading: true,
				});
				this.props.treeAsync(data, this.methods.resolveChilds);
			} else {
				this.methods.resolveChilds(childs);
			}
		},
		resolveChilds: childs => {
			const currentCascaders = this.currentViewCascaders;
			if (!Array.isArray(childs) || !childs.length) {
				this.setState(
					{
						cascaders: [...currentCascaders],
						showLoading: false,
					},
					() => {
						this.props.onSelect && this.selections.length && this.props.onSelect(this.selectItems);
					},
				);
				return;
			}
			if (typeof this.clickCascadersIndex === "number") {
				currentCascaders.splice(this.clickCascadersIndex + 1);
			}
			const currentLen = currentCascaders.length;
			let activeChils = null;
			currentCascaders.push({
				id: GenNonDuplicateID(),
				label: this.props.lables[currentLen],
				itemData: childs.map(item => {
					const active = this.selections.includes(item[this.itemKeys.id]);
					if (active) {
						const activeItem = { ...item };
						activeItem[this.itemKeys.children] = null;
						this.selectItems.push(activeItem);
					}
					const _childs = item[this.itemKeys.children];
					if (active && Array.isArray(_childs)) {
						activeChils = _childs;
					}
					return {
						...item,
						active,
						disabled: item[this.itemKeys.disabled],
					};
				}),
			});
			if (activeChils) {
				this.methods.resolveChilds(activeChils);
				return;
			}
			this.setState(
				{
					cascaders: [...currentCascaders],
					showLoading: false,
				},
				() => {
					this.props.onSelect && this.selections.length && this.props.onSelect(this.selectItems);
				},
			);
		},
	};
	initSelected() {
		this.initVars();
		this.getSelections();
		const rootItem = { [this.itemKeys.children]: this.props.tree, root: true };
		this.methods.getChildsNode(rootItem);
	}
	initVars() {
		this.selections = [];
		this.selectItems = [];
		this.clickCascadersIndex = null;
		this.currentViewCascaders = [];
	}
	componentDidMount() {
		this.initSelected();
	}
	componentDidUpdate(prevProps) {
		if (prevProps.tree !== this.props.tree || prevProps.selections !== this.props.selections) {
			this.initSelected();
		}
	}
	render() {
		return (
			<section className={cssClass["z-cascader"]}>
				<ZpageLoading showLoading={this.state.showLoading} />
				{this.state.cascaders.map((item, i) => {
					return (
						<ZcascaderItemGroup
							key={item.id}
							index={i}
							itemData={item.itemData}
							label={item.label}
							onItemClick={this.methods.onSelectClick}
							itemKeys={this.props.itemKeys}
						/>
					);
				})}
			</section>
		);
	}
}

export default Zcascader;
