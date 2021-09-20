module.exports = {
    pwa: {
      name: 'mLib',
      themeColor: '#3EA08B',
      appleMobileWebAppCapable: 'yes',
      workboxPluginMode: 'GenerateSW'
    },
    configureWebpack: {
      devServer: {
        historyApiFallback: true
      }
    },
    devServer: {
      port: 80
  }
}