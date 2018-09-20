# 页脚组件：ZpageFooter

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
import React from "react";
import { ZpageFooter } from "zerod";
import { Icon } from "antd";
class PageFooter extends React.Component {
	footerLinks = [
		{
			key: "hua-cloud",
			title: "华云中盛科技有限公司",
			href: "http://www.hua-cloud.com.cn/",
			blankTarget: true,
		},
		{
			key: "szhcf",
			title: "华成峰集团",
			href: "http://www.szhcf.com.cn/",
			blankTarget: true,
		},
	];
	footerCopyright = () => (
		<div>
			Copyright <Icon type="copyright" /> 2018 华云中盛-政务事业部技术团队出品
		</div>
	);
	render() {
		return <ZpageFooter links={this.footerLinks} copyright={this.footerCopyright} />;
	}
}

export default PageFooter;
```

## ZpageFooter 的 Props

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
			<td>links</td>
			<td>快速链接</td>
			<td>array</td>
			<td>--</td>
		</tr>
		<tr>
			<td>copyright</td>
			<td>版权信息</td>
			<td>string | function</td>
			<td>--</td>
		</tr>
	</tbody>
</table>
