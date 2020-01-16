// 一个中间件栈，对任何指向 /sign 的 HTTP 请求打印出相关信息
var fs = require('fs')
var express = require('express');
var app = express()
app.use('/sign', function(req, res, next) {
  console.log('中间件执行了')
  next();
})

module.exports = app