var express = require('express');
var router = express.Router();

var users = JSON.stringify(require('../../db/users.json'))

function userCheck (obj, res) {
  var userObj = JSON.parse(users).find((item) => item.user === obj.username)
  if (!userObj) {
    res.json({
      error_code: 4004,
      msg: '用户不存在'
    });
  } else {
    if (userObj.password !== obj.pwd) {
      res.json({
        code: 4000,
        msg: '密码错误'
      });
    } else {
      var token = '测试token测试测试'
      res.json({
        code: 0,
        msg: '登录成功',
        userInfo: {
          userObj,
          token: token
        }
      });
    }
  }
}

/* GET home page. */
router.post('/sign-in', function(req, res, next) {
  console.log('前端传的params', req.body)
  userCheck(req.body, res)
//res.json(mock);
});

module.exports = router;