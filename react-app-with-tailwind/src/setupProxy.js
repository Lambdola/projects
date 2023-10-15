const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://trizent-autos-server.vercel.app/',
      changeOrigin: true,
    })
  );
}