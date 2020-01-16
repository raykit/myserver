var express = require('express');
var router = express.Router();

var mock = require('../../mocks/goods-manage-goods-list.json')

/* GET home page. */
router.post('/goods-manage-goods-list', function(req, res, next) {
  console.log('前端传的params', req.body)
  res.json(mock);
});

module.exports = router;