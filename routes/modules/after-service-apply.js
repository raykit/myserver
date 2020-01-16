var express = require('express');
var router = express.Router();

var mock = require('../../mocks/after-service-apply.json')

/* GET home page. */
router.post('/after-service-apply', function(req, res, next) {
  console.log('前端传的params', req.body)
  res.json(mock);
});

module.exports = router;