# zerod-admin-webpack 开发约定规范

以下看到的`@`符号，是开发目录 `src` 的别名（绝对路径）

## 后台接口 @/Api

0、后台接口请求响应体应该这样的 ： {  code:状态码,data:数据 ,msg:"提示" }

1、`@/App.api.js` 会自动加载 `@/Api/`下的`.api.js`

2、对应后台 `swagger` 接口文档

3、规定写法：

```jsx
// 例如login.api.js
import httpAjax from "@/zTool/httpAjax";
export default {
	name: "login", //空间命名，用于支持多个.api.js中的apis出现相同的函数命名
	apis: {
		//获取列表接口
		getList(query) {
			return httpAjax("post", "接口路径", query);
		},
	},
};
```

4、例如在`Home/index.jsx`中使用接口

```jsx
// 导入src/App.api.js即可
import api from "@/App.api.js";

api.login.getList(参数);
```

## 静态资源

1、衡量小文件可进行打包处理的，统一放 `@/assets` 目录，如小图片在 `@/assets/images`

2、较大文件，不宜打包处理的，统一放 `static`目录

## 通用组件 @/components

1、组件命名：以大写`A`开头，驼峰命名法

2、一个大组件就是一个文件夹，文件夹命名与组件命名相同，里面有对应的 `index.jsx（必需文件）`和 `style.scss`,如 `AtabBar` 组件。

```jsx
//例子：AtabBar 的 index.jsx
//使用模块化的css
import cssClass from "./style.scss";

import React from "react";
class AtabBar extends React.Component {}
export default {
	name: "AtabBar", //组件命名(必需)
	component: AtabBar, //必需
};
```

3、`@/components` 下的所有 `index.jsx`会在 `@/components/load-components.js`自动加载，使用的时候如

```jsx
//例如，在路由组件中使用通用组件只需
import components from "@/components/load-components";
//然后必须这样：需要什么组件，将组件命名const出来
const { AtabBar, ApageTitle } = components;
```

## 路由组件 @/views

0、一个路由组件就是一个文件夹，文件夹命名：以大写字母开头，驼峰命名法

1、`@/views`下的目录机构按照路由层级结构划分

2、每个路由组件有对应的 `index.jsx、style.scss` 和`A.route.js(路由配置)`

3、路由组件一般使用异步加载，使用 `@/lazyLoad/`懒加载：

```jsx
//例如：Home页面有 index.jsx、style.scss和Home.route.js
// A.route.js写法：
import lazyLoad from "@/lazyLoad/lazyLoad";
const Home = lazyLoad(import("./"));
export default [
	{
		path: "/Home",
		component: Home,
	},
];
```

## react 上下文 使用

1、`@/App.context.js` 会自动加载 `@/context/`下的以大写字母开头`Context`结尾的`.js`

2、例：`AppRootContext.js`

```jsx
import React from "react";
const defaultValue = {};
const context = React.createContext(defaultValue); //创建上下文
const { Provider, Consumer } = context;
//提供启用上下文的方法
const setConsumer = (ChildComponent) => {
	return class ContextConsumer extends React.Component {
		render() {
			return <Consumer>{(value) => <ChildComponent {...this.props} {...value} />}</Consumer>;
		}
	};
};
export default {
	name: "AppRootContext", //上下文名称（必需）,首字母要大写,以Context结尾
	loadingText: "加载中...", //一些固定值
	Provider,
	Consumer,
	setConsumer,
};
```

3、使用上下文 例子：

上文

```jsx
//引入上下文
import contexts from "@/App.context.js";
//将上下文的名称 const 出来
const { AppRootContext } = contexts;

//在 App.jsx中通过 AppRootContext.Provider 组件更改 上文value
<AppRootContext.Provider
	value={{
		updateLoading: this.methods.updateLoading,
		timeoutHideLoading: this.methods.timeoutHideLoading,
		updateDialog: this.methods.updateDialog,
		updatePicker: this.methods.updatePicker,
		setPageStorage: this.methods.setPageStorage,
		getPageStorage: this.methods.getPageStorage,
		clearPageStorage: this.methods.clearPageStorage,
	}}
>
	{/*这里包含下文的组件*/}
</AppRootContext.Provider>;
```

下文

```jsx
//引入上下文
import contexts from "@/App.context.js";
//将上下文的名称 const 出来
const { AppRootContext } = contexts;

//在 Report/index.jsx中通过 AppRootContext.setConsumer(Report) 获取上文的value
//这时在 Report组件中就可以 通过props使用这些东西

this.props.updateLoading();
this.props.timeoutHideLoading();
this.props.updateDialog();
```