const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = class HtmlWebpackTopBannerPlugin {
    constructor(opt = {}) {
        this.banner = `<!--${opt.banner}-->\n`;
    }
    apply(compiler) {
        compiler.hooks.compilation.tap('HtmlWebpackTopBannerPlugin', (compilation, callback) => {
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
                'HtmlWebpackTopBannerPlugin', // <-- Set a meaningful name here for stacktraces
                (data, cb) => {
                    // Manipulate the content
                    data.html = this.banner + data.html;
                    // Tell webpack to move on
                    cb(null, data);
                },
            );
        });
    }
};
