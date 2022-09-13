module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/notes-vuex/'
    : '/',
  assetsDir: '',
  productionSourceMap: false,
  filenameHashing: true
}
