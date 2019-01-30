<div class="z-doc-titles"></div>

# 排班组件：Zscheduling

数据越多，单元格越多，为防止 Zscheduling 的 props 值都未改变重新 render 的性能消耗，Zscheduling 继承了 React.PureComponent，依赖 [Swiper4.x](https://www.swiper.com.cn/api/index.html)

Zscheduling 分自定义列（左）和日期列（右），日期列可视区域只显示一周日期，左右滑动可翻页

单元格右键会展开 popover、左键关闭 popover , 日期单元格单击会选中。

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title=""></div>

```jsx
class Myjavascript extends React.PureComponent {
	state = {
		list: [],
	};
	componentDidMount() {
		api.scheduling.getList().then((re) => {
			this.setState({
				list: re.data.list,
			});
		});
	}
	popover = {
		leftPopoverTitleRender: (row, trindex, col, tdindex) => {
			// console.log(row,trindex,col,tdindex)
			return false;
		}, //checkBox列的 popover的title渲染函数，
		leftPopoverContentRender: (row, trindex, col, tdindex) => {
			return row.name;
		}, //checkBox列的 popover的content渲染函数，
		rightPopoverTitleRender: (row, trindex, col, tdindex) => {
			return col.name;
		}, //日期列的 popover的title渲染函数，
		rightPopoverContentRender: (row, trindex, col, tdindex) => {
			return row.name;
		}, //日期列的 popover的content渲染函数，
	};
	columns = [
		{
			key: "name",
			width: "80px",
			dataIndex: "name",
			name: "人员",
		},
	];
	methods = {
		getData: () => {
			console.log(this.ZschedulingMethods.getSelectedCells());
		},
		clears: () => {
			this.ZschedulingMethods.cancelAllSelected();
		},
	};
	toolbarRender = () => {
		return (
			<span>
				<Button className="z-margin-left-15" size="small" type="primary" onClick={this.methods.getData}>
					选择的单元格数据
				</Button>
				<Button className="z-margin-left-15" size="small" type="primary" onClick={this.methods.clears}>
					清空选择
				</Button>
			</span>
		);
	};
	importMethods = (methods) => {
		this.ZschedulingMethods = methods;
	};
	render() {
		return (
			<Zscheduling
				exportMethods={this.importMethods}
				toolbarRender={this.toolbarRender}
				columns={this.columns}
				dataSource={this.state.list}
				{...this.popover}
			/>
		);
	}
}
```

<div class="z-doc-titles"></div>

## Zscheduling 的 props

| 参数                                                                       | 说明                                                             | 类型                                            | 默认值 |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------- | ------ |
| dataSource                                                                 | 表格行数据                                                       | array\[object]                                  | --     |
| columns                                                                    | 非日期列的列数据,结构在下面                                      | array\[object]                                  | --     |
| defaultMonth                                                               | 组件初始渲染的默认月份，格式： 2019-01 \| 2019/01 \| moment 对象 | string \| moment 对象                           | --     |
| exportMethods                                                              | 在 componentDidMount 导出组件内部可调用的方法，methods 请往下看  | function(methods){}                             | --     |
| onMonthPickerChange                                                        | 年月选框值改变的回调                                             | function(moment, dateString){}                  | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> dateColCellRender         | 日期列单元格的 渲染函数                                          | function(row, rowindex, col, colindex){return } | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> toolbarRender             | 工具栏（与年月选框同一行）的 渲染函数                            | function(){return }                             | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> leftPopoverTitleRender    | 非日期列的 popover 的 title 渲染函数                             | function(row, rowindex, col, colindex){return}  | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> leftPopoverContentRender  | 非日期列的 popover 的 content 渲染函数                           | function(row, rowindex, col, colindex){return}  | --     |
| onLeftPopoverVisibleChange                                                 | 非日期列的 popover 的 popover 的打开/隐藏的回调                  | function(row, rowindex, col, colindex){}        | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> rightPopoverTitleRender   | 日期列的 popover 的 content 渲染函数                             | function(row, rowindex, col, colindex){return}  | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> rightPopoverContentRender | 日期列的 popover 的 content 渲染函数                             | function(row, rowindex, col, colindex){return}  | --     |
| onRightPopoverVisibleChange                                                | 日期列的 popover 的 popover 的打开/隐藏的回调                    | function(row, rowindex, col, colindex){}        | --     |

<div class="z-doc-titles"></div>

## Zscheduling 的 columns 结构

| 参数                                                         | 说明                                     | 类型                                        | 默认值 |
| ------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------- | ------ |
| title                                                        | 列头显示文字                             | string                                      | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> titleRender | 自定义列头渲染函数                       | function(col,colindex){}                    | --     |
| dataIndex                                                    | 列数据在 dataSource 数据项中对应的 key   | string                                      | --     |
| width                                                        | 列宽度                                   | string                                      | --     |
| <i class="zero-icon zerod-shengchangzhouqi"></i> render      | 列单元格的渲染函数                       | function(row,rowindex,col,colindex){return} | --     |

<div class="z-doc-titles"></div>

## Zscheduling 的 methods

| 参数              | 说明                                                                        | 使用                        | 返回值类型 |
| ----------------- | --------------------------------------------------------------------------- | --------------------------- | ---------- |
| getElements       | 获取 Zscheduling 内部提供的 dom 对象，有：schedulingEl、maskEl              | methods.getElements()       | object     |
| getSelectedCells  | 获取已选择日期单元格的数据,参数需 行维度"row" \|\| 列维度"col" ,默认是"col" | methods.getSelectedCells()  | object     |
| cancelAllSelected | 取消所有的日期单元格选择                                                    | methods.cancelAllSelected() | --         |
| showLoading       | 显示 Zscheduling 内部的 loading                                             | methods.showLoading(true)   | --         |

<div class="z-doc-titles"></div>

## Zscheduling.CellTag 的 props

| 参数     | 说明                                     | 类型       | 默认值 |
| -------- | ---------------------------------------- | ---------- | ------ |
| title    | ToolTip 的 title                         | string     | --     |
| name     | Tag 的 name                              | string     | --     |
| color    | Tag 的 color,如 #f0f1f2                  | string     | --     |

<div class="z-doc-titles"></div>

## Zscheduling.CellCheckList 的 props

| 参数            | 说明                                                                                                           | 类型                           | 默认值 |
| --------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------ |
| checkList       | checkBox 列表数据                                                                                              | array\[object\]                | --     |
| mapKeys         | 定义 checkLis 里哪些字段对 Zscheduling.CellCheckList 有用，默认：{ value: "id", name: "name", color: "color" } | object                         | --     |
| exportMethods   | 在 componentDidMount 导出组件内部可调用的方法，methods 请往下看                                                | function(methods){}            | --     |
| checkNameRender | CheckBox 的名称渲染函数                                                                                        | function(item,i){return name}  | --     |
| onOk            | 确定按钮的点击事件，如果没有就不会显示确定按钮                                                                 | function(checkedValue,props){} | --     |
| onCancel        | 取消按钮的点击事件，如果没有就不会显示取消按钮                                                                 | function(checkedValue,props){} | --     |

<div class="z-doc-titles"></div>

## Zscheduling.CellCheckList 的 methods

| 参数           | 说明                                     | 使用                       | 返回值类型 |
| -------------- | ---------------------------------------- | -------------------------- | ---------- |
| getCheckValues | 获取已勾选的值                           | methods.getCheckValues()   | array      |
| check          | 主动勾选哪些                             | methods.check(\[id1,id2\]) | --         |
