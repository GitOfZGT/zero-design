"use strict";
const webpack = require("webpack");
const HtmlIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const path = require("path");
const utils = require("./utils");
const config = require("../config");
// const AntdScssThemePlugin = require("antd-scss-theme-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HappyPack = require("happypack"); //多线程运行
const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
function resolve(dir) {
	return path.join(__dirname, "..", dir);
}
const copyOpt = [
	{
		from: path.resolve(__dirname, "../static"),
		to: process.env.NODE_ENV === "production" ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory,
		ignore: [".*"],
	},
];
if (config["MP_verify"]) {
	copyOpt.push({
		from: config["MP_verify"],
		to: "",
	});
}
module.exports = {
	context: path.resolve(__dirname, "../"),
	entry: config.entry,
	output: {
		path: config.build.assetsRoot,
		filename: "[name].js",
		publicPath: process.env.NODE_ENV === "production" ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"],
		alias: {
			"@": resolve("src"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: "happypack/loader?id=babel",
				// loader: "babel-loader",
				exclude: resolve('static'),
				include: config["babel-includes"].map((url) => {
					return typeof url === "string" ? resolve(url) : url;
				}),
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: "url-loader",
				options: {
					limit: 10000,
					name: utils.assetsPath("img/[name].[hash:7].[ext]"),
				},
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: "url-loader",
				options: {
					limit: 10000,
					name: utils.assetsPath("media/[name].[hash:7].[ext]"),
				},
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: "url-loader",
				options: {
					limit: 10000,
					name: utils.assetsPath("fonts/[name].[hash:7].[ext]"),
				},
			},
		],
	},
	plugins: [
		// ...(config["ant.design"] ? [new AntdScssThemePlugin(resolve("node_modules/zerod/ant-theme-vars.scss"))] : []),
		// copy custom static assets
		new CopyWebpackPlugin(copyOpt),
		new HappyPack({
			//多线程运行 默认是电脑核数-1
			id: "babel", //对于loaders id
			loaders: ["babel-loader?cacheDirectory"], //是用babel-loader解析
			threadPool: happyThreadPool,
			verboseWhenProfiling: true, //显示信息
		}),
		new webpack.DllReferencePlugin({
			// context: __dirname,
			// scope : "vendor",
			manifest: require("./vendor.manifest.json"),
		}),
		// https://github.com/ampedandwired/html-webpack-plugin
		new HtmlWebpackPlugin({
			filename: process.env.NODE_ENV === "production" ? config.build.index : "index.html",
			template: "index.html",
			inject: true,
			chunksSortMode: "none",
			favicon: config.favicon,
		}),
		new HtmlIncludeAssetsPlugin({
			assets: [{ path: "static", glob: "vendor.dll.*.js", globPath: "static/" }], // 添加的资源相对html的路径
			append: false, // false 在其他资源的之前添加 true 在其他资源之后添加
		}),
	],
	node: {
		// prevent webpack from injecting useless setImmediate polyfill because Vue
		// source contains it (although only uses it if it's native).
		setImmediate: false,
		// prevent webpack from injecting mocks to Node native modules
		// that does not make sense for the client
		dgram: "empty",
		fs: "empty",
		net: "empty",
		tls: "empty",
		child_process: "empty",
	},
};
