// 여러가지 에러 처리방법에 대해 정리 
// 핵심은 동기, 비동기, Promise 에서 발생한 오류를 express 에서 인지하도록 구성하는 것.

// 사용자정의 에러 처리기 정상작동 하지 않는 경우.
// 1. next(err) 하기 전에 res.headersSent 처럼 

module.exports = (app) => {
    const fs = require('fs')

    // 에러 테스트용 API
    let errorValue = 0
    app.get('/error', (req, res, next) => {
        errorValue++;

        if (errorValue%2 === 0) {
            // throw 를 통해 사용자정의 오류를 발생시킬 수 있다.
            throw new Error('type 0 에러발생')
            res.send('success???')
        } else {
            let err = new Error('type 1 에러발생')
            // File IO 나 다른 비동기 작업으로 인해 에러가 전달된 경우 next 에 전달하여 에러처리를 할 수 있다. 
            next(err)
        }
    })

    // 에러 테스트용 API
    app.get('/new-error', [
        // 비동기 함수를 사용할 때 callback 함수에서 error 만 반환하는 경우
        // 콜백함수 부분에 next 를 사용하여 error 가 없으면 다음 핸들러를 호출하고
        // error 가 있으면 express 가 error 처리기로 전달한다.
        (req, res, next) => {
            fs.writeFile('./test/tmp.txt', "It's error test", next)
        }, 
        (req, res) => {
            res.send('OK');
        }
    ]);


    // 에러 테스트용 API
    app.get('/async-error', (req, res, next) => {
        setTimeout(() => {
            try {
                throw new Error('internal Callback Error!!')
            } catch (err) {
                // 비동기 함수의 callback 함수 안에서 발생한 에러의 경우 express 가 자동으로 처리해주지 못한다.
                // express는 동기 핸들러 코드내의 에러만 처리하기때문에 정상적인 에러처리가 안된다.
                // 에러처리가 필요한 경우 next 를 명시적으로 호출하도록 한다.
                next(err)
                //throw err
            }
        }, 1000)
    })


    // 에러 테스트용 API
    app.get('/promise-error', (req, res, next) => {
        // promise 의 모든 오류는 catch 핸들러에 집결되므로 next 를 바로 연결하여 처리하도록 할 수 있다.
        Promise.resolve().then(() => {
            throw new Error('promise error')
        }).catch(next)
    })

    
    // 에러 테스트용 API
    app.get('/pass-sync-error', (req, res, next) => {
        fs.readFile(
            './test/tmp.txt', 
            'utf-8', 
            // 비동기 callback data와 err 를 둘 다 받는 경우
            (err, data) => {
                // 데이터를 res 객체에 맡기고 next 함수에 err 를 담아 호출하면
                // 에러가 있으면 error처리기가 에러가 없으면 데이터 처리에 대하여
                // 다음 핸들러가 동기로 이후 작업을 처리할 수 있어서 이후 에러처리에 용이하다.
                res.locals.data = data
                next(err)
            })
    }, (req, res) => {
        // 동기로 읽은 파일 데이터에 대한 처리를 할 수 있다.
        res.locals.data = "파일 내용은 다음과 같습니다." + res.locals.data
        res.send(res.locals.data)
    })

}