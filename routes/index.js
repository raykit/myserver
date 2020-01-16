var homeRouter = require('./modules/home');
var usersRouter = require('./modules/users');
var goodsManageGoodsList = require('./modules/goods-manage-goods-list')
var communityOrderList = require('./modules/community-order-list')
var afterServiceApply = require('./modules/after-service-apply')
var applyServiceSubmit = require('./modules/apply-service-submit')
var signIn = require('./modules/sign-in')
var operateList = require('./modules/operate-list')
var orderLineTaskList = require('./modules/order-line-task-list')
var orderLineTaskConfirmShipment = require('./modules/order-line-task-ConfirmShipment')
var orderLineTaskGetConf = require('./modules/order-line-task-getConf')

module.exports = [
  homeRouter,
  usersRouter,
  goodsManageGoodsList,
  communityOrderList,
  afterServiceApply,
  applyServiceSubmit,
  signIn,
  operateList,
  orderLineTaskList,
  orderLineTaskConfirmShipment,
  orderLineTaskGetConf
]
