/*
 * @Author: zgt
 * @Date: 2019-08-21 09:38:24
 * @LastEditors: zgt
 * @LastEditTime: 2019-10-09 16:10:15
 * @Description: file content
 */

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const merge = require('webpack-merge');
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}
function resolveCurrent(dir) {
    return path.join(path.resolve(), dir);
}
function resolveNode_modules(dir) {
    return path.join(__dirname, '../../', dir);
}

let baseConf = {};
if (fs.existsSync(resolveCurrent('zerod.config.js'))) {
    baseConf = require(resolveCurrent('zerod.config.js'));
} else if (fs.existsSync(resolveCurrent('config/index.js'))) {
    baseConf = require(resolveCurrent('config/index.js'));
} else {
    throw Error('cannot find zerod.config.js');
}
let resolvePackage = {};
if (fs.existsSync(resolveCurrent('package.json'))) {
    resolvePackage = require(resolveCurrent('package.json'));
}
const config = merge(
    {
        version: resolvePackage.version,
        //追加合并webpack配置
        webpackMerger: {},
        platform: 'pc', //"pc" 对应 zerod-admin-webpack 模板,"mobile" 对应 zerod-mobile-webpack 模板
        //是否添加 pace.js(页面顶部进度条)
        pace: true,
        //是否antd的图标按需引入,在src/ant-icons.js
        'ant-icons': true,
        //根目录的哪个目录copy到node_modules,copy到node_modules的包名称是 copyFolderName/package.json的name，由npm run copy触发
        copyFolderName: 'share-code',
        //babel-loader 要包含的文件夹是哪些,false则不使用babel-loader
        'babel-includes': [
            resolveCurrent('src'),
            /node_modules[\\/]_?(share|zerod)\-?.*/,
            resolveNode_modules('webpack-dev-server/client'),
            resolveNode_modules('signature_pad'),
        ],
        //微信页面开发授权域名验证的文件，如： path.resolve(__dirname, '../MP_verify_P7fns4NGi17lbM0R.txt')
        MP_verify: '',
        //浏览器标签页小图标
        favicon: path.join(__dirname, './', 'logo.png'),
        //scss变量提升文件,并且scss变量覆盖less变量
        scssVars: [],
        //追加sass-loader的rule,false则不使用sass-loader
        scssRule: {
            exclude: /node_modules[\\/](?!zerod|share|_zerod|_share)/,
        },
        //追加less-loader的rule,false则不使用less-loader
        lessRule: {
            exclude: /node_modules[\\/](?!antd|_antd|ant-mobile|_ant-mobile|zerod|share|_zerod|_share)/,
        },
        //babel-plugin-react-css-modules的配置
        reactCssModulesOptions: {},
        //url-loader的参数配置
        urlLoaderOptions: {},
        //增加加载器，同 webpackMerger.module.rules
        loaders: [],
        //将package.json的dependencies的依赖包预打包,npm run dll||dll-dev||dll-prod 触发
        dll: {
            //是否禁用dll
            disabled: false,
            //除了package.json的dependencies，还需包含
            include: [],
            //打包dll时从package.json的dependencies中不包含
            exclude: [
                'uuid',
                'echarts',
                'babel-polyfill',
                '@babel/polyfill',
                'mockjs',
                /^(antd|ant-mobile|zerod|share)/,
            ],
            //是否分模式打包
            distEnv: true,
            //引入dll资源时使用的模式'production' || 'development'，默认：process.env.NODE_ENV
            usefulEnvName: '',
            //预打包的模块，默认：[{name:"react",modules: ['react', 'react-dom', 'react-router-dom']},{name:"vendor",modules: package.dependencies}]，按顺序依赖
            dllModules: [],
            //按需预打包的组件库,依赖 dllModules
            dllLibrarys:
                baseConf.dll && Array.isArray(baseConf.dll.dllLibrarys) && baseConf.dll.dllLibrarys.length
                    ? []
                    : [
                          {
                              libraryName: 'antd',
                              styleDirectory: 'style',
                              moduleFilter: null,
                          },
                      ],
        },
        //html-webpack-plugin插件的追加配置 [] || (config,NODE_ENV)=>([])
        HtmlIncludeAssets: [],
        //copy-webpack-plugin插件的追加配置 [] || (config,NODE_ENV)=>([])
        CopyWebpackOptions: [],
        //开发模式配置
        dev: {
            // 不进行编译的静态文件目录
            assetsSubDirectory: 'static',
            // 前缀路径, npm run dev --basepath=/mypath/的basepath优先级大于此
            assetsPublicPath: '/',
            //devServer的反代理配置
            proxyTable: {},
            host: '0.0.0.0',
            port: 33000,
            //启动服务后是否自动打开浏览器
            autoOpenBrowser: false,
            //出现编译器错误或警告时，在浏览器中显示全屏覆盖
            errorOverlay: true,
            //编译出错在右下角弹出提醒
            notifyOnErrors: true,
            poll: false,
            //是否编译时启用eslint
            useEslint: true,
            //追eslint-loader的rule
            eslintRule: {},
            devtool: 'cheap-module-eval-source-map',
            //css生成 SourceMap
            cssSourceMap: true,
        },
        //生产模式配置
        build: {
            // 根目录的index.html模板打包后的位置
            index: resolveCurrent('dist/index.html'),
            // 打包后所有文件的位置
            assetsRoot: resolveCurrent('dist'),
            // 不进行编译的静态文件目录
            assetsSubDirectory: 'static',
            // 前缀路径, npm run build --basepath=/mypath/的basepath优先级大于此
            assetsPublicPath: '/',
            // 是否生成 SourceMap
            productionSourceMap: false,
            // https://webpack.js.org/configuration/devtool/#production
            devtool: 'source-map',
            // 是否打包压缩zip
            productionGzip: false,
            productionGzipExtensions: ['js', 'css'],
            // 打包完成后打开报告, npm run build --report 触发
            bundleAnalyzerReport: process.env.npm_config_report,
        },
        //覆盖webpack配置
        webpackReplacement: {},
    },
    baseConf,
);

