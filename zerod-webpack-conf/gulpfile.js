const gulp = require('gulp')
const GulpSSH = require('gulp-ssh')
// 需要上传到服务器的路径
const remotePath = '/var/www/html/exponent'
const config = {
  ssh: { // 正式
    host: "119.29.101.184",
    port: 46707,
    username: 'root',
    password: 'MlSz@20181011'
  }, 
  remotePath: remotePath,
  commands: [
    // 删除现有文件
    `rm -rf ${remotePath}`
  ]
}
let gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config.ssh
})
/**
 *上传前先删除服务器上现有文件...
*/
gulp.task('execSSH', () => {
  console.log('删除服务器上现有文件...')
  return gulpSSH.shell(config.commands, { filePath: 'commands.log' }).
      pipe(gulp.dest('logs'))
})
/**
 * 上传文件到服务器
 */
gulp.task('default', ['execSSH'], () => {
  console.log('2s后开始上传文件到服务器...')
  setTimeout(() => {
    return gulp.src(['./exponent/**']).
        pipe(gulpSSH.dest(config.remotePath))
  }, 2000)
})