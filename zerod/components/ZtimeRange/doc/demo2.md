```jsx
/**
 * @renderMode:inline
 * @componentName: ZtimeRange2
 * @description : value 和 onChange 需要配合使用
 * @title: value 和 onChange示例
 */
import React from "react";
import { ZtimeRange } from "zerod";
import moment  from 'moment';
class ZtimeRange2 extends React.PureComponent {
	state = {
		value:[]
	};
	onChange = (times, timesString) => {
		console.log(times, timesString);
		this.setState({
			value:times,
		});
	};
	render() {
		return (
			<div style={{ width: "300px" }}>
				<ZtimeRange value={this.state.value} onChange={this.onChange} />
			</div>
		);
	}
}
export default ZtimeRange2;
```