'use strict';
const path = require('path');
const fs = require('fs');
const config = require('../config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { generateScopedName, babelReactCssModuleOption } = require('./babelReactCssModule');
const { interpolateName } = require('loader-utils');
const { getLess } = require('@zougt/some-loader-utils');
function normalizePath(file) {
    return path.sep === '\\' ? file.replace(/\\/g, '/') : file;
}
exports.getCssLoader = function (options = {}) {
    const modules = options.modules
        ? {
              localIdentContext: babelReactCssModuleOption.context,
              mode: 'local',
              localIdentName: generateScopedName,
              ...(typeof options.modules !== 'boolean' ? options.modules : {}),
          }
        : false;
    if (modules && Array.isArray(config.multipleScopeVars)) {
        //使用 getLocalIdent 自定义模块化名称 ， css-loader v4.0+
        modules.getLocalIdent = (loaderContext, localIdentName, localName, options) => {
            if (config.multipleScopeVars.some((item) => item.scopeName === localName)) {
                //localName 属于 multipleScopeVars 的不用模块化
                return localName;
            }
            const { context, hashPrefix } = options;
            const { resourcePath } = loaderContext;
            const request = normalizePath(path.relative(context, resourcePath));
            // eslint-disable-next-line no-param-reassign
            options.content = `${hashPrefix + request}\x00${localName}`;

            const inname = interpolateName(loaderContext, localIdentName, options);

            return inname.replace(/\\?\[local\\?]/gi, localName);
        };
    }
    return {
        loader: 'css-loader',
        options: {
            importLoaders: 2,
            ...options,
            modules,
        },
    };
};
exports.getPostCssLoader = function (options = {}) {
    return {
        loader: 'postcss-loader',
        options,
    };
};
exports.getCssLoaderRule = function (opt = {}) {
    const { extension, loader, extract, ...others } = opt;
    return {
        test: new RegExp('\\.' + extension + '$'),
        use: extract ? [MiniCssExtractPlugin.loader, ...loader] : ['thread-loader', 'style-loader', ...loader],
        ...others,
    };
};

exports.getLessLoaderOptions = function (opt = {}, config) {
    const defaultOptions = {
        lessOptions: { javascriptEnabled: true, ...(opt.lessOptions || {}) },
    };
    if (Array.isArray(config.multipleScopeVars) && config.multipleScopeVars.length) {
        defaultOptions.implementation = getLess({
            // getMultipleScopeVars优先于 lessOptions.multipleScopeVars
            getMultipleScopeVars: (lessOptions) => config.multipleScopeVars,
            // 可选项
            // implementation:less
        });
    }
    if (Array.isArray(config.scssVars) && config.scssVars.length) {
        defaultOptions.additionalData = function (content, loaderContext) {
            let lessVars = '';
            config.scssVars.forEach((path) => {
                if (/\.(scss|less)$/.test(path) && fs.existsSync(path)) {
                    loaderContext.addDependency(path);
                    const vars = fs.readFileSync(path);
                    lessVars += vars
                        .toString()
                        .replace(/\$/gi, '@')
                        .replace(/\!default/g, '');
                }
            });
            return content + lessVars;
        };
    }
    return { ...defaultOptions, ...opt };
};
