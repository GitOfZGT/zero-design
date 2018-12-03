"use strict";
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const age = require("../share-code/package.json");
// 共享代码包的名称
const shareName = age.name;
if (!/^(share\-)[a-z0-9]*/.test(shareName)) {
	console.log(chalk.red(`share-code/package.json/name必须以share-开头`));
	process.exit(1);
}
const config = {
	//入口js
	entry: {
		app: ["babel-polyfill", "./src/main.js"],
	},
	copyName: shareName,
	//babel-loader 要包含的文件夹是哪些
	"babel-includes": ["src", "node_modules/zerod", /(node_modules(\\|\/)share\-.*)/, "node_modules/webpack-dev-server/client"],
	//是否使用了ant design 组件库，管理theme，当用于微信等移动端开发时请设置为false
	"ant.design": true,
	//微信页面开发授权域名验证的文件，如： path.resolve(__dirname, '../MP_verify_P7fns4NGi17lbM0R.txt')
	MP_verify: "",
	favicon: path.resolve(__dirname, "../src/assets/images/logo.png"),
	//scss变量提升
	scssVars:[path.resolve(__dirname,"../node_modules/zerod/ant-theme-vars.scss")],
	dll: {
		//除了package.json的dependencies，还需包含
		include: ["moment"],
		//打包dll时从package.json的dependencies中不包含
		exclude: ["antd", "uuid"],
	},
	//开发模式配置
	dev: {
		// Paths
		assetsSubDirectory: "static",
		assetsPublicPath: "/",
		//反代理配置
		proxyTable: {
			"/webapi/wechat-mp/*": {
				target: "http://172.16.8.243:8902",
				secure: true,
				changeOrigin: false,
			},
			"/webapi/form/*": {
				target: "http://172.16.8.20:11160",
				secure: true,
				changeOrigin: false,
			},
			"/webapi/task/*": {
				target: "http://172.16.8.20:11150",
				secure: true,
				changeOrigin: false,
			},
			"/webapi/process/*": {
				target: "http://172.16.8.20:11150",
				secure: true,
				changeOrigin: false,
			},
			"/webapi/*": {
				target: "http://172.16.8.24:11140",
				secure: true,
				changeOrigin: false,
			},
			"/login": {
				target: "http://172.16.8.24:11140",
				secure: true,
				changeOrigin: false,
			},
			"/logout": {
				target: "http://172.16.8.24:11140",
				secure: true,
				changeOrigin: false,
			},
		},

		// Various Dev Server settings
		host: "0.0.0.0", // can be overwritten by process.env.HOST
		port: 33000, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

		// Use Eslint Loader?
		// If true, your code will be linted during bundling and
		// linting errors and warnings will be shown in the console.
		useEslint: false,
		// If true, eslint errors and warnings will also be shown in the error overlay
		// in the browser.
		showEslintErrorsInOverlay: false,

		/**
		 * Source Maps
		 */

		// https://webpack.js.org/configuration/devtool/#development
		devtool: "cheap-module-eval-source-map",

		// If you have problems debugging vue-files in devtools,
		// set this to false - it *may* help
		// https://vue-loader.vuejs.org/en/options.html#cachebusting
		cacheBusting: true,

		cssSourceMap: true,
	},
	//生产模式配置
	build: {
		// Template for index.html
		index: path.resolve(__dirname, "../dist/index.html"),

		// Paths
		assetsRoot: path.resolve(__dirname, "../dist"),
		assetsSubDirectory: "static",
		assetsPublicPath: "/",

		/**
		 * Source Maps
		 */

		productionSourceMap: false,
		// https://webpack.js.org/configuration/devtool/#production
		devtool: "#source-map",

		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ["js", "css"],

		// Run the build command with an extra argument to
		// View the bundle analyzer report after build finishes:
		// `npm run build --report`
		// Set to `true` or `false` to always turn it on or off
		bundleAnalyzerReport: process.env.npm_config_report,
	},
};
const exists = function(url) {
	if (url)
		fs.exists(url, function(exist) {
			if (!exist) {
				console.log(chalk.red(`${url}不存在`));
				process.exit(1);
			}
		});
};
exists(config.favicon);
exists(config.MP_verify);
module.exports = config;
