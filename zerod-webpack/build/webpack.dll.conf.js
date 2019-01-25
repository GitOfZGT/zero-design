const path = require("path");
const webpack = require("webpack");
const config = require("../config");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const package = require("../package.json");
const rm = require("rimraf");
const dllExcludeRegs = config.dll.exclude.filter((item) => {
	return Object.prototype.toString.call(item) == "[object RegExp]";
});

const vendor = Object.keys(package.dependencies)
	.filter((key) => {
		let has = false;
		for (let index = 0; index < dllExcludeRegs.length; index++) {
			const reg = dllExcludeRegs[index];
			if (reg.test(key)) {
				has = true;
				break;
			}
		}
		return !(config.dll.exclude.includes(key) || has);
	})
	.concat(config.dll.include);
console.log(vendor);
const webpackConfig = {
	mode: "production",
	entry: {
		vendor,
	},
	output: {
		path: path.join(__dirname, "../static"),
		filename: "[name].dll.[hash].js",
		libraryTarget: "var", // 链接库(react.dll.js)输出方式 默认'var'形式赋给变量 b
		library: "_dll_[name]_[hash]", // 全局变量名称 导出库将被以var的形式赋给这个全局变量 通过这个变量获取到里面模块
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false,
				uglifyOptions: {
					warnings: false,
				},
			}),
		],
	},
	plugins: [
		// http://vuejs.github.io/vue-loader/en/workflow/production.html
		new webpack.DefinePlugin({
			"process.env":
				process.env.NODE_ENV === "production" ? require("../config/prod.env") : require("../config/dev.env"),
		}),
		new webpack.DllPlugin({
			path: path.join(__dirname, "./", "[name].manifest.json"),
			name: "_dll_[name]_[hash]", // 和library 一致，输出的manifest.json中的name值
		}),
	],
};
rm(path.resolve(__dirname, "../static/vendor.dll.*.js"), (err) => {
	if (err) throw err;
	webpack(webpackConfig, (err, stats) => {
		console.log(err);
	});
});
