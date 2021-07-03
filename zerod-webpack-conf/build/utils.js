'use strict';
const path = require('path');
const os = require('os');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc'); // dependent on utc plugin
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);
const config = require('../config');
const packageConfig = require('../package.json');
const { getCssLoader, getPostCssLoader, getCssLoaderRule, getLessLoaderOptions } = require('./getLoader');
const { resolveCurrent, babelReactCssModule } = require('./babelReactCssModule');
const { getSass } = require('@zougt/some-loader-utils');
exports.assetsPath = function (_path) {
    const assetsSubDirectory =
        process.env.NODE_ENV === 'production' ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory;

    return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function (options) {
    options = options || {};
    function generateLoaders(loader, loaderOptions) {
        const postcssLoader = getPostCssLoader(config.postCssLoaderOptions);
        const cssLoader = getCssLoader({
            modules: loader === 'sass',
        });
        const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader];

        if (loader) {
            let loaderObj = {
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap,
                }),
            };
            if (loader === 'less') {
                //less-loader v6.0.0 +
                loaderObj.options = { ...loaderObj.options, ...getLessLoaderOptions({}, config) };
            }
            loaders.push(loaderObj);
            if (loader === 'sass') {
                if (Array.isArray(config.multipleScopeVars) && config.multipleScopeVars.length) {
                    loaderObj.options.implementation = getSass({
                        // getMultipleScopeVars优先于 sassOptions.multipleScopeVars
                        getMultipleScopeVars: (sassOptions) => config.multipleScopeVars,
                        // 可选项
                        // implementation:less
                    });
                }
                const scssVarFiles = Array.isArray(config.scssVars)
                    ? config.scssVars.filter((path) => /\.(scss|sass)$/.test(path))
                    : [];
                if (scssVarFiles.length) {
                    loaders.push({
                        loader: 'sass-resources-loader',
                        options: {
                            // 多个文件时用数组的形式传入，单个文件时可以直接使用 path.resolve(__dirname, '../static/style/common.scss'
                            resources: scssVarFiles,
                        },
                    });
                }
            }
        }

        return loaders;
    }
    return {
        css: generateLoaders(),
        less: generateLoaders('less'),
        scss: generateLoaders('sass'),
    };
};

exports.styleLoaders = function (options) {
    const output = [];
    const loaders = exports.cssLoaders(options);

    for (const extension in loaders) {
        const loader = loaders[extension];
        let opt = getCssLoaderRule({
            extract: options.extract,
            loader:
                extension === 'less'
                    ? [
                          ...loader,
                          {
                              loader: require.resolve('./lessDeleteScssLoader.js'),
                          },
                      ]
                    : loader,
            extension,
        });
        let otherRules = null;
        if (extension === 'scss') {
            if (config.scssRule === false) {
                continue;
            }
            otherRules = config.scssRule;
            if (typeof otherRules === 'function') {
                otherRules = otherRules(opt);
            }
            opt = { ...opt, ...(otherRules || {}) };
        } else if (extension === 'less') {
            if (config.lessRule === false) {
                continue;
            }
            otherRules = config.lessRule;
            if (typeof otherRules === 'function') {
                otherRules = otherRules(opt);
            }
            opt = { ...opt, ...(otherRules || {}) };
        }
        output.push(opt);
    }
    // if (Array.isArray(config.scssVars) && config.scssVars.length) {
    //     output.push({
    //         test: /\.scss$/,
    //         issuer: /\.less$/,
    //         use: {
    //             loader: require.resolve('./sassVarsToLess'),
    //         },
    //     });
    // }
    return [output];
};

exports.createNotifierCallback = () => {
    const notifier = require('node-notifier');

    return (severity, errors) => {
        if (severity !== 'error') return;

        const error = errors[0];
        const filename = error.file && error.file.split('!').pop();

        notifier.notify({
            title: packageConfig.name,
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname, '../config/logo.png'),
        });
    };
};

exports.getUrlLoaders = function () {
    return [
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: exports.assetsPath('img/[name].[hash:7].[ext]'),
                ...(config.urlLoaderOptions || {}),
            },
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: exports.assetsPath('media/[name].[hash:7].[ext]'),
                ...(config.urlLoaderOptions || {}),
            },
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: exports.assetsPath('fonts/[name].[hash:7].[ext]'),
                ...(config.urlLoaderOptions || {}),
            },
        },
    ];
};
const babelLoaderOptions = config.babelLoaderOptions || {};
exports.getBabelLoader = function () {
    return config['babel-includes'] === false
        ? []
        : [
              {
                  test: /\.(jsx?|tsx?)$/,
                  use: [
                      'thread-loader',
                      {
                          loader: 'babel-loader',
                          options: {
                              cacheDirectory: true,
                              ...babelLoaderOptions,
                              plugins: [babelReactCssModule, ...(babelLoaderOptions.plugins || [])],
                          },
                      },
                  ],
                  exclude: resolveCurrent('static'),
                  include: (Array.isArray(config['babel-includes']) ? config['babel-includes'] : []).concat(
                      config.copyFolderName ? [resolveCurrent(config.copyFolderName)] : [],
                  ),
              },
          ];
};

exports.buildBannerInfo = {
    version: config.envs.version || config.version,
    // buildDir: path.resolve(),
    // hostname: os.hostname(),
    platform: os.platform(),
    // osType: os.type(),
    // osHomedir: os.homedir(),
    buildTime: dayjs().tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss'),
};
exports.getBuildBanner = function () {
    return JSON.stringify(exports.buildBannerInfo, null, 4);
};
exports.getEnvs = function ({ outputPath }) {
    // 注入process.env
    const webProcessEnv =
        process.env.NODE_ENV === 'production' ? require('../config/prod.env') : require('../config/dev.env');
    webProcessEnv.BASE_NAME = `'${outputPath}'`;
    webProcessEnv.basepath = `'${outputPath}'`;
    Object.keys(config.envs).forEach((key) => {
        webProcessEnv[key] = `'${config.envs[key]}'`;
    });
    return webProcessEnv;
};

const TerserPlugin = require('terser-webpack-plugin');
exports.getTerserPlugin = function (option = {}) {
    return new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false, // Must be set to true if using source-maps in production
        extractComments: false,
        ...option,
        terserOptions: {
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            ecma: undefined,
            parse: {},
            compress: {},
            mangle: true, // Note `mangle.properties` is `false` by default.
            module: false,
            output: {
                preamble: `/*${exports.getBuildBanner()}*/`,
                comments: false,
            },
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_classnames: undefined,
            keep_fnames: false,
            safari10: false,
            ...(option.terserOptions || {}),
        },
    });
};
