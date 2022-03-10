// 기본 router 구성 형태
const express = require('express');
const router = express.Router();
const controller = require('./controller')

// 해당 router 용 middleware 등록
router.use((req, res, next) => {
    console.log('/book service 요청!!!')
    next();
})

// url 과 controller 구현부 매핑
router.get('', controller.getBookList)
router.get('/:id', controller.getBookById)

module.exports = router;