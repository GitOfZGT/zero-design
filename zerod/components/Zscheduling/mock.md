<!-- @fragment -->

```js
/**
 * 接口模拟 start
 */
import Mock from 'mockjs';
Mock.mock('/mockjs/get/Zscheduling/list', 'get', function(opt) {
    const data = Mock.mock({
        [`list|10`]: [
            {
                'id|+1': 1,
                name: function() {
                    return 'row' + this.id;
                },
            },
        ],
    });
    return {
        code: 0,
        data,
    };
});
/**
 * 接口模拟 end
 */
```
