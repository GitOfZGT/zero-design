# 环绕按钮：ZroundingButton

`ZroundingButton` 环绕在四周的更多按钮展示方式

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
class Myjavascript extends React.Component {
			onClick = (item) => {
				message.success("点击了" + item.name);
			};
			items = [
				{
					name: "按钮1",
					icon: () => <i className="zero-icon zerod-shengchangzhouqi" />,
					onClick: this.onClick,
				},
				{ name: "按钮2", icon: <Icon type="star" theme="filled" />, onClick: this.onClick },
				{ name: "按钮3", icon: () => <Icon type="eye" theme="filled" />, onClick: this.onClick },
				{ name: "按钮4", icon: <Icon type="camera" theme="filled" />, onClick: this.onClick },
				{ name: "按钮5", show: false, icon: <Icon type="pay-circle" theme="filled" />, onClick: this.onClick },
				{
					name: "按钮6",
					disabled: true,
					icon: <Icon type="hourglass" theme="filled" />,
					onClick: this.onClick,
				},
			];
			render() {
				return (
					<span>
						<ZroundingButton items={this.items}>
							<Button size="small">open</Button>
						</ZroundingButton>
						<ZroundingButton items={this.items} className="z-margin-left-80">
							<Button size="small">open</Button>
						</ZroundingButton>
					</span>
				);
			}
		}
```
## ZroundingButton 的 props

可追加`className`、`style`

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
			<td>items</td>
			<td>按钮组的渲染数据，结构如下items</td>
			<td>array[object]</td>
			<td>--</td>
		</tr>
		<tr>
			<td>onVisibleChange</td>
			<td>显示状态改变会触发onVisibleChange</td>
			<td>(visible)=>{}</td>
			<td>--</td>
		</tr>
	</tbody>
</table>

## items

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
			<td>name</td>
			<td>按钮名称</td>
			<td>string</td>
			<td>--</td>
		</tr>
		<tr>
			<td><i class="zero-icon zerod-shengchangzhouqi"></i> icon</td>
			<td>按钮图标，如果没有图标会以按钮名称的第一个字符显示</td>
			<td>reactNode | function(){return reactNode}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>onClick</td>
			<td>按钮点击事件,参数有当前点击的按钮map对象</td>
			<td>function(item){}</td>
			<td>--</td>
		</tr>
		<tr>
			<td>show</td>
			<td>是否显示此按钮</td>
			<td>Boolean</td>
			<td>true</td>
		</tr>
		<tr>
			<td>disabled</td>
			<td>是否禁用此按钮</td>
			<td>Boolean</td>
			<td>false</td>
		</tr>
	</tbody>
</table>