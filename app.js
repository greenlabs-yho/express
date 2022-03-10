const path = require('path')

// express 프레임워크 추가
const express = require('express')
const app = express()
const port = 3000

// 모든 api 호출에 대하여 가장 먼저 실행되는 middleware 등록
const {consoleLogger} = require('./middleware/logger')
app.use(consoleLogger);

// public 폴더의 파일들을 /static 이하 url 을 통해 접근하도록 설정
app.use('/static', express.static(path.join(__dirname, 'public')));


// root url 에 get 메소드 route 정의
app.get('/', (req, res) => {
  res.send('Hello World!')
})


// /test 가 포함된 url 에 대하여 추가적인 middleware 등록
let transaction_id = 1;
app.use('/test*', (req, res, next) => {
    req.transaction_id = transaction_id;
    transaction_id++;
    next()
})

app.get('/test', (req, res) => {
    res.send(`get test transaction id is ${transaction_id}`);
})

app.post('/test', (req, res) => {
    res.send(`post test transaction id is ${transaction_id}`);
})

app.get('/test/sub-test', (req, res) => {
    res.send(`get sub test transaction id is ${transaction_id}`);
})

// chaining 으로 등록된 middleware 를 사용하는 샘플코드
// next('route') : 이후 등록된 모든 middleware 를 skip 하고 route 를 바로 실행함. 단 app.Method 명으로 선언한 것에 한함.
app.get('/chaining', (req, res, next) => {
    console.log('1. Request URL : ', req.originalUrl);

    if (req.query.group === 'green') next('route');  // app.use 안에 해당 내용을 정의하면 정상적으로 동작하지 않음.
    else next();
}, (req, res, next) => {
    console.log('2. Request Type : ', req.method)

    next();
});

app.get('/chaining', (req, res) => {
    res.send('chaining test code');
})

app.get('/error', (req, res) => {
    parseInt(eeeerrrrrorrrr);
    res.send('success???')
    next()
})


// 라우터를 이용하여 특정 서비스 레벨로 middleware 와 route 를 분리한다.
// 기본적인 라우터 구성 형태
const bookRouter = require('./service/book/router')
// router level 에 등록된 모듈을 /book url 에 매핑한다.
app.use('/book', bookRouter);


// 부가정보를 전달하여 라우팅 객체를 전달받는 형태
const memberRouter = require('./service/member/router')(express, {info1: "부가적인 정보", info2: "실행할때 사용될만한 정보들"})
app.use('/member', memberRouter);


// error 용 middleware 에서 next 가 필요없더라도 인수 개수를 맞춰줘야 error middleware 로 인식하므로 반드시 명시해야함.
// application stack 의 끝에 오류 처리를 둘 수 있도록 한다.
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('server error!!')
});

// 서버 구동 시작
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});