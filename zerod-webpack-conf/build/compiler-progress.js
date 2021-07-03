/* eslint-disable no-param-reassign */
const chalk = require('chalk');
const webpack = require('webpack');
const ora = require('ora');
// const SimpleProgressPlugin = require('progress-bar-webpack-plugin');
// const compilerProgress = function(str) {
//     return new SimpleProgressPlugin({
//         format: [':bar', chalk.cyan(str), chalk.cyan(':percent'), chalk.cyan(':msg')].join(' '),
//         clear: true,
//         width: 36,
//         total: 100,
//         complete: chalk.cyan('>'),
//         incomplete: '',
//         summary: false,
//     });
// };
let len = 36;
const compilerProgress = function(str) {
    const spinner = ora({ text: str, color: 'white' });
    return new webpack.ProgressPlugin((percent, msg, addInfo) => {
        percent = Math.floor(percent * 100);
        let complete = '';
        for (let index = 0; index < len * (percent / 100); index++) {
            complete += '>';
        }
        let incomplete = '';
        for (let index = 0; index < len * ((100 - percent) / 100); index++) {
            incomplete += '-';
        }

        if (percent === 0) {
            spinner.start();
        } else if (percent === 100) {
            spinner.stop();
        } else {
            spinner.text = `${chalk.yellow(complete)}${incomplete} ${chalk.yellow(
                `${str} ${percent}% ${msg}`,
            )} ${addInfo}`;
        }
    });
};
module.exports = compilerProgress;
