```jsx
/**
 * @renderMode:inline
 * @componentName: ZtimeRange1
 * @description : 在浮层中选择或者输入某一时间，结束时间小于开始时间默认出现 次日。
 * @title: 基本
 */
import React from "react";
import { ZtimeRange } from "zerod";
import moment  from 'moment';
class ZtimeRange1 extends React.PureComponent {
	onChange = (times, timesString) => {
		console.log(times, timesString);
	};
	render() {
		return (
			<div style={{ width: "300px" }}>
                <ZtimeRange 
                    defaultValue={[moment('12:00:00', 'HH:mm:ss'), moment('11:00:00', 'HH:mm:ss')]} 
                    onChange={this.onChange} 
                />
			</div>
		);
	}
}
export default ZtimeRange1;
```