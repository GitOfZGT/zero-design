const fs = require('fs');
const path = require('path');
const { resolveCurrent } = require('zerod-webpack-conf/build/babelReactCssModule');
const validateOptions = require('schema-utils');

// schema for options object
const schema = {
    type: 'object',
    properties: {
        /**
         * libraryName,styleDirectory,moduleFilter
         */
        dllLibrarys: {
            type: 'array',
        },
    },
};

module.exports = class ExtractLibraryInitialPlugin {
    constructor(options = {}) {
        validateOptions(schema, options, 'ExtractLibraryInitialPlugin');
        this.options = options;
    }
    apply(compiler) {
        const dllLibrarys = this.options.dllLibrarys || [];
        const targetDir = resolveCurrent('dllLibrarysManifes');
        const curentDll = {};
        dllLibrarys.forEach((lib) => {
            const manifesPath = path.join(targetDir, `${lib.libraryName}-modules-manifes.json`);
            curentDll[lib.libraryName] = { manifesPath };
            if (fs.existsSync(manifesPath)) {
                curentDll[lib.libraryName].manifes = fs.readFileSync(manifesPath).toString();
            }
        });

        // Tap into compilation hook which gives compilation as argument to the callback function
        compiler.hooks.compilation.tap('ExtractLibraryInitialPlugin', (compilation) => {
            // compilation.hooks.buildModule.tap('ExtractLibraryInitialPlugin', (modules,b,c) => {

            // });
            compilation.hooks.finishModules.tapAsync('ExtractLibraryInitialPlugin', (modules, callback) => {
                dllLibrarys.forEach((lib) => {
                    const _modules = [];
                    modules.forEach((m) => {
                        if (
                            new RegExp(
                                `[\\/\\\\]node_modules[\\/\\\\]${lib.libraryName}[\\/\\\\][\\w\\-\\.\\/\\\\]+`,
                            ).test(m.resource)
                        ) {
                            _modules.push(m.resource.replace(new RegExp(`.+(?=${lib.libraryName}[\\/\\\\])`, 'g'), ''));
                        } else if (
                            new RegExp(
                                `[\\/\\\\]node_modules[\\/\\\\]_${lib.libraryName}[@\\w\\.]+[\\/\\\\][\\w\\-\\.\\/\\\\]+`,
                            ).test(m.resource)
                        ) {
                            //cnpm  install packages

                            _modules.push(
                                m.resource.replace(new RegExp(`.+(?=_${lib.libraryName}[@\\w\\.]+[\\/\\\\])`, 'g'), ''),
                            );
                        }
                    });
                    if (_modules.length) {
                        const dllstring = curentDll[lib.libraryName].manifes;
                        const newStr = JSON.stringify(_modules, null, 4);
                        if (newStr !== dllstring) {
                            let manifes = _modules;
                            if (dllstring) {
                                manifes = Array.from(new Set([...manifes, ...JSON.parse(dllstring)]));
                            }
                            if (!fs.existsSync(targetDir)) {
                                fs.mkdirSync(targetDir);
                            }
                            //排序
                            manifes = manifes.sort((a, b) => {
                                const s1 = a.replace('\\', '').split('');
                                const s2 = b.replace('\\', '').split('');
                                let dif = 0;
                                for (let index = 0; index < s1.length; index++) {
                                    const v1 = s1[index];
                                    const v2 = s2[index];
                                    if (v2) {
                                        dif = v1.toUpperCase().charCodeAt() - v2.toUpperCase().charCodeAt();
                                    }
                                    if (dif !== 0) {
                                        break;
                                    }
                                }
                                return dif;
                            });
                            fs.writeFileSync(curentDll[lib.libraryName].manifesPath, JSON.stringify(manifes, null, 4));
                        }
                    }
                });

                callback();
            });
        });
    }
};
