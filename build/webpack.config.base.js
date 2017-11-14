const path = require('path')
const config = require('../config')[process.env.NODE_ENV]
const utils = require('./utils')

function resolve(_path){
	return path.resolve(__dirname, '..', _path)
}

module.exports = {
	entry: {
		main: resolve('src/main')
	},
	output: {
		publicPath: config.publicPath
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
		alias: {
			'@': resolve('src') 
		}
	},
	module: {
		rules: [
			{
                test: /\.ts$/,
                loader: 'ts-loader',
                include: resolve('src')
            },{
                test: /\.jsx$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },{
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },{
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
	}
}