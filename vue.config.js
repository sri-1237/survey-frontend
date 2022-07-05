module.exports = {
  devServer: {
    proxy: 'http://localhost:8080',
    port: 8081
  },
  // publicPath: process.env.NODE_ENV === 'development' ? '/' : '/survey-frontend/',
}