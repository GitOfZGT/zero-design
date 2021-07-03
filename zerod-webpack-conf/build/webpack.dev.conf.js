/* eslint-disable no-mixed-spaces-and-tabs */
const getRemoteDlls = require('./getRemoteDlls');
const { devWebpackBuild, getDevWebpackConfig } = require('./build.dev');

module.exports = getRemoteDlls().then(() => devWebpackBuild(getDevWebpackConfig()));
