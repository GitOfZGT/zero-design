# Zero-design 简称 zerod

`zerod` 是基于`react + antd`的扩展组件库，主要包括`通用小组件`、`快速开发页面的多风格模板(HOC高阶组件)`、`通用工具函数`、`通用样式类`

`zerod` 需要搭配`zerod-admin-webpack`脚手架使用

安装`zerod`会同时安装以下第三方依赖包：

```json
{
	"dependencies": {
		"contra": "1.9.4",
		"crossvent": "1.5.4",
		"iscroll": "^5.2.0",
		"viewerjs": "^1.2.0",
		"prismjs": "^1.15.0",
		"swiper": "^4.3.5",
		"react-color": "^2.14.1",
		"lodash.debounce": "^4.0.8",
		"lodash.throttle": "^4.1.1",
		"lodash.merge": "^4.6.1",
		"uuid": "^3.3.2",
		"blueimp-md5": "^2.10.0",
		"js-base64": "^2.5.1"
	}
}
```

# zerod-admin-webpack 脚手架 v1.2.2

基于 `react + react-router + redux + react-redux + antd + zerod + scss` 的 webpack4 前端开发环境

1、支持基本的图片文件 `png|jpe?g|gif|svg` 加载,转 base64 打包, 支持视频文件 `mp4|webm|ogg|mp3|wav|flac|aac`加载

2、支持 `js,jsx,css,scss,less` 公共代码抽取，压缩打包

3、`babel-loader + less/sass` 模块加载功能，支持`scss`的 cssModules（不支持 less 的），主要使用 scss 文件写样式，less+less-loader 这里只用来编译 antd 的样式或者其他使用 less 的第三方库，

4、`webpack-dev-server` 服务器，支持反代理配置，热加载热更新

5、`babel-polyfill` 让 `IE10+`浏览器支持 es6+语法的垫片

6、`react-loadable` 结合 `babel-plugin-syntax-dynamic-import` 支持 react 组件的按需加载

7、支持使用 `scss` 变量代替 `less` 变量自定义 `antd` 的主题

8、支持跨项目共享代码发布到我们的私有服务器http://172.16.8.10:8081/repository/hosted-npm/

9、支持状态管理，使用 `redux` + `react-redux`

`git`地址：<a href="http://172.16.26.120/components/zerod-admin-webpack.git" target="_blank">http://172.16.26.120/components/zerod-admin-webpack.git</a>

2018-11-22 v1.1.0 去掉 antd-scss-theme-plugin 插件，添加 happypack 多线程插件，提高编译速度，添加 DllPlugin 和 DllReferencePlugin，添加 sass-resources-loader  
2018-12-11 v1.1.3 修复只分割代码未按需加载的问题，新增 pace 来显示加载 loading  
2018-12-25 v1.2.0 升级<a href="https://babeljs.io/" target="_blank"> babel@7.x</a>  
2019-01-24 v1.2.1 pacejs 插件使用 html-webpack-include-assets-plugin 插入 html 保持与打包路径一致，config/index.js 的 dll.exclude 支持正则匹配，新增 npm run dll-dev 和 npm run dll-prod 两条命令用于生成 dll 文件才用 development 或 production，只有 react 的 development 才支持 DevTools Profiler（性能分析），原 npm run dll 默认是 npm run dll-dev，npm run build 则包含了 npm run dll-prod

生成的 vendor.manifest.json 和 vendor.dll.\*.js 都可以提交 git

如果在开发中发现这个报错：“You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux.” 可以忽略，npm run build 后是不会有的

偶热发现，cnpm install 安装的依赖包依赖链比 npm install 安装的要长的多，所以 npm install 的，运行或打包相对来说快的多。

2019-03-28 v1.2.2 babel-polyfill 改用@babel/polyfill，修复@babel/\*更新后报错问题

