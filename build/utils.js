const config = require('../config')[process.env.NODE_ENV]
const path = require('path')

exports.assetsPath = function(_path){
	return path.posix.join(config.assetsSubDirectory, _path)
}