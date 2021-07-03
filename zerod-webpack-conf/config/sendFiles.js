const path = require('path');
const fs = require('fs');
const lodash = require('lodash');
const merge = lodash.mergeWith;
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}
function resolveCurrent(dir) {
    return path.join(__dirname, '../../../', dir);
}
function resolveNode_modules(dir) {
    return path.join(__dirname, '../../', dir);
}

function mergeFiles(srcname, distname, addConf) {
    let src = srcname;
    let dist = distname ? distname : srcname;
    const baseConf = require(resolve(src));
    typeof addConf == 'function' && addConf(baseConf);
    let newConfString = '{}';
    if (fs.existsSync(resolveCurrent(dist))) {
        const esConf = require(resolveCurrent(dist));
        const newConf = merge(baseConf, esConf);
        newConfString = JSON.stringify(newConf, null, 4);
    } else {
        newConfString = JSON.stringify(baseConf, null, 4);
    }
    fs.writeFileSync(
        resolveCurrent(dist),
        `
    module.exports = ${newConfString}
    `,
    );
}

function copyFile(_src, _dst) {
    // 创建读取流
    let readable = fs.createReadStream(_src);
    // 创建写入流
    let writable = fs.createWriteStream(_dst);
    // 通过管道来传输流
    readable.pipe(writable);
}
module.exports = function(config) {
    //.eslintignore
    if (!fs.existsSync(resolveCurrent('.eslintignore'))) {
        copyFile(resolve('.eslintignore'), resolveCurrent('.eslintignore'));
    }
    //.eslintrc.js
    mergeFiles('.eslintrc.js');

    //.postcssrc.js
    mergeFiles('.postcssrc.' + config.platform + '.js', '.postcssrc.js');
    //.prettierrc.js
    mergeFiles('.prettierrc.js');
    //babel.config.js

    mergeFiles('babel.config.js', '', function(conf) {
        if (config.platform !== 'simple') {
            conf.plugins.splice(2, 0, [
                'import',
                {
                    libraryName: config.platform == 'pc' ? 'antd' : 'antd-mobile',
                    style: true,
                    libraryDirectory: 'es',
                },
                config.platform == 'pc' ? 'antd' : 'antd-mobile',
            ]);
            if (config.platform == 'pc') {
                conf.plugins.splice(3, 0, [
                    'import',
                    {
                        libraryName: 'zerod',
                        style: false,
                        libraryDirectory: 'components',
                        camel2DashComponentName: false,
                    },
                    'zerod',
                ]);
            }
        }
    });

    //html
    if (!fs.existsSync(resolveCurrent('index.html'))) {
        copyFile(resolve(config.platform + '.html'), resolveCurrent('index.html'));
    }
    //.gitignore
    if (!fs.existsSync(resolveCurrent('.gitignore'))) {
        copyFile(resolve('.gitignore.text'), resolveCurrent('.gitignore'));
    }
    // README.md
    if (fs.existsSync(resolveCurrent('README.md'))) {
        var srcmd = fs.readFileSync(resolve('README.md'));
        var distmd = fs.readFileSync(resolveCurrent('README.md'));
        // console.log(distmd.toString());
        fs.writeFileSync(
            resolveCurrent('README.md'),
            `${distmd.toString().replace(srcmd.toString(), '')}${srcmd.toString()}`,
        );
    } else {
        copyFile(resolve('README.md'), resolveCurrent('README.md'));
    }
};