<div class="z-doc-titles"></div>

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
│ │ ├── lazyLoad.js  # 这样使用const componet=lazyLoad(()=>import('./componet.jsx'))实现异步组件
│ │ └── Loading.jsx  # //暂未用到
│ ├── /mock/         # 数据模拟（建议使用 mockjs）
│ ├── /scss/         # 通用样式文件夹
│ │ └── index.scss   #
│ ├── /store/        # 状态管理仓库，使用redux + react-redux
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
│ ├── /pace/         # 页面的加载进度条
│ │ ├── pace-theme-flash.css   #
│ │ └── pace.min.js
│ └── vendor.dll.*.js  # package.json的dependencies依赖包的预打包文件，由npm run dll命令生成
├── babel.config.js  # babel配置
├── .gitgnore        # git忽略检测的配置
├── .postcssrc.js    # postcss配置
├── .prettierrc      # 格式化代码 prettier 的配置， vscode 编辑器需安装 prettier 插件
├── index.html       # 单页面唯一的html
└── package.json
```

<div class="z-doc-titles"></div>

## 脚手架命令

-1、请电脑已安装 nodejs

0、安装依赖包：

由于我们的`zerod`存储在`我们的npm私有服务器`中，请按如下顺序执行命令行：

1、`npm install rimraf cnpm -g` (如果已经执行过了，跳过此步)

2、`npm run init` (此命令包含 rimraf node_modules & npm run npm-zerod & cnpm install & npm run dll)

`注：每次更新zerod包时(从私服安装依赖包)，需从第2步骤依次执行，这是因为私服和外网npm服务有差异，cnpm和npm混用导致某些包文件丢失，然后重新启动报错`

<div class="z-doc-titles"></div>

## 完整安装依赖包后：

1、启动服务：`npm run dev 或 npm start`

2、打包：`npm run build`

3、打包并显示依赖报告：`npm run build --report`

4、不常变依赖包预打包：`npm run dll`

5、从私服安装最新 zerod: `npm run npm-zerod`

6、`npm run init` (此命令包含 `rimraf node_modules & npm run npm-zerod & cnpm install & npm run dll`)
<div class="z-doc-titles"></div>

# Zero-design 简称 zerod

`zerod` 是基于`react + antd`的扩展组件库，主要包括`通用小组件`、`快速开发页面的多风格模板(HOC高阶组件)`、`通用工具函数`、`通用样式类`

`zerod` 需要搭配`zerod-admin-webpack`脚手架使用

安装`zerod`会同时安装以下第三方依赖包：

```json
{
	"dependencies": {
		"contra": "1.9.4",
		"crossvent": "1.5.4",
		"iscroll": "^5.2.0",
		"viewerjs": "^1.2.0",
		"prismjs": "^1.15.0",
		"swiper": "^4.3.5",
		"react-color": "^2.14.1",
		"lodash.debounce": "^4.0.8",
		"lodash.throttle": "^4.1.1",
		"lodash.merge": "^4.6.1",
		"uuid": "^3.3.2",
		"blueimp-md5": "^2.10.0",
		"js-base64": "^2.5.1"
	}
}
```

# zerod-admin-webpack 脚手架 v1.3.3

基于 `react + react-router + redux + react-redux + antd + zerod + scss` 的 webpack4 前端开发环境

1、支持基本的图片文件 `png|jpe?g|gif|svg` 加载,转 base64 打包, 支持视频文件 `mp4|webm|ogg|mp3|wav|flac|aac`加载

2、支持 `js,jsx,css,scss,less` 公共代码抽取，压缩打包

3、`babel-loader + less/sass` 模块加载功能，支持`scss`的 cssModules（不支持 less 的），主要使用 scss 文件写样式，less+less-loader 这里只用来编译 antd 的样式或者其他使用 less 的第三方库，

4、`webpack-dev-server` 服务器，支持反代理配置，热加载热更新

5、`babel-polyfill` 让 `IE10+`浏览器支持 es6+语法的垫片

6、`react-loadable` 结合 `babel-plugin-syntax-dynamic-import` 支持 react 组件的按需加载

7、支持使用 `scss` 变量代替 `less` 变量自定义 `antd` 的主题

8、支持跨项目共享代码发布到我们的私有服务器http://172.16.8.10:8081/repository/hosted-npm/

9、支持状态管理，使用 `redux` + `react-redux`

`git`地址：<a href="http://172.16.26.120/components/zerod-admin-webpack.git" target="_blank">http://172.16.26.120/components/zerod-admin-webpack.git</a>

2018-11-22 v1.1.0 去掉 antd-scss-theme-plugin 插件，添加 happypack 多线程插件，提高编译速度，添加 DllPlugin 和 DllReferencePlugin，添加 sass-resources-loader  
2018-12-11 v1.1.3 修复只分割代码未按需加载的问题，新增 pace 来显示加载 loading  
2018-12-25 v1.2.0 升级<a href="https://babeljs.io/" target="_blank"> babel@7.x</a>  
2019-01-24 v1.2.1 pacejs 插件使用 html-webpack-include-assets-plugin 插入 html 保持与打包路径一致，config/index.js 的 dll.exclude 支持正则匹配，新增 npm run dll-dev 和 npm run dll-prod 两条命令用于生成 dll 文件才用 development 或 production，只有 react 的 development 才支持 DevTools Profiler（性能分析），原 npm run dll 默认是 npm run dll-dev，npm run build 则包含了 npm run dll-prod

生成的 vendor.manifest.json 和 vendor.dll.\*.js 都可以提交 git

如果在开发中发现这个报错：“You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux.” 可以忽略，npm run build 后是不会有的

偶热发现，cnpm install 安装的依赖包依赖链比 npm install 安装的要长的多，所以 npm install 的，运行或打包相对来说快的多。

2019-03-28 v1.2.2 babel-polyfill 改用@babel/polyfill，修复@babel/\*更新后报错问题  
2019-04-20 v1.2.3 加入 Eslint 检测代码规范

2019-04-26 v1.3.2 webpack 相关配置提取出 zerod-webpack-conf 包发布到私服  
2019-04-26 v1.3.3 修复实际未使用上dll的问题，babel.config.js添加@babel/plugin-transform-modules-commonjs插件    


<div class="z-doc-titles"></div>

## 脚手架目录结构

可在 `config/index.js` 配置反代理、host、端口号、sourceMap 等等

```bash
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
│ │ ├── lazyLoad.js  # 这样使用const componet=lazyLoad(()=>import('./componet.jsx'))实现异步组件
│ │ └── Loading.jsx  # //暂未用到
│ ├── /mock/         # 数据模拟（建议使用 mockjs）
│ ├── /scss/         # 通用样式文件夹
│ │ └── index.scss   #
│ ├── /store/        # 状态管理仓库，使用redux + react-redux
│ ├── /views/        # 路由组件目录，应当按照路由结构创建
│ ├── /zTool/        # 通用工具目录
│ │ └── httpAjax.js  # ajax库：axios或fetch 的封装
│ ├── ant-icons.js      # 按需引入ant-design的icon文件
│ ├── antd-vars.less      # scss变量替换ant-design的less变量
│ ├── App.api.js     # 自动加载/Api/下`.api.js`后缀的文件
│ ├── App.context.js # 自动加载/context/下的'Context.js'
│ ├── App.jsx        # 根组件
│ ├── app.scss       # 根样式文件
│ └── main.js        # 项目入口文件
├── /static/         # 不会被压缩打包的静态文件放这里
│ └── vendor.dll.*.js  # package.json的dependencies依赖包的预打包文件，由npm run dll命令生成
├── babel.config.js  # babel配置
├── .eslintrc.js  # Eslin配置
├── .gitgnore        # git忽略检测的配置
├── .postcssrc.js    # postcss配置
├── .prettierrc.js      # 格式化代码 prettier 的配置， vscode 编辑器需安装 prettier 插件
├── index.html       # 单页面唯一的html
└── package.json
```

`.scss`文件是模块化className模式，要写全局className，请使用 `:global{  包含className  }`  

<div class="z-doc-titles"></div>

## 脚手架命令

-1、请电脑已安装 nodejs

0、安装依赖包：

由于我们的`zerod`存储在`我们的npm私有服务器`中，请按如下顺序执行命令行：

1、`npm install rimraf cnpm -g` (如果已经执行过了，跳过此步)

2、`npm run init` (此命令包含 rimraf node_modules & npm run npm-zerod & cnpm install & npm run dll)

`注：每次更新zerod包时(从私服安装依赖包)，需从第2步骤依次执行，这是因为私服和外网npm服务有差异，cnpm和npm混用导致某些包文件丢失，然后重新启动报错`

<div class="z-doc-titles"></div>

## 完整安装依赖包后：

1、启动服务：`npm run dev 或 npm start`

2、打包：`npm run build`

3、打包并显示依赖报告：`npm run build --report`

4、不常变依赖包预打包：`npm run dll`

5、从私服安装最新 zerod: `npm run npm-zerod`

6、`npm run init` (此命令包含 `rimraf node_modules & npm run npm-zerod & cnpm install & npm run dll`)

7、`npm run eslint`： 全局检测代码规范 前提先要全局安装 `npm install eslint eslint-plugin-react eslint-plugin-react-hooks -g`一次
<div class="z-doc-titles"></div>

# Zero-design 简称 zerod

`zerod` 是基于`react + antd`的扩展组件库，主要包括`通用小组件`、`快速开发页面的多风格模板(HOC高阶组件)`、`通用工具函数`、`通用样式类`

`zerod` 需要搭配`zerod-admin-webpack`脚手架使用

安装`zerod`会同时安装以下第三方依赖包：

```json
{
	"dependencies": {
		"contra": "1.9.4",
		"crossvent": "1.5.4",
		"iscroll": "^5.2.0",
		"viewerjs": "^1.2.0",
		"prismjs": "^1.15.0",
		"swiper": "^4.3.5",
		"react-color": "^2.14.1",
		"lodash.debounce": "^4.0.8",
		"lodash.throttle": "^4.1.1",
		"lodash.merge": "^4.6.1",
		"uuid": "^3.3.2",
		"blueimp-md5": "^2.10.0",
		"js-base64": "^2.5.1"
	}
}
```

# zerod-admin-webpack 脚手架 v1.3.3

基于 `react + react-router + redux + react-redux + antd + zerod + scss` 的 webpack4 前端开发环境

1、支持基本的图片文件 `png|jpe?g|gif|svg` 加载,转 base64 打包, 支持视频文件 `mp4|webm|ogg|mp3|wav|flac|aac`加载

2、支持 `js,jsx,css,scss,less` 公共代码抽取，压缩打包

3、`babel-loader + less/sass` 模块加载功能，支持`scss`的 cssModules（不支持 less 的），主要使用 scss 文件写样式，less+less-loader 这里只用来编译 antd 的样式或者其他使用 less 的第三方库，

4、`webpack-dev-server` 服务器，支持反代理配置，热加载热更新

5、`babel-polyfill` 让 `IE10+`浏览器支持 es6+语法的垫片

6、`react-loadable` 结合 `babel-plugin-syntax-dynamic-import` 支持 react 组件的按需加载

7、支持使用 `scss` 变量代替 `less` 变量自定义 `antd` 的主题

8、支持跨项目共享代码发布到我们的私有服务器http://172.16.8.10:8081/repository/hosted-npm/

9、支持状态管理，使用 `redux` + `react-redux`

`git`地址：<a href="http://172.16.26.120/components/zerod-admin-webpack.git" target="_blank">http://172.16.26.120/components/zerod-admin-webpack.git</a>

2018-11-22 v1.1.0 去掉 antd-scss-theme-plugin 插件，添加 happypack 多线程插件，提高编译速度，添加 DllPlugin 和 DllReferencePlugin，添加 sass-resources-loader  
2018-12-11 v1.1.3 修复只分割代码未按需加载的问题，新增 pace 来显示加载 loading  
2018-12-25 v1.2.0 升级<a href="https://babeljs.io/" target="_blank"> babel@7.x</a>  
2019-01-24 v1.2.1 pacejs 插件使用 html-webpack-include-assets-plugin 插入 html 保持与打包路径一致，config/index.js 的 dll.exclude 支持正则匹配，新增 npm run dll-dev 和 npm run dll-prod 两条命令用于生成 dll 文件才用 development 或 production，只有 react 的 development 才支持 DevTools Profiler（性能分析），原 npm run dll 默认是 npm run dll-dev，npm run build 则包含了 npm run dll-prod

生成的 vendor.manifest.json 和 vendor.dll.\*.js 都可以提交 git

如果在开发中发现这个报错：“You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux.” 可以忽略，npm run build 后是不会有的

偶热发现，cnpm install 安装的依赖包依赖链比 npm install 安装的要长的多，所以 npm install 的，运行或打包相对来说快的多。

2019-03-28 v1.2.2 babel-polyfill 改用@babel/polyfill，修复@babel/\*更新后报错问题  
2019-04-20 v1.2.3 加入 Eslint 检测代码规范

2019-04-26 v1.3.2 webpack 相关配置提取出 zerod-webpack-conf 包发布到私服  
2019-06-19 v1.3.3 修复实际未使用上dll的问题，babel.config.js添加@babel/plugin-transform-modules-commonjs插件    


<div class="z-doc-titles"></div>

## 脚手架目录结构

可在 `config/index.js` 配置反代理、host、端口号、sourceMap 等等

```bash
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
│ │ ├── lazyLoad.js  # 这样使用const componet=lazyLoad(()=>import('./componet.jsx'))实现异步组件
│ │ └── Loading.jsx  # //暂未用到
│ ├── /mock/         # 数据模拟（建议使用 mockjs）
│ ├── /scss/         # 通用样式文件夹
│ │ └── index.scss   #
│ ├── /store/        # 状态管理仓库，使用redux + react-redux
│ ├── /views/        # 路由组件目录，应当按照路由结构创建
│ ├── /zTool/        # 通用工具目录
│ │ └── httpAjax.js  # ajax库：axios或fetch 的封装
│ ├── ant-icons.js      # 按需引入ant-design的icon文件
│ ├── antd-vars.less      # scss变量替换ant-design的less变量
│ ├── App.api.js     # 自动加载/Api/下`.api.js`后缀的文件
│ ├── App.context.js # 自动加载/context/下的'Context.js'
│ ├── App.jsx        # 根组件
│ ├── app.scss       # 根样式文件
│ └── main.js        # 项目入口文件
├── /static/         # 不会被压缩打包的静态文件放这里
│ └── vendor.dll.*.js  # package.json的dependencies依赖包的预打包文件，由npm run dll命令生成
├── babel.config.js  # babel配置
├── .eslintrc.js  # Eslin配置
├── .gitgnore        # git忽略检测的配置
├── .postcssrc.js    # postcss配置
├── .prettierrc.js      # 格式化代码 prettier 的配置， vscode 编辑器需安装 prettier 插件
├── index.html       # 单页面唯一的html
└── package.json
```

`.scss`文件是模块化className模式，要写全局className，请使用 `:global{  包含className  }`  

<div class="z-doc-titles"></div>

## 脚手架命令

-1、请电脑已安装 nodejs

0、安装依赖包：

由于我们的`zerod`存储在`我们的npm私有服务器`中，请按如下顺序执行命令行：

1、`npm install rimraf cnpm -g` (如果已经执行过了，跳过此步)

2、`npm run init` (此命令包含 rimraf node_modules & npm run npm-zerod & cnpm install & npm run dll)

`注：每次更新zerod包时(从私服安装依赖包)，需从第2步骤依次执行，这是因为私服和外网npm服务有差异，cnpm和npm混用导致某些包文件丢失，然后重新启动报错`

<div class="z-doc-titles"></div>

## 完整安装依赖包后：

1、启动服务：`npm run dev 或 npm start`

2、打包：`npm run build`

3、打包并显示依赖报告：`npm run build --report`

4、不常变依赖包预打包：`npm run dll`

5、从私服安装最新 zerod: `npm run npm-zerod`

6、`npm run init` (此命令包含 `rimraf node_modules & npm run npm-zerod & cnpm install & npm run dll`)

7、`npm run eslint`： 全局检测代码规范 前提先要全局安装 `npm install eslint eslint-plugin-react eslint-plugin-react-hooks -g`一次
