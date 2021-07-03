const path = require('path');
const fs = require('fs');
const rm = require('rimraf');
const webpack = require('webpack');
const config = require('zerod-webpack-conf/config');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const progress = require('zerod-webpack-conf/build/compiler-progress');
const { resolveCurrent } = require('zerod-webpack-conf/build/babelReactCssModule');
const { dllConfig } = require('./webpack.dll_utils');
const utils = require('./utils');
const styleLoaders = utils.styleLoaders({
    sourceMap: false,
    extract: true,
    usePostCSS: true,
});
/**
 * libraryName,libraryDirectory,styleDirectory,moduleFilter
 */
const dllLibrarys = Array.isArray(config.dll.dllLibrarys) ? config.dll.dllLibrarys : [];
const entry = {};
dllLibrarys.forEach((lib) => {
    let modules = [];
    const manifespath = resolveCurrent(`dllLibrarysManifes/${lib.libraryName}-modules-manifes.json`);
    if (fs.existsSync(manifespath)) {
        const manifesstring = fs.readFileSync(manifespath).toString();
        modulesList = JSON.parse(manifesstring);
        modules = modulesList
            .filter((name) => {
                return new RegExp(`${lib.styleDirectory}[\\/\\\\]index.js$`).test(name);
            })
            .map((name) => {
                return path.join(__dirname, '../../', name);
            });
    }
    if (modules.length) {
        entry[lib.libraryName] = modules;
    }
});

const webpackConfig = {
    mode: 'production',
    entry,
    output: {
        path: resolveCurrent(`${dllConfig.assetsDirectoryName}/librarysDll/style`),
        filename: '[name].dll_style.[hash].js',
        libraryTarget: 'var',
        library: 'dll_style_[hash]',
    },
    optimization: {
        minimizer: [
            new OptimizeCSSPlugin({
                cssProcessorOptions: { safe: true },
                canPrint: true,
            }),
        ],
    },
    module: {
        rules: [...styleLoaders[0]],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':
                process.env.NODE_ENV === 'production'
                    ? require('zerod-webpack-conf/config/prod.env')
                    : require('zerod-webpack-conf/config/dev.env'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:12].css',
            ignoreOrder: true,
        }),
    ],
};
function buildStyle() {
    if (Object.keys(entry).length) {
        rm(resolveCurrent(`${dllConfig.assetsDirectoryName}/librarysDll/style`), (err) => {
            if (err) {
                throw err;
            }
            webpackConfig.plugins.push(progress('compiling for dll-style'));
            webpack(webpackConfig, (err, stats) => {
                if (err) {
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
                rm(resolveCurrent(`${dllConfig.assetsDirectoryName}/librarysDll/style/*.dll_style.*.js`), (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
            });
        });
    }
}
module.exports = buildStyle;
