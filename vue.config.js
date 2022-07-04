module.exports = {
  devServer: {
    port: 8081
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/survey-frontend/',
}