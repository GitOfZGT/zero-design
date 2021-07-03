const path = require('path');
const webpack = require('webpack');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const HtmlWebpackTopBannerPlugin = require('./HtmlWebpackTopBannerPlugin');
const fs = require('fs');
const utils = require('./utils');
const config = require('../config');
const { getDllLibReferencePlugins, getDllHtmlWebpackTagsPlugins } = require('./webpack.dll_lib_reference');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolveCurrent, resolve } = require('./babelReactCssModule');
const { dllConfig } = require('./webpack.dll_utils');
const ThemeCssExtractWebpackPlugin = require('@zougt/theme-css-extract-webpack-plugin');
module.exports = function getBaseWebpackConfig() {
    let configCopyOpt = [];
    if (typeof config.CopyWebpackOptions === 'function') {
        configCopyOpt = config.CopyWebpackOptions(config, process.env.NODE_ENV);
    } else if (Array.isArray(config.CopyWebpackOptions)) {
        configCopyOpt = config.CopyWebpackOptions;
    }
    const isProduction = process.env.NODE_ENV === 'production';
    const copyOpt = [...(Array.isArray(configCopyOpt) ? configCopyOpt : [])];
    if (fs.existsSync(resolveCurrent('static'))) {
        copyOpt.push({
            from: resolveCurrent('static'),
            to: isProduction ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory,
            ignore: ['.*'],
        });
    }
    if (!config.dll.disabled && fs.existsSync(resolveCurrent(dllConfig.assetsDirectoryName))) {
        copyOpt.push({
            from: resolveCurrent(dllConfig.assetsDirectoryName),
            to: dllConfig.assetsDirectoryName,
            ignore: [
                '**.manifest.**.json',
                `**.dll.${
                    config.dll.usefulEnvName === 'production' || process.env.NODE_ENV === 'production'
                        ? 'development'
                        : 'production'
                }.**.js`,
            ],
        });
    }
    if (config.pace && fs.existsSync(resolve('pace'))) {
        copyOpt.push({
            from: resolve('pace'),
            to: 'pace',
            ignore: ['.*'],
        });
    }
    if (config.MP_verify) {
        copyOpt.push({
            from: config.MP_verify,
            to: '',
        });
    }
    const styleLoaders = utils.styleLoaders({
        sourceMap: isProduction ? config.build.productionSourceMap : config.dev.cssSourceMap,
        extract: isProduction,
        usePostCSS: true,
    });

    const eslintLoader =
        config.dev.useEslint && !isProduction
            ? [
                  {
                      test: /\.(js|jsx|ts|tsx)$/,
                      enforce: 'pre',
                      exclude: [/node_modules/],
                      loader: 'eslint-loader',
                      options: {
                          fix: true,
                          emitWarning: true,
                      },
                      ...(config.dev.eslintRule || {}),
                  },
              ]
            : [];
    let otherHtmlIncludeAssets = [];
    if (typeof config.HtmlIncludeAssets === 'function') {
        const assets = config.HtmlIncludeAssets(config, process.env.NODE_ENV);
        assets.forEach((asset) => {
            otherHtmlIncludeAssets.push(new HtmlWebpackTagsPlugin(asset));
        });
    } else if (Array.isArray(config.HtmlIncludeAssets)) {
        config.HtmlIncludeAssets.forEach((asset) => {
            otherHtmlIncludeAssets.push(new HtmlWebpackTagsPlugin(asset));
        });
    }
    const antIcons = {
        '@ant-design/icons/lib/dist$': path.resolve(__dirname, './ant-icons.js'),
    };
    const confResolve = config.resolve || {};
    const outputPath = isProduction ? config.build.assetsPublicPath : config.dev.assetsPublicPath;

    return {
        context: path.resolve(__dirname, '../'),
        entry: config.entry || {},
        output: {
            path: config.build.assetsRoot,
            filename: '[name].js',
            publicPath: outputPath,
        },
        resolve: {
            ...confResolve,
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', ...(confResolve.extensions || [])],
            alias: {
                '@': resolveCurrent('src'),
                ...(isProduction
                    ? {}
                    : config.copyName
                    ? { [config.copyName]: resolveCurrent(config.copyFolderName) }
                    : {}),
                ...(config.platform === 'pc' && config['ant-icons'] ? antIcons : {}),
                ...(confResolve.alias || {}),
                ...(((config.webpackMerger || {}).resolve || {}).alias || {}),
            },
        },
        module: {
            rules: [
                ...eslintLoader,
                ...utils.getUrlLoaders(),
                ...styleLoaders[0],
                ...utils.getBabelLoader(),
                ...config.loaders,
            ],
        },
        plugins: [
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new webpack.DefinePlugin({
                'process.env': utils.getEnvs({ outputPath }),
            }),
            new CopyWebpackPlugin(copyOpt),
            ...getDllLibReferencePlugins(),
            new HtmlWebpackPlugin({
                filename: isProduction ? config.build.index : 'index.html',
                template: (isProduction ? config.build.template : config.dev.template) || resolveCurrent('index.html'),
                inject: true,
                chunksSortMode: 'none',
                favicon: config.favicon,
                minify: {
                    crashWhitespace: true,
                    removeComments: true,
                    useShortDoctype: true,
                },
            }),
            new HtmlWebpackTopBannerPlugin({
                banner: utils.getBuildBanner(),
            }),
            new ThemeCssExtractWebpackPlugin({
                multipleScopeVars: config.multipleScopeVars,
                extract: isProduction,
                outputDir: '/static/theme/',
                removeCssScopeName: false,
                ...(config.themeCssExtractWebpackPluginOptions || {}),
            }),
            ...getDllHtmlWebpackTagsPlugins(),
            ...otherHtmlIncludeAssets,
        ],
        node: {
            setImmediate: false,
            dgram: 'empty',
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
            child_process: 'empty',
        },
    };
};
