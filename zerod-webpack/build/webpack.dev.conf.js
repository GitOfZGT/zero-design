"use strict";
const address = require("address");
const utils = require("./utils");
const webpack = require("webpack");
const config = require("../config");
const merge = require("webpack-merge");
const path = require("path");
const baseWebpackConfig = require("./webpack.base.conf");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const portfinder = require("portfinder");
const progress = require("./compiler-progress");
const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: "development",
	module: {
		rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true }),
	},
	// cheap-module-eval-source-map is faster for development
	devtool: config.dev.devtool,

	// these devServer options should be customized in /config/index.js
	devServer: {
		clientLogLevel: "warning",
		historyApiFallback: {
			rewrites: [{ from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, "index.html") }],
		},
		hot: true,
		contentBase: false, // since we use CopyWebpackPlugin.
		compress: true,
		host: HOST || config.dev.host,
		port: PORT || config.dev.port,
		open: config.dev.autoOpenBrowser,
		overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
		publicPath: config.dev.assetsPublicPath,
		proxy: config.dev.proxyTable,
		quiet: true, // necessary for FriendlyErrorsPlugin
		watchOptions: {
			poll: config.dev.poll,
			aggregateTimeout: 1000,
			ignored: [config.build.assetsRoot, path.resolve(__dirname, "../config"), __dirname],
		},
		disableHostCheck: false,
		public: address.ip(),
	},
	optimization: {
		minimize: false,
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": require("../config/dev.env"),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
		new webpack.NoEmitOnErrorsPlugin(),
	],
});

module.exports = new Promise((resolve, reject) => {
	portfinder.basePort = process.env.PORT || config.dev.port;
	portfinder.getPort((err, port) => {
		if (err) {
			reject(err);
		} else {
			// publish the new Port, necessary for e2e tests
			process.env.PORT = port;
			// add port to devServer config
			devWebpackConfig.devServer.port = port;

			// Add FriendlyErrorsPlugin
			devWebpackConfig.plugins.push(
				new FriendlyErrorsPlugin({
					compilationSuccessInfo: {
						messages:
							devWebpackConfig.devServer.host === "0.0.0.0"
								? [
										`Your application is running here: http://${
											devWebpackConfig.devServer.public
										}:${port}`,
										`Your application is running here: http://localhost:${port}`,
								  ]
								: [
										`Your application is running here: http://${
											devWebpackConfig.devServer.host
										}:${port}`,
								  ],
					},
					onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined,
				}),
			);
			devWebpackConfig.plugins.push(progress("compiling for development"));
			resolve(devWebpackConfig);
		}
	});
});
