const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

const config = {
    platform: 'pc', //"pc | mobile"
    pace: true,
    'ant-icons': true,
    //入口js
    entry: {
        app: ['@babel/polyfill', resolve('src/main.js')],
    },
    //babel-loader 要包含的文件夹是哪些
    'babel-includes': [],
    //微信页面开发授权域名验证的文件，如： path.resolve(__dirname, '../MP_verify_P7fns4NGi17lbM0R.txt')
    MP_verify: '',
    favicon: resolve('src/assets/images/logo.png'),
    //scss变量提升
    scssVars: [resolve('node_modules/zerod/ant-theme-vars.scss')],
    dll: {
        //除了package.json的dependencies，还需包含
        include: [],
        //打包dll时从package.json的dependencies中不包含
        exclude: [],
    },
    /**增加加载器 */
    // loaders: [
    // 	{ test: /\.xml$/, loader: 'xml-loader' }
    // ],
    /** copy-webpack-plugin配置*/
    // CopyWebpackOptions:[],
    /**html-webpack-include-assets-plugin插件的使用 */
    // HtmlIncludeAssets: [
    //     {
    //         assets: [{ path: 'static', glob: 'vendor.dll.*.js', globPath: resolve('static') }], // 添加的资源相对html的路径
    //         append: false, // false 在其他资源的之前添加 true 在其他资源之后添加
    //     },
    // ],
    //开发模式配置
    dev: {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        //反代理配置
        proxyTable: {
            '/webapi/wechat-mp/*': {
                target: 'http://172.16.8.243:8902',
                secure: true,
                changeOrigin: false,
            },
            '/webapi/form/*': {
                target: 'http://172.16.8.20:11160',
                secure: true,
                changeOrigin: false,
            },
            '/webapi/task/*': {
                target: 'http://172.16.8.20:11150',
                secure: true,
                changeOrigin: false,
            },
            '/webapi/process/*': {
                target: 'http://172.16.8.20:11150',
                secure: true,
                changeOrigin: false,
            },
            '/webapi/*': {
                target: 'http://172.16.8.24:11140',
                secure: true,
                changeOrigin: false,
            },
            '/login': {
                target: 'http://172.16.8.24:11140',
                secure: true,
                changeOrigin: false,
            },
            '/logout': {
                target: 'http://172.16.8.24:11140',
                secure: true,
                changeOrigin: false,
            },
        },

        // Various Dev Server settings
        host: '0.0.0.0', // can be overwritten by process.env.HOST
        port: 33000, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: true,
        cssSourceMap: true,
    },
    //生产模式配置
    build: {
        // Template for index.html
        index: resolve('dist/index.html'),
        //打包的根目录
        assetsRoot: resolve('dist'),
        //静态文件目录
        assetsSubDirectory: 'static',
        //绝对路径
        assetsPublicPath: '/',
        //是否生成Source Maps
        productionSourceMap: false,
        //打包生成Gzip
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
    },
};

module.exports = config;
