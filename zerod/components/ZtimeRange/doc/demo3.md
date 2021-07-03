```jsx
/**
 * @renderMode:inline
 * @componentName: ZtimeRange3
 * @description : 浮层中的列会随着 format 变化，当略去 format 中的某部分时，浮层中对应的列也会消失。
 * @title: format示例
 */
import React from "react";
import { ZtimeRange } from "zerod";
import moment  from 'moment';
class ZtimeRange3 extends React.PureComponent {
	render() {
		return (
			<div style={{ width: "300px" }}>
				<ZtimeRange format='HH:mm' defaultValue={[moment(), moment()]}/>
			</div>
		);
	}
}
export default ZtimeRange3;
```