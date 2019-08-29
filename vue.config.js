const webpackPlugins = []

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/components/assets/themes/tokens.scss";'
      },
    }
  }
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('vue')
  //     .use('vue-svg-inline-loader')
  //     .loader('vue-svg-inline-loader')
  // }
}
