var express = require('express');
var router = express.Router();

var mock = JSON.stringify(require('../../mocks/order-line-task-list.json'))

function returnObj (obj, len, page) {
  console.log('obj', obj.list.length)
  let arr = obj.list
  let a_len = arr.length
  let new_arr = []
  for (let i = 0; i < a_len; i += len) {
    new_arr.push(arr.slice(i, i+len))
  }
  obj.list = new_arr[page - 1]
  return obj
}

/* GET home page. */
router.post('/warehouse/sorting/list', function(req, res, next) {
  console.log('前端传的params', req.body)
  let strObj = mock
  let data = returnObj(JSON.parse(strObj), req.body.per_page, req.body.page)
  res.json(data)
});

module.exports = router;