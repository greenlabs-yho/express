// router 를 분리할 때 router 에 파라미터를 받는 방식으로 구성하여 부가정보를 전달받는 방식으로 구성할 수 있다.
module.exports = (express) => {
    const router = express.Router();
    const controller = require('./controller')

    // url 과 controller 구현부 매핑
    router.get('/topic', controller.getTopicList)

    return router;
}