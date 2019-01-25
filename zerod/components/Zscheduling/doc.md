# 排班组件：Zscheduling

数据越多，单元格越多，为防止Zscheduling的props值都未改变重新render的性能消耗，Zscheduling继承了React.PureComponent

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

## Zscheduling 的 props

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>类型</th>
			<th>默认值</th>
		</tr>
	</thead>
	<tbody>
    	<tr>
			<td>dataSource</td>
			<td>表格行数据</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>columns</td>
			<td>非日期列的列数据,结构在下面</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>defaultMonth</td>
			<td>组件初始渲染的默认月份，格式： 2019-01  | 2019/01 | moment对象</td>
			<td>string | moment对象</td>
			<td>--</td>
		</tr>
		<tr>
			<td>exportMethods</td>
			<td>导出组件内部可调用的方法，如下methods</td>
			<td>function(methods){}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>onMonthPickerChange</td>
			<td>日期选框值改变的回调</td>
			<td>function(moment, dateString){}</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> dateColCellRender</td>
			<td>日期列单元格的 渲染函数</td>
			<td>function(row, rowindex, col, colindex){return }</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> toolbarRender</td>
			<td>工具栏 渲染函数</td>
			<td>function(){return }</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> leftPopoverTitleRender</td>
			<td>非日期列的 popover的title渲染函数</td>
			<td>function(row, rowindex, col, colindex){return}</td>
			<td>--</td>
		</tr>
        <tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> leftPopoverContentRender</td>
			<td>非日期列的 popover的content渲染函数</td>
			<td>function(row, rowindex, col, colindex){return}</td>
			<td>--</td>
		</tr>
		 <tr>
			<td>onLeftPopoverVisibleChange</td>
			<td>非日期列的 popover的popover的打开/隐藏的回调</td>
			<td>function(row, rowindex, col, colindex){}</td>
			<td>--</td>
		</tr>
        <tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> rightPopoverTitleRender</td>
			<td>日期列的 popover的title渲染函数</td>
			<td>function(row, rowindex, col, colindex){return}</td>
			<td>--</td>
		</tr>
        <tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> rightPopoverContentRender</td>
			<td>日期列的 popover的content渲染函数</td>
			<td>function(row, rowindex, col, colindex){return}</td>
			<td>--</td>
		</tr>
        <tr>
			<td>onRightPopoverVisibleChange</td>
			<td>日期列的 popover的popover的打开/隐藏的回调</td>
			<td>function(row, rowindex, col, colindex){}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

## columns 结构

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>类型</th>
			<th>默认值</th>
		</tr>
	</thead>
	<tbody>
    	<tr>
			<td>title</td>
			<td>列头显示文字</td>
			<td>string</td>
			<td>--</td>
		</tr>
    	<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> titleRender</td>
			<td>自定义列头渲染函数</td>
			<td>function(col,colindex){}</td>
			<td>--</td>
		</tr>
    	<tr>
			<td>dataIndex</td>
			<td>列数据在dataSource数据项中对应的 key</td>
			<td>string</td>
			<td>--</td>
		</tr>
    	<tr>
			<td>width</td>
			<td>列宽度</td>
			<td>string</td>
			<td>--</td>
		</tr>
    	<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> render</td>
			<td>列单元格的渲染函数</td>
			<td>function(row,rowindex,col,colindex){return}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

## methods

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>使用</th>
			<th>返回值类型</th>
		</tr>
	</thead>
	<tbody>
    	<tr>
			<td>getElements</td>
			<td>获取Zscheduling内部提供的dom对象，有：schedulingEl、maskEl</td>
			<td>methods.getElements()</td>
			<td>object</td>
		</tr>
    	<tr>
			<td>getSelectedCells</td>
			<td>获取已选择日期单元格的数据</td>
			<td>methods.getSelectedCells()</td>
			<td>object</td>
		</tr>
    	<tr>
			<td>cancelAllSelected</td>
			<td>取消所有的日期单元格选择</td>
			<td>methods.cancelAllSelected()</td>
			<td>--</td>
		</tr>
    	<tr>
			<td>showLoading</td>
			<td>显示Zscheduling内部的loading</td>
			<td>methods.showLoading(true)</td>
			<td>--</td>
		</tr>
	</tbody>
</table>
