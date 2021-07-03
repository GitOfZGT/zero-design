const address = require('address');
const utils = require('./utils');
const config = require('../config');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const progress = require('./compiler-progress');
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const getBaseWebpackConfig = require('./webpack.base.conf');
const ExtractLibraryInitialPlugin = require('./ExtractLibraryInitialPlugin');
const ManifestPlugin = require('webpack-manifest-plugin');
exports.getDevWebpackConfig = function() {
    const devWebpackConfig = merge(
        getBaseWebpackConfig(),
        {
            mode: 'development',
            // cheap-module-eval-source-map is faster for development
            devtool: config.dev.devtool,

            // these devServer options should be customized in /config/index.js
            devServer: {
                clientLogLevel: 'warning',
                historyApiFallback: {
                    rewrites: [
                        {
                            from: /^\/.*(?!\.html)/,
                            to: path.posix.join(config.dev.assetsPublicPath, 'index.html'),
                        },
                    ],
                },
                hot: true,
                contentBase: false, // since we use CopyWebpackPlugin.
                compress: true,
                host: config.dev.host,
                port: config.dev.port,
                open: config.dev.autoOpenBrowser,
                overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
                publicPath: config.dev.assetsPublicPath,
                proxy: config.dev.proxyTable,
                quiet: true, // necessary for FriendlyErrorsPlugin
                watchOptions: {
                    poll: config.dev.poll,
                    aggregateTimeout: 1000,
                    ignored: [config.build.assetsRoot, path.resolve(__dirname, '../config'), __dirname],
                },
                disableHostCheck: true,
                useLocalIp: true,
            },
            optimization: {
                minimize: false,
            },
            plugins: [
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
                new webpack.NoEmitOnErrorsPlugin(),
                new ExtractLibraryInitialPlugin({
                    dllLibrarys: config.dll.dllLibrarys,
                }),
                new ManifestPlugin({
                    fileName: 'manifest.app.json',
                    publicPath: config.dev.assetsPublicPath,
                    basePath: config.dev.assetsPublicPath,
                }),
            ],
        },
        config.webpackMerger || {},
    );
    return { ...devWebpackConfig, ...(config.webpackReplacement || {}) };
};
exports.devWebpackBuild = function(devWebpackConfig) {
    return new Promise((resolve, reject) => {
        portfinder.basePort = process.env.PORT || config.dev.port;
        portfinder.getPort((err, port) => {
            if (err) {
                reject(err);
            } else {
                // add port to devServer config
                devWebpackConfig.devServer.port = port;
                devWebpackConfig.devServer.public =
                    config.dev.host === '0.0.0.0' ? `${address.ip()}:${port}` : `${config.dev.host}:${port}`;

                // Add FriendlyErrorsPlugin
                devWebpackConfig.plugins.push(
                    new FriendlyErrorsPlugin({
                        compilationSuccessInfo: {
                            messages:
                                devWebpackConfig.devServer.host === '0.0.0.0'
                                    ? [
                                          `Your application is running here: http://${devWebpackConfig.devServer.public}`,
                                          `Your application is running here: http://localhost:${port}`,
                                      ]
                                    : [`Your application is running here: http://${devWebpackConfig.devServer.public}`],
                        },
                        onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined,
                    }),
                );
                devWebpackConfig.plugins.push(progress('compiling for development'));
                resolve(devWebpackConfig);
            }
        });
    });
};
