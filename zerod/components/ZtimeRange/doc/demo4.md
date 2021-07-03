```jsx
/**
 * @renderMode:inline
 * @componentName: ZtimeRange4
 * @description : 当allowMorrow = false时，即使结束时间小于开始时间，也不会出现 次日。
 * @title: 不显示次日
 */
import React from "react";
import { ZtimeRange } from "zerod";
import moment  from 'moment';
class ZtimeRange4 extends React.PureComponent {
	render() {
		return (
			<div style={{ width: "300px" }}>
				<ZtimeRange allowMorrow={false} defaultValue={[moment('12:00:00', 'HH:mm:ss'), moment('11:00:00', 'HH:mm:ss')]}/>
			</div>
		);
	}
}
export default ZtimeRange4;
```