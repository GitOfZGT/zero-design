## 模板 zerod-admin-webpack

主要依赖`react v16.8+`+`react-router v5`+`antd v3.x`+`zerod v0.x`+`scss`+`axios`等的 PC 端单页面模板，目录结构如下：

```js
├── /dist/ # 项目打包输出目录
├── /share-code/ # 此目录的作用，当前项目需要独立出一些模块共享给其他项目时发布到私服，此目录名称可以随意修改，但需在zerod.config.js中配置copyFolderName
│ └── package.json# 发布包的package.json
├── /src/  # 项目开发源码目录
│ ├── /Api/# 后台接口文件夹,
│ ├── /assets/# 公共文件:图片，iconfont,
│ │ ├── /iconfont/# 来自 http://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a
│ │ └── /images/ # 图片
│ ├── /components/# 自生产的通用组件
│ │ └── load-components.js# 自动加载/components/下`index.jsx`文件(可选用)
│ │ ├── /AbgImage/# 组件文件夹，对应组件名称
│ │ │ ├── index.jsx  # 组件主要文件（必需的）
│ │ │ └── style.scss # 组件样式文件（如果需要）
│ ├── /context/  # react “动态上下文” 文件
│ ├── /lazyLoad/
│ │ └── lazyLoad.js  # 这样使用const componet=lazyLoad(()=>import('./componet.jsx'))实现异步组件
│ ├── /scss/  # 通用样式文件夹
│ │ └── index.scss#
│ ├── /store/ # 状态管理仓库，使用redux + react-redux，使用react hooks 后台可以选择不用react-redux
│ ├── /views/ # 路由组件目录，应当按照路由结构创建
│ ├── /zTool/ # 通用工具目录
│ │ └── httpAjax.js  # ajax库：默认zerod-ztool/axiosInterceptor/httpAjax 对 axios 的封装
│ ├── ant-icons.js# 按需引入ant-design的icon文件
│ ├── App.api.js # 自动加载/Api/下`.api.js`后缀的文件(可选用)
│ ├── App.context.js # 自动加载/context/下的'Context.js'(可选用)
│ ├── App.jsx # 根组件
│ ├── app.scss# 根样式文件
│ └── main.js # 项目入口文件
├── /static/  # 不会被压缩打包的静态文件放这里
├── .eslintrc.js # Eslin配置
├── .gitgnore # git忽略检测的配置
├── .postcssrc.js# postcss配置
├── .prettierrc.js# 统一格式化代码 prettier 的配置， vscode 编辑器需安装 prettier 插件
├── index.html# 单页面唯一的html
├── babel.config.js  # babel配置
├── package.json #
└── zerod.config.js  # 配置文件，可以配置反代理路径和打包公共路径等等
```

> `babel.config.js`中已经用`babel-plugin-import`配置了对`antd`和`zerod`的按需打包模块，当存在 dllStatic/librarysDll/style/antd.\*.css 时，会自动对`antd`按需的 style:true 改为 style:false。
