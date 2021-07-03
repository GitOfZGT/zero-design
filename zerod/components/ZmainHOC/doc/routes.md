<!-- @fragment -->

```jsx
import { Menu, Dropdown, Icon } from 'antd';
class UserDropdown extends React.PureComponent {
    methods = {
        //用户dropdown按钮点击触发
        onMenuClick: (item) => {
            // if (item.key === "/logout") {
            // 	window.location.assign(item.key);
            // } 
        },
    };
    dropdownMenu = (
        <Menu selectedKeys={[]} onClick={this.methods.onMenuClick}>
            <Menu.Item disabled>
                <Icon type="user" />
                个人中心
            </Menu.Item>
            <Menu.Item disabled>
                <Icon type="setting" />
                设置
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="/logout">
                <Icon type="logout" />
                退出登录
            </Menu.Item>
        </Menu>
    );
    render() {
        return (
            <Dropdown overlay={this.dropdownMenu} trigger={['click']} placement="bottomRight">
                <Zlayout.ZheaderBtn className="z-margin-right-15">
                    <span className="z-icon-circle z-margin-right-8">
                        <Icon type="user" />
                    </span>
                    登录用户
                </Zlayout.ZheaderBtn>
            </Dropdown>
        );
    }
}
const Start = (props) => {
    return <div className="z-padding-20">第一页</div>;
};
const Second = (props) => {
    return <div className="z-padding-20">第二页</div>;
};
const mainRoutes = [
    {
        path: '/start-doc',
        component: Start,
    },
    {
        path: '/second-doc',
        component: Second,
    },
];
const myMenu = [
    {
        permUrl: 'start-doc',
        permName: '开始',
        iconClass: 'home',
    },
    {
        permUrl: 'second-doc',
        permName: '第二页',
    },
];
```
