// const path = require('path');
const rm = require('rimraf');
const config = require('../config');
const webpack = require('webpack');
const progress = require('./compiler-progress');
const { resolveCurrent } = require('./babelReactCssModule');
const { enableDlls, getDllReference, dllConfig } = require('./webpack.dll_utils');
const { getTerserPlugin } = require('./utils');
function createDll({ entry, name, prevDlls, env }) {
    const webpackConfig = {
        mode: 'production',
        entry,
        output: {
            path: resolveCurrent(`${dllConfig.assetsDirectoryName}/${name}Dll`),
            filename: `[name].dll.${env}.[hash].js`,
            libraryTarget: 'var', // 链接库(react.dll.js)输出方式 默认'var'形式赋给变量 b
            library: 'dll_[hash]', // 全局变量名称 导出库将被以var的形式赋给这个全局变量 通过这个变量获取到里面模块
        },
        optimization: {
            minimizer: [getTerserPlugin()],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': env === 'production' ? require('../config/prod.env') : require('../config/dev.env'),
            }),
            new webpack.DllPlugin({
                context: resolveCurrent(''),
                path: resolveCurrent(`${dllConfig.assetsDirectoryName}/[name]Dll/[name].manifest.${env}.json`),
                name: 'dll_[hash]', // 和library 一致，输出的manifest.json中的name值
            }),
            ...getDllReference(prevDlls, env),
        ],
    };
    return new Promise((resolve, reject) => {
        rm(resolveCurrent(`${dllConfig.assetsDirectoryName}/${name}Dll/${name}.dll.${env}.*.js`), (err) => {
            if (err) {
                reject();
                throw err;
            }
            webpackConfig.plugins.push(progress(`${env} compiling for dll-${name}`));
            webpack(webpackConfig, (err, stats) => {
                if (err) {
                    reject();
                    throw err;
                }
                process.stdout.write(
                    stats.toString({
                        colors: true,
                        modules: false,
                        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
                        chunks: false,
                        chunkModules: false,
                    }),
                );
                resolve();
            });
        });
    });
}
process.env.NODE_ENV = 'production';
let buildPromise = Promise.resolve();
enableDlls.forEach((item, i) => {
    buildPromise = buildPromise.then(() => {
        let prevDlls = [];
        if (i > 0) {
            prevDlls = enableDlls.slice(0, i);
        }
        let buildPro = createDll({
            entry: {
                [item.name]: item.modules,
            },
            name: item.name,
            prevDlls,
            env: process.env.NODE_ENV,
        });
        if (config.dll.distEnv) {
            const devPrevDlls = [...prevDlls];
            buildPro = buildPro
                .then(() => {
                    process.env.NODE_ENV = 'development';
                    return createDll({
                        entry: {
                            [item.name]: item.modules,
                        },
                        name: item.name,
                        prevDlls: devPrevDlls,
                        env: process.env.NODE_ENV,
                    });
                })
                .then(() => {
                    process.env.NODE_ENV = 'production';
                });
        }
        return buildPro;
    });
});
if (enableDlls.length) {
    const dirPath = resolveCurrent(`${dllConfig.assetsDirectoryName}/librarysDll`);
    rm(dirPath, () => {});
}
// console.log(enableDlls);
