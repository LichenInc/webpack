
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var path = require('path')
var config = require('../config')

var port = 8080
var app = express()
var base = config.build.basePath || ''

app.use('/' + base, express.static(path.resolve(__dirname, '../dist/', base)))

// app.use(proxyMiddleware('/(api|usagers)/**', { changeOrigin: true, target: '' }))

app.use(require('connect-history-api-fallback')())
// app.use(serveStatic(path.join(__dirname, 'dist')))
app.get('*', function(req, res) {
  res.redirect(path.join('/', base))
});

// var uri = 'http://localhost:' + port

var server = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  } else {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
  }
})
