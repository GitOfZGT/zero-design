import React from "react";
import PropTypes from "prop-types";
import ZpureComponent from "../ZpureComponent";
import { dataType } from "../zTool";
import ZpageLoading from "../ZpageLoading";
import { Checkbox, Button, Empty } from "antd";

class RowCheckBox extends React.PureComponent {
	static propTypes = {
		checkList: PropTypes.array,
		mapKeys: PropTypes.object,
		nameReader: PropTypes.func,
	};
	static defaultProps = {
		mapKeys: { value: "id", name: "name", color: "color" },
	};
	methods = {
		onChange: (checkedValue) => {
			this.methods.check(checkedValue);
		},
		check: (checkedValue) => {
			this.setState({
				checked: checkedValue,
			});
		},
	};
	state = {
		checked: [],
	};
	render() {
		const { checkList, mapKeys, nameReader } = this.props;
		return (
			<Checkbox.Group value={this.state.checked} onChange={this.methods.onChange}>
				{checkList.map((check, i) => {
					return (
<<<<<<< HEAD
						<p key={i} className="z-margin-bottom-0-important">
=======
						<p key={i}>
>>>>>>> 67aa4fe54164c70d8d3bdb1cdd6ac08568ed9eab
							<Checkbox value={check[mapKeys.value]}>
								<span
									className="z-schedul-color-span"
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
		onOk: PropTypes.func,
		onCancel: PropTypes.func,
		mapKeys: PropTypes.object,
	};

	methods = {
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
						ref={this.checksRef}
						checkList={checkList}
						nameReader={checkNameRender}
						mapKeys={mapKeys}
					/>
					{!checkList.length ? <Empty /> : null}
				</div>
<<<<<<< HEAD
				{onCancel || onOk ?<div className="z-padding-15 z-text-center z-flex">
=======
				<div className="z-padding-15 z-text-center z-flex">
>>>>>>> 67aa4fe54164c70d8d3bdb1cdd6ac08568ed9eab
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
<<<<<<< HEAD
				</div>:null}
=======
				</div>
>>>>>>> 67aa4fe54164c70d8d3bdb1cdd6ac08568ed9eab
				<ZpageLoading showLoading={this.state.loading} size="default" />
			</div>
		);
	}
}
export default CellCheckList;
