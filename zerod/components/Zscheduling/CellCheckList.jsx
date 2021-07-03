import React from "react";
import PropTypes from "prop-types";
import ZpureComponent from "../ZpureComponent";
import { dataType,isWhiteColor } from "../zTool";
import ZpageLoading from "../ZpageLoading";
import { Checkbox, Button, Empty } from "antd";

class RowCheckBox extends React.PureComponent {
	static propTypes = {
		checkList: PropTypes.array,
		mapKeys: PropTypes.object,
		nameReader: PropTypes.func,
		onChange: PropTypes.func,
	};
	static defaultProps = {
		mapKeys: { value: "id", name: "name", color: "color", disabled: "disabled" },
		checkList: [],
	};
	methods = {
		setNewCheckList: (newList) => {
			this.setState({
				checkList: newList,
			});
		},
		onChange: (checkedValue) => {
			this.methods.check(checkedValue);
			this.props.onChange && this.props.onChange(checkedValue);
		},
		check: (checkedValue) => {
			this.setState({
				checked: checkedValue,
			});
		},
		setDisabled: (values, newList) => {
			this.setState({
				checkList: (newList ? newList : this.state.checkList).map((item) => {
					return { ...item, [this.props.mapKeys.disabled]: values.includes(item[this.props.mapKeys.value]) };
				}),
			});
		},
	};
	initList = () => {};
	state = {
		checked: [],
		checkList: this.props.checkList,
	};
	componentDidUpdate(prevProps) {
		if (this.props.checkList !== prevProps.checkList) {
			this.setState({
				checkList: this.props.checkList,
			});
		}
	}
	render() {
		const { mapKeys, nameReader } = this.props;
		const { checkList } = this.state;
		return (
			<Checkbox.Group value={this.state.checked} onChange={this.methods.onChange}>
				{checkList.map((check, i) => {
					return (
						<p key={i} className="z-margin-bottom-0-important">
							<Checkbox value={check[mapKeys.value]} disabled={check.disabled}>
								<span
									className={`z-schedul-color-span ${isWhiteColor(check[mapKeys.color]) ? 'z-tag-white' : ''}`}
									style={{ backgroundColor: check[mapKeys.color] }}
								/>
								{nameReader ? nameReader(check, i) : check[mapKeys.name]}
							</Checkbox>
						</p>
					);
				})}
			</Checkbox.Group>
		);
	}
}

class CellCheckList extends ZpureComponent {
	static propTypes = {
		exportMethods: PropTypes.func,
		checkList: PropTypes.arrayOf(PropTypes.object),
		checkNameRender: PropTypes.func, //
		onChange: PropTypes.func,
		onOk: PropTypes.func,
		onCancel: PropTypes.func,
		mapKeys: PropTypes.object,
	};

	methods = {
		setNewCheckList: (newList) => {
			this.checksRef.current.methods.setNewCheckList(newList);
		},
		setDisabled: (values, newList) => {
			this.checksRef.current.methods.setDisabled(values, newList);
		},
		check: (checkedValue) => {
			this.checksRef.current.methods.check(checkedValue);
		},
		getCheckValues: () => {
			return this.checksRef.current.state.checked;
		},
		okClick: (e) => {
			const pro = this.props.onOk && this.props.onOk(this.methods.getCheckValues(), this.props);
			if (dataType.isPromise(pro)) {
				this.setState({
					loading: true,
				});
				pro.finally(() => {
					this.setState({
						loading: false,
					});
				});
			}
		},
		okCancel: (e) => {
			this.props.onCancel && this.props.onCancel(this.methods.getCheckValues(), this.props);
		},
	};
	onChange = (checks) => {
		this.props.onChange && this.props.onChange(checks, this.methods);
	};
	state = {
		loading: false,
	};
	componentDidMount() {
		this.props.exportMethods && this.props.exportMethods(this.methods);
	}
	checksRef = React.createRef();
	render() {
		const { onOk, onCancel, checkNameRender, mapKeys, checkList } = this.props;
		return (
			<div>
				<div>
					<RowCheckBox
						onChange={this.onChange}
						ref={this.checksRef}
						checkList={checkList}
						nameReader={checkNameRender}
						mapKeys={mapKeys}
					/>
					{!checkList.length ? <Empty /> : null}
				</div>
				{onCancel || onOk ? (
					<div className="z-padding-15 z-text-center z-flex">
						{onCancel ? (
							<div className={`z-flex-1 ${onCancel && onOk ? "z-margin-right-15" : ""}`}>
								<Button block size="default" type="default" onClick={this.methods.okCancel}>
									取消
								</Button>
							</div>
						) : null}
						{onOk ? (
							<div className="z-flex-1">
								<Button
									block
									size="default"
									type="primary"
									disabled={!checkList.length}
									onClick={this.methods.okClick}
								>
									确定
								</Button>
							</div>
						) : null}
					</div>
				) : null}
				<ZpageLoading showLoading={this.state.loading} size="default" />
			</div>
		);
	}
}
export default CellCheckList;
