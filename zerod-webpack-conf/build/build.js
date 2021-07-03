/* eslint-disable no-process-exit */
/* eslint-disable no-console */
require('./copy');

const { prodWepackBuild } = require('./build.prod');
const getRemoteDlls = require('./getRemoteDlls');
getRemoteDlls().then(() => {
    prodWepackBuild();
});
