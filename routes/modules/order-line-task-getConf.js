var express = require('express');
var router = express.Router();

var mock = require('../../mocks/conf.json')

/* GET home page. */
router.post('/warehouse/sorting/pickMenuList', function(req, res, next) {
  res.json(mock)
});

module.exports = router;