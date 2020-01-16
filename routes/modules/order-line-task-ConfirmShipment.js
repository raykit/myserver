var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/warehouse/sorting/confirmShipment', function(req, res, next) {
  var data = {
    error_code: 0,
    data: {},
    message: '请求成功'
  }
  res.json(data);
});

module.exports = router;