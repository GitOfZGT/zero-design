const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const config = require('zerod-webpack-conf/config');
const progress = require('zerod-webpack-conf/build/compiler-progress');
const { resolveCurrent } = require('zerod-webpack-conf/build/babelReactCssModule');
const buildStyle = require('./webpack.dll_style.conf');
const rm = require('rimraf');
const { getDllReference, enableDlls, dllConfig } = require('./webpack.dll_utils');
const { getTerserPlugin } = require('./utils');
/**
 * libraryName,libraryDirectory,styleDirectory,moduleFilter
 */
const dllLibrarys = Array.isArray(config.dll.dllLibrarys) ? config.dll.dllLibrarys : [];
const isProduction = process.env.NODE_ENV === 'production';
const entry = {};
dllLibrarys.forEach((lib) => {
    let modules = [];
    const manifespath = resolveCurrent(`dllLibrarysManifes/${lib.libraryName}-modules-manifes.json`);
    if (fs.existsSync(manifespath)) {
        const manifesstring = fs.readFileSync(manifespath).toString();
        modulesList = JSON.parse(manifesstring);
        modules = modulesList
            .filter(
                typeof lib.moduleFilter === 'function'
                    ? lib.moduleFilter
                    : (name) => {
                          return (
                              /\.(js|jsx)$/.test(name) &&
                              (!lib.styleDirectory || !new RegExp(`${lib.styleDirectory}[\\/\\\\]index.js$`).test(name))
                          );
                      },
            )
            .map((name) => {
                return path.join(__dirname, '../../', name);
            });
    }
    if (modules.length) {
        entry[lib.libraryName.replace(/\-/g, '_')] = modules;
    }
});
const confResolve = config.resolve || {};
const antIcons = {
    '@ant-design/icons/lib/dist$': path.resolve(__dirname, './ant-icons.js'),
};

function webpackDllCof({ env }) {
    const webpackConfig = {
        mode: 'production',
        entry,
        output: {
            path: resolveCurrent(`${dllConfig.assetsDirectoryName}/librarysDll`),
            filename: `[name].dll.${env}.[hash].js`,
            libraryTarget: 'var', // 链接库(react.dll.js)输出方式 默认'var'形式赋给变量 b
            library: 'dll_lib_[hash]', // 全局变量名称 导出库将被以var的形式赋给这个全局变量 通过这个变量获取到里面模块
        },
        resolve: {
            ...confResolve,
            ...((config.webpackMerger || {}).resolve || {}),
            extensions: ['.js', '.jsx', '.json'],
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
        optimization: {
            minimizer: [getTerserPlugin()],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true,
                            },
                        },
                    ],
                    exclude: resolveCurrent(dllConfig.assetsDirectoryName),
                    include: Array.isArray(config['babel-includes'])
                        ? config['babel-includes']
                        : [].map((url) => {
                              return url;
                          }),
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env':
                    env === 'production'
                        ? require('zerod-webpack-conf/config/prod.env')
                        : require('zerod-webpack-conf/config/dev.env'),
            }),
            new webpack.DllPlugin({
                entryOnly: true,
                context: resolveCurrent(''),
                path: resolveCurrent(`${dllConfig.assetsDirectoryName}/librarysDll/[name].manifest.${env}.json`),
                name: 'dll_lib_[hash]', // 和library 一致，输出的manifest.json中的name值
            }),
            ...getDllReference(enableDlls, env),
        ],
    };
    return new Promise((resolve, reject) => {
        webpackConfig.plugins.push(
            progress(`${env} compiling for dll-${dllLibrarys.map((lib) => lib.libraryName).join(',')}`),
        );
        webpack(webpackConfig, (err, stats) => {
            if (err) {
                reject();
                throw err;
            }
            process.stdout.write(
                stats.toString({
                    colors: true,
                    modules: false,
                    children: false,
                    chunks: false,
                    chunkModules: false,
                }),
            );
            resolve();
        });
    });
}
function buildDll(params) {
    if (Object.keys(entry).length) {
        rm(resolveCurrent(`${dllConfig.assetsDirectoryName}/librarysDll`), (err) => {
            if (err) {
                throw err;
            }
            process.env.NODE_ENV = 'production';
            let builingpro = webpackDllCof({ env: process.env.NODE_ENV });
            if (config.dll.distEnv) {
                process.env.NODE_ENV = 'development';
                builingpro = builingpro.then(() => {
                    return webpackDllCof({ env: process.env.NODE_ENV });
                });
            }
            builingpro.then(() => {
                buildStyle();
            });
        });
    }
}
// --onlyStyle
if (Object.prototype.hasOwnProperty.call(process.env, 'npm_config_onlyStyle')) {
    buildStyle();
    return;
}
buildDll();
