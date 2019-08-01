
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const merge = require('webpack-merge');
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}
function resolveCurrent(dir) {
    return path.join(__dirname, '../../../', dir);
}
function resolveNode_modules(dir) {
    return path.join(__dirname, '../../', dir);
}
let age = { name: 'share-example' };
const agepath = 'share-code/package.json';
if (fs.existsSync(resolveCurrent(agepath))) {
    age = require(resolveCurrent(agepath));
}
// 共享代码包的名称
const shareName = age.name;
if (
    !/^(share\-)[a-z0-9]*/.test(shareName) &&
    !/^(zerod\-)[a-z0-9]*/.test(shareName)
) {
    console.log(
        chalk.red(`share-code/package.json/name必须以share-或者zerod-开头`),
    );
    process.exit(1);
}

let baseConf = {};
if (fs.existsSync(resolveCurrent('config/index.js'))) {
    baseConf = require(resolveCurrent('config/index.js'));
}

const config = merge(
    {
        platform: 'pc', //"pc | mobile"
        pace: true,
        'ant-icons': true,
        //入口js
        entry: {},
        copyName: shareName,
        //babel-loader 要包含的文件夹是哪些
        'babel-includes': [
            resolveCurrent('src'),
            /(node_modules(\\|\/)_?(share|zerod)\-?.*)/,
            resolveNode_modules('webpack-dev-server/client'),
        ],
        //微信页面开发授权域名验证的文件，如： path.resolve(__dirname, '../MP_verify_P7fns4NGi17lbM0R.txt')
        MP_verify: '',
        favicon: path.join(__dirname, './', 'logo.png'),
        //scss变量提升
        scssVars: [],
        //增加加载器
        loaders: [],
        dll: {
            disabled:false,
            //除了package.json的dependencies，还需包含
            include: [],
            //打包dll时从package.json的dependencies中不包含
            exclude: [
                'antd',
                'antd-mobile',
                'uuid',
                'echarts',
                'babel-polyfill',
                '@babel/polyfill',
                'mockjs',
            ],
        },
        HtmlIncludeAssets: [],
        //开发模式配置
        dev: {
            // Paths
            assetsSubDirectory: 'static',
            assetsPublicPath: '/',
            //反代理配置
            proxyTable: {},
            // Various Dev Server settings
            host: '0.0.0.0', // can be overwritten by process.env.HOST
            port: 33000, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
            autoOpenBrowser: false,
            errorOverlay: true,
            notifyOnErrors: true,
            poll: false,
            //是否编译时启用eslint
            useEslint: true,
            devtool: 'cheap-module-eval-source-map',
            cssSourceMap: true,
        },
        //生产模式配置
        build: {
            // Template for index.html
            index: resolveCurrent('dist/index.html'),
            // Paths
            assetsRoot: resolveCurrent('dist'),
            assetsSubDirectory: 'static',
            assetsPublicPath: '/',
            //Source Maps
            productionSourceMap: false,
            // https://webpack.js.org/configuration/devtool/#production
            devtool: 'source-map',
            //是否打包压缩zip
            productionGzip: false,
            productionGzipExtensions: ['js', 'css'],
            //打包报告
            bundleAnalyzerReport: process.env.npm_config_report,
        },
    },
    baseConf,
);
const exists = function(url) {
    if (url) {
        fs.exists(url, function(exist) {
            if (!exist) {
                console.log(chalk.red(`${url}不存在`));
                process.exit(1);
            }
        });
    }
};
exists(config.favicon);
exists(config.MP_verify);
module.exports = config;
