"use strict";
const path = require("path");
const config = require("../config");
// const AntdScssThemePlugin = require("antd-scss-theme-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const packageConfig = require("../package.json");
function resolve(dir) {
	return path.join(__dirname, "..", dir);
}
exports.assetsPath = function(_path) {
	const assetsSubDirectory =
		process.env.NODE_ENV === "production" ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory;

	return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function(options) {
	options = options || {};

	const getCssLoader = () => {
		return {
			loader: "css-loader",
			options: {
				sourceMap: options.sourceMap,
			},
		};
	};

	const postcssLoader = {
		loader: "postcss-loader",
		options: {
			sourceMap: options.sourceMap,
		},
	};

	// generate loader string to be used with extract text plugin
	function generateLoaders(loader, loaderOptions) {
		let cssLoader = getCssLoader();
		if (loader == "sass") {
			cssLoader.options = Object.assign({}, cssLoader.options, {
				modules: true,
				importLoaders: 1,
				localIdentName: "[local]_[hash:base64:6]",
			});
		}
		const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader];

		if (loader) {
			let loaderObj = {
				loader: loader + "-loader",
				options: Object.assign({}, loaderOptions, {
					sourceMap: options.sourceMap,
					javascriptEnabled: loader == "less",
				}),
			};
			// if ((loader == "less" || loader == "sass") && config["ant.design"]) {
			// 	loaderObj = AntdScssThemePlugin.themify(loaderObj);
			// }
			loaders.push(loaderObj);
			if (loader == "sass") {
				loaders.push({
					loader: "sass-resources-loader",
					options: {
						// 多个文件时用数组的形式传入，单个文件时可以直接使用 path.resolve(__dirname, '../static/style/common.scss'
						resources: config.scssVars,
					},
				});
			}
		}

		// Extract CSS when that option is specified
		// (which is the case during production build)
		if (options.extract) {
			// return ExtractTextPlugin.extract({
			//   use: loaders,
			//   fallback: 'style-loader'
			// })
			return [MiniCssExtractPlugin.loader].concat(loaders);
		} else {
			return ["style-loader"].concat(loaders);
		}
	}

	// https://vue-loader.vuejs.org/en/configurations/extract-css.html
	return {
		css: generateLoaders(),
		postcss: generateLoaders(),
		less: generateLoaders("less"),
		// sass: generateLoaders("sass", { indentedSyntax: true }),
		scss: generateLoaders("sass"),
		stylus: generateLoaders("stylus"),
		styl: generateLoaders("stylus"),
	};
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
	const output = [];
	const loaders = exports.cssLoaders(options);

	for (const extension in loaders) {
		const loader = loaders[extension];
		const opt = {
			test: new RegExp("\\." + extension + "$"),
			use: loader,
		};
		if (extension == "scss") {
			opt.issuer = {
				exclude: /\.less$/,
			};
		}
		output.push(opt);
	}
	output.push({
		test: /\.scss$/,
		issuer: /\.less$/,
		use: {
			loader: require.resolve('./sassVarsToLess'), // Change path if necessary
		},
	});
	return output;
};

exports.createNotifierCallback = () => {
	const notifier = require("node-notifier");

	return (severity, errors) => {
		if (severity !== "error") return;

		const error = errors[0];
		const filename = error.file && error.file.split("!").pop();

		notifier.notify({
			title: packageConfig.name,
			message: severity + ": " + error.name,
			subtitle: filename || "",
			icon: path.join(__dirname, "logo.png"),
		});
	};
};
