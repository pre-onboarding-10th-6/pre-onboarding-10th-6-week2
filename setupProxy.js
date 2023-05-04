const { createProxyMiddleware } = require('http-proxy-middleware')
const url = 'https://api.clinicaltrialskorea.com/'

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: url,
      changeOrigin: true
    })
  )
}
