// const path = require('path');
const config = require('../config');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const { resolveCurrent } = require('./babelReactCssModule');
const _package = require(resolveCurrent('package.json'));
const dllConfig = {
    assetsDirectoryName: 'dllStatic',
};
exports.dllConfig = dllConfig;
const defaultDlls =
    Array.isArray(config.dll.dllModules) && config.dll.dllModules.length
        ? config.dll.dllModules
        : [
              {
                  name: 'react',
                  modules: ['react', 'react-dom', 'react-router-dom'],
                  distEnv: true,
              },
              {
                  name: 'vendor',
                  modules: typeof _package.dependencies === 'object' ? Object.keys(_package.dependencies) : [],
              },
          ];

const dllExcludeRegs = config.dll.exclude.filter((item) => {
    return Object.prototype.toString.call(item) === '[object RegExp]';
});
const enableDlls = [];
defaultDlls.forEach((item, i) => {
    let modules = [];
    let prevModules = [];
    if (i > 0) {
        prevModules = enableDlls.reduce((total, curr) => {
            return [...total, ...curr.modules];
        }, []);
    }
    if (item.modules && (typeof item.modules === 'string' || (Array.isArray(item.modules) && item.modules.length))) {
        if (item.name === 'vendor') {
            modules = Array.from(
                new Set(
                    item.modules
                        .filter((key) => {
                            let has = false;
                            for (let index = 0; index < dllExcludeRegs.length; index++) {
                                const reg = dllExcludeRegs[index];
                                if (reg.test(key)) {
                                    has = true;
                                    break;
                                }
                            }
                            return !(config.dll.exclude.includes(key) || prevModules.includes(key) || has);
                        })
                        .concat(config.dll.include),
                ),
            );
        } else {
            modules = Array.from(new Set(item.modules));
        }
    }
    if (modules.length) {
        enableDlls.push({
            distEnv: item.distEnv,
            name: item.name,
            modules,
        });
    }
});

exports.enableDlls = enableDlls;
const defaultEnv = config.dll.usefulEnvName || process.env.NODE_ENV;
exports.getDllReference = function(enableDlls, env) {
    const plugins = [];
    if (!config.dll.disabled) {
        for (let index = enableDlls.length - 1; index >= 0; index--) {
            const currentDll = enableDlls[index];
            const manifestdir = resolveCurrent(`${dllConfig.assetsDirectoryName}/${currentDll.name}Dll`);
            let envname = env || defaultEnv;
            let jsonPath = path.join(manifestdir, `${currentDll.name}.manifest.${envname}.json`);
            let hasJson = fs.existsSync(jsonPath);
            if (hasJson) {
                plugins.push(
                    new webpack.DllReferencePlugin({
                        context: resolveCurrent(''),
                        manifest: require(jsonPath),
                    }),
                );
            }
        }
    }
    return plugins;
};
exports.getDllHtmlTags = function(enableDlls) {
    const tags = [];
    if (!config.dll.disabled) {
        for (let index = 0; index < enableDlls.length; index++) {
            const currentDll = enableDlls[index];
            const path = `${dllConfig.assetsDirectoryName}/${currentDll.name}Dll`;
            const manifestdir = resolveCurrent(path);
            let envname = defaultEnv;
            let hasJs = false;
            if (fs.existsSync(manifestdir)) {
                const dirfiles = fs.readdirSync(manifestdir);
                hasJs = dirfiles.some((f) => {
                    return new RegExp(`${currentDll.name}\\.dll\\.${envname}[\\w\\.]+\\.js$`).test(f);
                });
            }
            if (hasJs) {
                tags.push({
                    path,
                    glob: `${currentDll.name}.dll.${envname}.*.js`,
                    globPath: manifestdir,
                });
            }
        }
    }
    return tags;
};
