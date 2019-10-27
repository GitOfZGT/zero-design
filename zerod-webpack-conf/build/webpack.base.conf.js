/*
 * @Author: zgt
 * @Date: 2019-04-24 18:01:13
 * @LastEditors: zgt
 * @LastEditTime: 2019-10-09 16:10:55
 * @Description: file content
 */
/* eslint-disable camelcase */
/* eslint-disable no-mixed-spaces-and-tabs */

const webpack = require('webpack');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const path = require('path');
const utils = require('./utils');
const config = require('../config');
// const AntdScssThemePlugin = require("antd-scss-theme-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack'); //多线程运行
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}
function resolveCurrent(dir) {
    return path.join(__dirname, '../../../', dir);
}
function resolveNode_modules(dir) {
    return path.join(__dirname, '../../', dir);
}

let configCopyOpt = [];
if (typeof config.CopyWebpackOptions === 'function') {
    configCopyOpt = config.CopyWebpackOptions(config, process.env.NODE_ENV);
} else if (Array.isArray(config.CopyWebpackOptions)) {
    configCopyOpt = config.CopyWebpackOptions;
}

const isProduction = process.env.NODE_ENV === 'production';
const copyOpt = [
    {
        from: resolveCurrent('static'),
        to: isProduction ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory,
        ignore: ['.*'],
    },
    ...(Array.isArray(configCopyOpt) ? configCopyOpt : []),
];

if (config.pace) {
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
const styleHappyPacks = styleLoaders[1].map((item) => {
    return new HappyPack({ ...item, threadPool: happyThreadPool });
});
const eslintLoader =
    config.dev.useEslint && !isProduction
        ? [
              {
                  test: /\.(js|jsx)$/,
                  enforce: 'pre',
                  exclude: /node_modules/,
                  loader: 'eslint-loader',
                  options: {
                      fix: true,
                      emitWarning: true,
                  },
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
const webProcessEnv = isProduction ? require('../config/prod.env') : require('../config/dev.env');
webProcessEnv.BASE_NAME = `'${outputPath}'`;
module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: config.entry,
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: outputPath,
    },
    resolve: {
        ...confResolve,
        extensions: ['.js', '.jsx', '.json', ...(confResolve.extensions || [])],
        alias: {
            '@': resolveCurrent('src'),
            ...(config.platform === 'pc' && config['ant-icons'] ? antIcons : {}),
            ...(confResolve.alias || {}),
        },
    },
    module: {
        rules: [
            ...eslintLoader,
            {
                test: /\.(js|jsx)$/,
                loader: 'happypack/loader?id=babel',
                // loader: "babel-loader",
                exclude: resolve('static'),
                include: config['babel-includes'].map((url) => {
                    return url;
                }),
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]'),
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
                },
            },
            ...styleLoaders[0],
            ...config.loaders,
        ],
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': webProcessEnv,
        }),
        // copy custom static assets
        new CopyWebpackPlugin(copyOpt),
        new HappyPack({
            //多线程运行 默认是电脑核数-1
            id: 'babel', //对于loaders id
            loaders: ['babel-loader?cacheDirectory'], //是用babel-loader解析
            threadPool: happyThreadPool,
            verboseWhenProfiling: true, //显示信息
        }),
        ...styleHappyPacks,
        ...(config.dll.disabled
            ? []
            : [
                  new webpack.DllReferencePlugin({
                      context: resolveCurrent(''),
                      // scope : "vendor",
                      manifest: require(resolveCurrent('static/vendor.manifest.json')),
                  }),
              ]),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: isProduction ? config.build.index : 'index.html',
            template: resolveCurrent('index.html'),
            inject: true,
            chunksSortMode: 'none',
            favicon: config.favicon,
        }),
        ...(config.dll.disabled
            ? []
            : [
                  new HtmlWebpackTagsPlugin({
                      tags: [
                          {
                              path: 'static',
                              glob: 'vendor.dll.*.js',
                              globPath: resolveCurrent('static'),
                          },
                      ], // 添加的资源相对html的路径
                      append: false, // false 在其他资源的之前添加 true 在其他资源之后添加
                  }),
              ]),
        ...(config.pace
            ? [
                  new HtmlWebpackTagsPlugin({
                      tags: [
                          {
                              path: 'pace',
                              glob: '*.js',
                              globPath: resolve('pace'),
                          },
                          {
                              path: 'pace',
                              glob: '*.css',
                              globPath: resolve('pace'),
                          },
                      ], // 添加的资源相对html的路径
                      append: false, // false 在其他资源的之前添加 true 在其他资源之后添加
                  }),
              ]
            : []),
        ...otherHtmlIncludeAssets,
    ],
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
};
