var fs = require("fs");
var stat = fs.stat;
var config = require("../config");
/*
05
 * 复制目录中的所有文件包括子目录
06
 * @param{ String } 需要复制的目录
07
 * @param{ String } 复制到指定的目录
08
 */
var copy = function(src, dst) {
	// 读取目录中的所有文件/目录
	fs.readdir(src, function(err, paths) {
		if (err) {
			throw err;
		}

		paths.forEach(function(path) {
			var _src = src + "/" + path;
			var _dst = dst + "/" + path;
			var readable = null;
			var writable = null;

			stat(_src, function(err, st) {
				if (err) {
					throw err;
				}

				// 判断是否为文件
				if (st.isFile()) {
					// 创建读取流
					readable = fs.createReadStream(_src);
					// 创建写入流
					writable = fs.createWriteStream(_dst);
					// 通过管道来传输流
					readable.pipe(writable);
				}
				// 如果是目录则递归调用自身
				else if (st.isDirectory()) {
					exists(_src, _dst, copy);
				}
			});
		});
	});
};
// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
var exists = function(src, dst, callback) {
	fs.exists(dst, function(exists) {
		// 已存在
		if (exists) {
			callback(src, dst);
		}
		// 不存在
		else {
			fs.mkdir(dst, function() {
				callback(src, dst);
			});
		}
	});
};
const copyFrom = "./share-code";
// 复制目录
var myCopy = function() {
	if (!fs.existsSync(copyFrom)) {
		return;
	}
	exists(copyFrom, "./node_modules/" + config.copyName, copy);
};
if (config.copyName) {
	myCopy();
	var args = process.argv.splice(2);
	if (args.includes("watchChange")) {
		var chokidar = require("chokidar");
		chokidar.watch(copyFrom).on("change", myCopy);
	}
}
module.exports = myCopy;
