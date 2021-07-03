const downloadTemplate = require('./downloadTemplate');
const config = require('../config');
const path = require('path');
const fs = require('fs');
const rm = require('rimraf');
var copydir = require('copy-dir');

module.exports = function getRemoteDlls() {
    const dllRemoteProject = 'dllRemoteProject';
    return new Promise((resolve, reject) => {
        rm(path.resolve(dllRemoteProject), (err) => {
            if (err) {
                console.log(err);
            }
            resolve();
        });
    })
        .then(() => {
            return downloadTemplate({
                projectName: dllRemoteProject,
                templateAddress: config.envs.DLL_REMOTE,
                branch: config.envs.DLL_REMOTE_BRANCH || 'dev',
            });
        })
        .then(() => {
            const dllRemoteProjectDll = path.resolve('dllRemoteProject/dllStatic');
            if (fs.existsSync(dllRemoteProjectDll)) {
                return new Promise((resolve, reject) => {
                    rm(path.resolve('dllStatic'), (err) => {
                        if (!err) {
                            copydir(dllRemoteProjectDll, path.resolve('dllStatic'), function(err) {
                                if (err) throw err;
                                resolve();
                            });
                            return;
                        }
                        resolve();
                    });
                });
            }
        });
};
