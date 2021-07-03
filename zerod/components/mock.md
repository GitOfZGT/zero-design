<!-- @fragment -->

```js
/**
 * 接口模拟 start
 */
import Mock from 'mockjs';
import { arrayFilterBy } from 'zerod/components/zTool';
function getSort(query) {
    return (query.currPage - 1) * query.pageSize + this.id;
}
const mockRuleArr = function(query, noPage) {
    return [
        {
            'id|+1': 1,
            serviceName: function() {
                return '服务--' + (noPage ? this.id : getSort.call(this, query));
            },
            serviceCode: function() {
                return 'TIBMAS-OAUTH-SERVER-' + (noPage ? this.id : getSort.call(this, query));
            },
            servicePort: function() {
                return 1000 + (noPage ? this.id : getSort.call(this, query));
            },
            remark: function() {
                return '说出来你可能不信系列-' + (noPage ? this.id : getSort.call(this, query));
            },
        },
    ];
};

const all = 30;
Mock.mock('/mockjs/v1.0/config/center/pageServiceInfo', 'post', function(opt) {
    const query = JSON.parse(opt.body);
    const count = 1 * query.pageSize;
    const body = {
        code: 0,
        data: {
            totalCount: all,
            totalPage: Math.ceil(all / query.pageSize),
        },
    };
    if (query.currPage > body.data.totalPage) {
        body.data.list = [];
        return body;
    } else {
        body.data[`list|${count}`] = mockRuleArr(query, false);
        const listdata = Mock.mock(body);
        return listdata;
    }
});

Mock.mock('/mockjs/v1.0/config/center/getServiceConfigDetail', 'post', function(opt) {
    const query = JSON.parse(opt.body);
    const data = Mock.mock({
        [`list|${all}`]: mockRuleArr(query, true),
    });
    return {
        code: 0,
        data: arrayFilterBy(data.list, { id: query.serviceId })[0],
    };
});
Mock.mock('/mockjs/v1.0/config/center/deleteServiceInfo', 'post', function() {
    return {
        code: 0,
        data: true,
    };
});
Mock.mock('/mockjs/v1.0/config/center/addServiceConfig', 'post', function() {
    return {
        code: 0,
        data: true,
    };
});
Mock.mock('/mockjs/v1.0/config/center/updateServiceInfo', 'post', function() {
    return {
        code: 0,
        data: true,
    };
});
Mock.mock('/mockjs/v1.0/config/center/updateConfigProperty', 'post', function() {
    return {
        code: 0,
        data: true,
    };
});
/**
 * 接口模拟 end
 */
```
