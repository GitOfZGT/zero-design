const webpack=require('webpack')
const chalk = require('chalk')
const slog = require('single-line-log').stdout;
const  compilerProgress=function(str){
    return new webpack.ProgressPlugin((percent, msg, addInfo) => {
        percent = Math.floor(percent * 100);
        if (percent === 100) {
          slog.clear();
        } else {
          slog(`${chalk.cyan(`--${str}--`)}${percent}%`);
        }
      })
}
module.exports=compilerProgress;