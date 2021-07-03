const download = require('download-git-repo');
module.exports = function downloadTemplate({ projectName, templateAddress, branch }) {
    return templateAddress
        ? new Promise((resolve, reject) => {
              download(
                  `direct:${templateAddress}#${branch}`,
                  projectName,
                  {
                      clone: true,
                  },
                  (err) => {
                      if (err) {
                          // throw err;
                          console.log(err);
                          reject();
                      } else {
                          resolve();
                      }
                  },
              );
          })
        : Promise.resolve();
};
