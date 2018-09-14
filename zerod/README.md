# Zero-design 简称 zerod

`zerod` 是基于`react + antd`的扩展组件库，主要包括`通用小组件`、`快速开发页面的多风格模板(HOC高阶组件)`、`通用工具函数`、`通用样式类`

`zerod` 需要搭配`zerod-admin-webpack`脚手架使用

# zerod-admin-webpack 脚手架 v1.0.0

基于 `react + react-router + antd + zerod(我们的扩展组件) + scss` 的 webpack4 前端开发环境

1、支持基本的图片文件 `png|jpe?g|gif|svg` 加载,转 base64 打包, 支持视频文件 `mp4|webm|ogg|mp3|wav|flac|aac`加载

2、支持 `js,jsx,css,scss,less` 公共代码抽取，压缩打包

3、`babel-loader + less/sass` 模块加载功能

4、`webpack-dev-server` 服务器，支持反代理配置，热加载热更新

5、`babel-polyfill` 让 `IE10+`浏览器支持 es6+语法的垫片

6、`react-loadable` 结合 `babel-plugin-syntax-dynamic-import` 支持 react 组件的按需加载

7、支持使用 `scss` 变量代替 `less` 变量自定义 `antd` 的主题

8、支持跨项目共享代码发布到我们的私有服务器http://172.16.8.10:8081/repository/hosted-npm/

`git`地址：<a href="http://172.16.26.120/components/zerod-admin-webpack.git" target="_blank">http://172.16.26.120/components/zerod-admin-webpack.git</a>

## 脚手架目录结构

可在 `config/index.js` 配置反代理、host、端口号、sourceMap 等等

```bash
├── /build/          # webpack配置
├── /config/         # config/index.js可以配置反代理路径和打包公共路径，dev端口号等等
├── /dist/           # 项目打包输出目录
├── /src/            # 项目开发源码目录
│ ├── /Api/          # 后台接口文件夹,
│ ├── /assets/       # 公共文件:图片，iconfont,
│ │ ├── /iconfont/   # 来自 http://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a
│ │ └── /images/     # 图片
│ ├── /components/   # 自生产的通用组件
│ │ ├── /AbgImage/   # 组件文件夹，对应组件名称： 以"A"开头 驼峰命名法。例如：ZbgImage
│ │ │ ├── index.jsx  # 组件主要文件（必需的）
│ │ │ └── style.scss # 组件样式文件（如果需要）
│ ├── /context/      # react “动态上下文” 文件
│ ├── /HOC/          # 高阶组件，用于封装多次共用逻辑代码
│ ├── /lazyLoad/
│ │ ├── lazyLoad.js  # 这样使用const componet=lazyLoad(import('./componet.jsx'))实现异步组件
│ │ └── Loading.jsx  #
│ ├── /mock/         # 模拟数据mock（如果需要）
│ ├── /scss/         # 通用样式文件夹
│ │ └── index.scss   #
│ ├── /views/        # 路由组件目录，应当按照路由结构创建
│ ├── /zTool/        # 通用工具目录
│ │ └── httpAjax.js  # ajax库：axios或fetch 的封装
│ ├── ant-theme-vars.scss      # antd主题变量
│ ├── App.api.js     # 自动加载/Api/下`.api.js`后缀的文件
│ ├── App.context.js # 自动加载/context/下的'Context.js'
│ ├── App.jsx        # 根组件
│ ├── app.scss       # 根样式文件
│ └── main.js        # 项目入口文件
├── /static/         # 不会被压缩打包的静态文件放这里
├── .babelrc         # babel配置
├── .eslintrc.js     # Eslint配置
├── .gitgnore        # git忽略检测的配置
├── .postcssrc.js    # postcss配置
├── .prettierrc      # 格式化代码 prettier 的配置， vscode 编辑器需安装 prettier 插件
├── index.html       # 单页面唯一的html
└── package.json
```

## 脚手架命令

-1、请电脑已安装 nodejs

0、安装依赖包：

由于我们的`zerod`存储在`npm私有服务器`中，执行`npm install`之前需要更改`registry`地址

先`npm config get registry`查看当前的`registry`地址是哪个，如果不是`http://172.16.8.10:8081/repository/npm-all/`(公司深圳服务器，外地的需 VPN 访问)，请

先`npm config set registry http://172.16.8.10:8081/repository/npm-all/`执行完后再`npm install`

1、启动`npm run dev 或 npm start`

2、打包`npm run build`

3、打包后显示依赖报告`npm run build --report`
