// 기본 router 구성 형태
const router = require('express').Router();
const controller = require('./controller')
const auth = require('../../middleware/auth')

// url 과 controller 구현부 매핑
router.get('/keys', auth.ws_api_auth, controller.getSalesSlipKeys);

module.exports = router;