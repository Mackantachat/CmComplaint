module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_PRODUCTION_PATH :
    process.env.VUE_APP_DEV_PATH,
    // publicPath: process.env.NODE_ENV === 'production' ? '/cmcomplaint' ,
    configureWebpack: {
        devtool: 'source-map'
    }
}