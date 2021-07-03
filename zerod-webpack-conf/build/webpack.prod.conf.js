/*
 * @Author: zgt
 * @Date: 2019-04-24 18:01:13
 * @LastEditors: zgt
 * @LastEditTime: 2019-09-06 09:38:17
 * @Description: file content
 */
// const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const getBaseWebpackConfig = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { getTerserPlugin } = require('./utils');
module.exports = function getProdWebpackConfig() {
    let webpackConfig = merge(
        getBaseWebpackConfig(),
        {
            mode: 'production',
            devtool: config.build.productionSourceMap ? config.build.devtool : false,
            output: {
                path: config.build.assetsRoot,
                filename: utils.assetsPath('js/[name].[chunkhash].js'),
                chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
            },
            optimization: {
                runtimeChunk: {
                    name: 'manifest',
                },
                splitChunks: {
                    cacheGroups: {
                        default: false,
                        vendors: {
                            test: /[\\/]node_modules[\\/]/,
                            chunks: 'initial',
                            minChunks: 2,
                            name: 'vendors',
                            priority: 97,
                            enforce: true,
                        },
                        // 处理异步chunk
                        'async-vendors': {
                            test: /[\\/]node_modules[\\/]/,
                            minChunks: 2,
                            chunks: 'async',
                            priority: 96,
                            name: 'async-vendors',
                            enforce: true,
                        },
                        'vendors-src': {
                            test: /[\\/]src[\\/]/,
                            chunks: 'initial',
                            minChunks: 2,
                            name: 'vendors-src',
                            priority: 94,
                            enforce: true,
                        },
                        // 处理异步chunk
                        'async-src': {
                            test: /[\\/]src[\\/]/,
                            minChunks: 2,
                            chunks: 'async',
                            priority: 93,
                            name: 'async-src',
                            enforce: true,
                        },
                        style: {
                            chunks: 'all',
                            name: 'style',
                            minChunks: 1,
                            priority: 90,
                            enforce: true,
                            test: /.(css|scss|less)$/,
                        },
                    },
                },
                minimizer: [
                    getTerserPlugin({ sourceMap: config.build.productionSourceMap }),
                    new OptimizeCSSPlugin({
                        cssProcessorOptions: config.build.productionSourceMap
                            ? { safe: true, map: { inline: false } }
                            : { safe: true },
                        canPrint: true,
                    }),
                ],
            },
            plugins: [
                // extract css into its own file
                new MiniCssExtractPlugin({
                    filename: utils.assetsPath('css/[name].[contenthash:12].css'),
                    ignoreOrder: true,
                }),
                // keep module.id stable when vendor modules does not change
                new webpack.HashedModuleIdsPlugin(),
                new ManifestPlugin({
                    fileName: 'manifest.app.json',
                    publicPath: config.build.assetsPublicPath,
                    basePath: config.build.assetsPublicPath,
                }),
            ],
        },
        config.webpackMerger || {},
    );
    webpackConfig = { ...webpackConfig, ...(config.webpackReplacement || {}) };
    if (config.build.productionGzip) {
        const CompressionWebpackPlugin = require('compression-webpack-plugin');

        webpackConfig.plugins.push(
            new CompressionWebpackPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8,
            }),
        );
    }

    if (config.build.bundleAnalyzerReport) {
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
        webpackConfig.plugins.push(new BundleAnalyzerPlugin());
    }
    return webpackConfig;
};
