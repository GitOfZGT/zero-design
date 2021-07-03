<!-- @routePath:/component-doc/ZsideMenu-doc -->
# 左侧菜单组件：ZsideMenu

`ZsideMenu` 将`antd`的 `Menu`、`Menu.Item`、`Menu.SubMenu`转成数据结构直接渲染的方式

<!-- @import:./demo1.md -->

### ZsideMenu Props

| 参数            | 说明                                                                                 | 类型                                                  | 默认值     |
| --------------- | ------------------------------------------------------------------------------------ | -------------------------------------------- | ---------- |
| menuData        | 菜单数据，每个对象的属性有iconClass：小图标、name、path：路由地址必须以"/"或"http"开头的、openMode: "iframe"|"iframe-full"|"newWindow"，则还有children属性。iconClass默认支持antd的Icon组件的type,还支持函数return自定义图标,antdIconTheme: Antd的Icon的theme属性 (请使用变量缓存所需设置的值而非直接使用字面量)  | array[object]          | -         |
| collapsed       | 是否折叠菜单                                                                          | boolean         | false      |
| theme           | 菜单的主题 'light' \| 'dark'                                                          | string          | light      |
| openAllSubmenu  | 是否展开所有二级菜单                                                                   | string          | light     |
| onSelect        | 点击选中菜单项触发的函数，如果函数内return false 则不会跳转menuData中对应项的path路径    | function({ item, key, selectedKeys }){}  | --         |
| onOpenChange    | 展开/折叠二级菜单触发的函数，并且是展开/折叠过渡动画完了才触发                           | function(keys){} | --        |
