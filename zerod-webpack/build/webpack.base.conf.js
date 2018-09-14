"use strict";
const path = require("path");
const utils = require("./utils");
const config = require("../config");
const AntdScssThemePlugin = require("antd-scss-theme-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
				loader: "babel-loader",
				include: config["babel-includes"].map((url) => {
					return typeof url ==='string'?resolve(url):url;
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
		...(config["ant.design"] ? [new AntdScssThemePlugin(resolve("node_modules/zerod/ant-theme-vars.scss"))] : []),
		// copy custom static assets
		new CopyWebpackPlugin(copyOpt),
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
