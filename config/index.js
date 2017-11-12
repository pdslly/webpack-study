exports.production = {
	publicPath: '/',
	assetsSubDirectory: 'static',
	assetsRoot: '../dist',
	assetsPublicPath: '/',
	proxyTable: {

	},
	env: {
		NODE_ENV: 'production'
	}
}

exports.development = {
	port: 8080,
	publicPath: '/',
	assetsSubDirectory: 'static',
	assetsPublicPath: '/',
	proxyTable: {

	},
	env: {
		NODE_ENV: 'development'
	}
}