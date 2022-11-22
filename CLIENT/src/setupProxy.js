const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(require('prerender-node').set('prerenderToken', 'OUFC43YQ2hPkkavBfmwx'));
  
};