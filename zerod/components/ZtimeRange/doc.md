# 时间范围：ZtimeRange

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title="基本使用"></div>

```jsx
import React from "react";
import { ZtimeRange } from "zerod";
class Myjavascript extends React.PureComponent {
	state = {
		times: [],
	};
	onChange = (times, timesString) => {
		console.log(times, timesString);
		this.setState({
			times,
		});
	};
	render() {
		return (
			<div style={{ width: "300px" }}>
				<ZtimeRange value={this.state.times} onChange={this.onChange} />
			</div>
		);
	}
}
return <Myjavascript />;
```

## ZtimeRange 的 props

可追 `className`、`style`

| 参数            | 说明                                                                                 | 类型                                                  | 默认值     |
| --------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------- | ---------- |
| defaultValue    | ZtimeRange 的默认值,当 value 存在时，defaultValue 无效                               | moment []                                             | []         |
| value           | 指定 ZtimeRange 的选中值                                                             | moment []                                             | --         |
| onChange        | ZtimeRange 的值改变时触发                                                            | function(times: moment[] , timeStrings : string[]) {} | --         |
| format          | 展示的时间格式                                                                       | string                                                | "HH:mm:ss" |
| timePickerProps | [Antd 的 TimePicker 的属性](https://ant.design/components/time-picker-cn/)的其他属性 | object                                                | {}         |
