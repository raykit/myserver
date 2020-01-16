var fs = require('fs')
var os = require('os')
var express = require('express');
var app = express()

app.use('/users', function (req, res, next) {
  fs.readFile('./data/signData.json', 'utf-8', (err, result) => {
   if (err) throw err
   console.log('读取的文件123', result)
   // console.log('777777777')
   // res.json(result)
   next()
  })
  res.json('1231231312')
})
module.exports = app
