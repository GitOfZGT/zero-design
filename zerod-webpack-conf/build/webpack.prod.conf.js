/*
 * @Author: zgt
 * @Date: 2019-04-24 18:01:13
 * @LastEditors: zgt
 * @LastEditTime: 2019-09-06 09:38:17
 * @Description: file content
 */
// const path = require('path')
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = merge(baseWebpackConfig, {
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
                'ant-icon': {
                    test: /[\\/]node_modules[\\/](@ant-design|_@ant-design)/,
                    chunks: 'initial',
                    minChunks: 2,
                    name: 'ant-icon',
                    priority: 100,
                    enforce: true,
                },
                moment: {
                    test: /[\\/]node_modules[\\/](moment|_moment)/,
                    chunks: 'initial',
                    minChunks: 2,
                    name: 'moment',
                    priority: 99,
                    enforce: true,
                },
                antd: {
                    test: /[\\/]node_modules[\\/](antd|_antd)/,
                    chunks: 'initial',
                    minChunks: 2,
                    name: 'antd',
                    priority: 98,
                    enforce: true,
                },
                zerod: {
                    test: /[\\/]node_modules[\\/]zerod/,
                    chunks: 'initial',
                    minChunks: 2,
                    name: 'zerod',
                    priority: 97,
                    enforce: true,
                },
                echarts: {
                    test: /[\\/]node_modules[\\/](echarts|_echarts)/,
                    chunks: 'initial',
                    minChunks: 2,
                    name: 'echarts',
                    priority: 96,
                    enforce: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    minChunks: 2,
                    name: 'vendors',
                    priority: 95,
                    enforce: true,
                },
                // 处理异步chunk
                'async-vendors': {
                    test: /[\\/]node_modules[\\/]/,
                    minChunks: 2,
                    chunks: 'async',
                    priority: 94,
                    name: 'async-vendors',
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
                    reuseExistingChunk: true,
                    enforce: true,
                    test: /.(css|scss|less)$/,
                },
            },
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: config.build.productionSourceMap,
                uglifyOptions: {
                    warnings: false,
                },
                exclude: /(dll\..+\.js$|manifest\.json$)/,
            }),
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
            // Setting the following option to `false` will not extract CSS from codesplit chunks.
            // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
            // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
            // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
            allChunks: true,
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        // keep module.id stable when vendor modules does not change
        new webpack.HashedModuleIdsPlugin(),
    ],
});

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

module.exports = webpackConfig;
