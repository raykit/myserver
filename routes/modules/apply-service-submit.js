var express = require('express');
var router = express.Router();


/* GET home page. */
router.post('/apply-service-submit', function(req, res, next) {
  console.log('前端传的params', req.body)
  res.json({
    error_code: 0,
    msg: '提交成功'
  });
});

module.exports = router;