let age = { name: '' };
config.copyName = '';
const agepath = `${config.copyFolderName}/package.json`;
if (config.copyFolderName && fs.existsSync(resolveCurrent(agepath))) {
    age = require(resolveCurrent(agepath));
}
// 共享代码包的名称
const shareName = age.name;
if (shareName && !/^(share|zerod)\-?[a-z0-9]*/.test(shareName)) {
    console.log(chalk.red(`${config.copyFolderName}/package.json/name必须以share或者zerod开头`));
    process.exit(1);
}
config.copyName = shareName;
function argvConverter(original) {
    const argvs = {};
    (original || []).forEach((str) => {
        const key = str.replace(/^--/g, '');
        if (key.includes('=')) {
            const kv = key.split('=');
            argvs[kv[0]] = kv[1];
        }
    });
    return argvs;
}

function getNpmArgvOriginal() {
    const original = [];
    for (const key in process.env) {
        if (process.env[key] && /^npm_config_/.test(key) && !/^\w+:\\/.test(process.env[key])) {
            original.push(`${key.replace(/^npm_config_/g, '')}=${process.env[key]}`);
        }
    }
    return original;
}

function getArgvs() {
    const argvOriginal = process.argv.slice(2);
    const npmOriginal = process.env.npm_config_argv
        ? JSON.parse(process.env.npm_config_argv).original
        : getNpmArgvOriginal();
    return { ...argvConverter(argvOriginal), ...argvConverter(npmOriginal) };
}
const headAndEndExp = /(^\/|\/$)/g;
const envs = getArgvs();
const urlExp = /^https?\:\/\//;
if (envs.baserouter && envs.baserouter !== '/' && !urlExp.test(envs.baserouter)) {
    envs.baserouter = `/${envs.baserouter.replace(headAndEndExp, '')}/`;
}
if (envs.basepath && envs.basepath !== '/' && !urlExp.test(envs.basepath)) {
    envs.basepath = `/${envs.basepath.replace(headAndEndExp, '')}/`;
}
let publickpath = envs.baserouter || envs.basepath;
if (publickpath) {
    config.dev.assetsPublicPath = publickpath;
    config.build.assetsPublicPath = publickpath;
} else {
    envs.baserouter =
        process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath;
}
//注入环境变量
config.envs = envs;
const exists = function (url) {
    if (url) {
        if (!fs.existsSync(url)) {
            console.log(chalk.red(`${url}不存在`));
            process.exit(1);
        }
    }
};
exists(config.favicon);
exists(config.MP_verify);
module.exports = config;
