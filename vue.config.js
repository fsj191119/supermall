module.export = {
	configureWebpack: {
    lintOnSave:false,
		resolve: {
			alias:{
				'assets':'@/assets',
				'components':'@/components',
				'network':'@/network',
				'router':'@/router',
				'store':'@/store',
				'views':'@/views'
			}
		}
	}
}
