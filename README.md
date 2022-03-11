# express
https://expressjs.com/en/guide/routing.html
express 공식문서에 있는 Guide 에 대한 샘플코드의 재해석
---

## ` 폴더 구조`

소스 코드내의 주요 폴더 구조를 살펴보면 아래와 같다.

> * middleware  
>   - logger.js  
> * public  
>   -  static files  
> * service  
>   -  book  
>      + router.js  
>      + controller.js  
>   - member  
>      + router.js  
>      + controller.js  
> * app.js

service 폴더 내에 각 서비스 폴더를 구성하고 그 안에 각각 router, controller 파일을 구성하여  
서비스별로 코드가 한 폴더 내에 모일 수 있도록 구성한다.   

---
## ` Router 구성 방법`
1. router 관련 소스코드를 별도의 파일에 분리한 후 객체를 exports 만 해준다.  
    - service/book/router.js 와 같은 형태  
2. 분리시 함수형태로 구성하여 파라미터를 받아서 router 를 구성하여 return 하도록 한다.
    - service/member/router.js 와 같은 형태

---
## ` 사용자 정의 에러처리기가 정상동작 하지 않는 경우.`
1. next(err) 하기 전에 response 처리를 한 경우.
2. next(err) 를 여러번 호출한 경우


---
## ` 해당 프로젝트에 포함하지 않은 내용. `
1. Express API 의 재정의
    - http://expressjs.com/en/guide/overriding-express-api.html
    - Express 에서 기존 재공하는 메서드를 오버라이딩 할 수 있다.
    - Express 에서 기존 제공하는 getter로 정의된 프로퍼티는 재정의 할 수 있다.
2. Pub 와 같은 템플릿 엔진
    - Frontend 는 별도로 개발하므로 필요 없음.