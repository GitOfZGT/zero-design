const webpack = require('webpack');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const path = require('path');
const fs = require('fs');
const config = require('../config');
const { resolveCurrent, resolve } = require('./babelReactCssModule');
const { getDllReference, getDllHtmlTags, enableDlls, dllConfig } = require('./webpack.dll_utils');
const dllLibrarys = Array.isArray(config.dll.dllLibrarys) ? config.dll.dllLibrarys : [];
const env = config.dll.usefulEnvName || process.env.NODE_ENV;
exports.getDllLibReferencePlugins = function() {
    let plugins = [];
    if (!config.dll.disabled) {
        dllLibrarys.forEach((lib) => {
            const manifespath = resolveCurrent(
                `${dllConfig.assetsDirectoryName}/librarysDll/${lib.libraryName}.manifest.${env}.json`,
            );
            if (fs.existsSync(manifespath)) {
                plugins.push(
                    new webpack.DllReferencePlugin({
                        context: resolveCurrent(''),
                        manifest: require(manifespath),
                    }),
                );
            }
        });
    }
    plugins = plugins.concat(getDllReference(enableDlls));
    return plugins;
};

exports.getDllHtmlWebpackTagsPlugins = function() {
    const plugins = [];
    const tags = getDllHtmlTags(enableDlls);
    const dirPath = resolveCurrent(`${dllConfig.assetsDirectoryName}/librarysDll`);
    const styleDirPath = path.join(dirPath, 'style');
    let babelConfig = '';
    const babelConfigPath = resolveCurrent('babel.config.js');
    if (fs.existsSync(babelConfigPath)) {
        babelConfig = fs.readFileSync(babelConfigPath).toString();
    }
    const repaceBabelConfig = (lib, val) => {
        if (babelConfig) {
            const importLibMatch = babelConfig.match(
                new RegExp(`\\[\\s*['"]import['"][,:\\w\\{\\}'"\\s\\-]+['"]${lib.libraryName}['"][\\s,]*\\]`, 'g'),
            );
            if (importLibMatch) {
                const stylePoto = importLibMatch[0].replace(/style\s*:\s*["'\w]+,?/g, `style: ${val},`);
                fs.writeFileSync(babelConfigPath, babelConfig.replace(importLibMatch[0], stylePoto));
            }
        }
    };
    if (fs.existsSync(dirPath) && !config.dll.disabled) {
        const files = fs.readdirSync(dirPath);
        let styles = [];
        if (fs.existsSync(styleDirPath)) {
            styles = fs.readdirSync(styleDirPath);
        }
        dllLibrarys.forEach((lib) => {
            if (
                files.some((pathname) => {
                    return pathname.includes(`${lib.libraryName}.dll`);
                })
            ) {
                tags.push({
                    path: `${dllConfig.assetsDirectoryName}/librarysDll`,
                    glob: `${lib.libraryName}.dll.${env}.*.js`,
                    globPath: dirPath,
                });
            }

            // fs.existsSync(resolveCurrent(`dllLibrarysManifes/${lib.libraryName}-modules-manifes.json`))
            if (
                styles.some((pathname) => {
                    return pathname.includes(`${lib.libraryName}`);
                })
            ) {
                tags.push({
                    path: `${dllConfig.assetsDirectoryName}/librarysDll/style`,
                    glob: `${lib.libraryName}.*.css`,
                    globPath: styleDirPath,
                });
                repaceBabelConfig(lib, 'false');
            } else {
                repaceBabelConfig(lib, 'true');
            }
        });
    } else {
        dllLibrarys.forEach((lib) => {
            repaceBabelConfig(lib, 'true');
        });
    }

    if (tags.length) {
        plugins.push(
            new HtmlWebpackTagsPlugin({
                tags, // 添加的资源相对html的路径
                append: false, // false 在其他资源的之前添加 true 在其他资源之后添加
            }),
        );
    }
    if (config.pace) {
        plugins.push(
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
        );
    }
    return plugins;
};
