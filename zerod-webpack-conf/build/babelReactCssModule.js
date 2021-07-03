const path = require('path');
const config = require('../config');
exports.resolveCurrent = function(dir) {
    return path.join(path.resolve(), dir);
};
exports.resolve = function(dir) {
    return path.join(__dirname, '..', dir);
};
exports.resolveNode_modules = function(dir) {
    return path.join(__dirname, '../../', dir);
};
exports.generateScopedName =
    process.env.NODE_ENV === 'production' ? '[hash:base64:5]' : '[path][name]_[local]-[hash:base64:5]';
exports.babelReactCssModuleOption = {
    webpackHotModuleReloading: true,
    autoResolveMultipleImports: false,
    generateScopedName: exports.generateScopedName, //必须同css-loader的localIdentName
    context: exports.resolveCurrent(''), //必须同css-loader的context
    filetypes: { '.scss': { syntax: 'postcss-scss' } },
    ...(config.reactCssModulesOptions || {}),
};
exports.babelReactCssModule = ['@lohek/react-css-modules', exports.babelReactCssModuleOption];
