//express 모듈 불러오기
const express = require("express");

//express 사용
const app = express();

const { swaggerUi, specs } = require('./swagger/swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

//Express 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장 body-parser 연결
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


/**
 * 파라미터 변수 뜻
 * req : request 요청
 * res : response 응답
 */
 /**
  * @path {GET} http://localhost:3000/hello?name=홍길동
  * @description Query Params 요청 데이터 값이 있고 반환 값이 있는 GET Method
  */

  /**
   * @swagger
   * paths:
   *  /hello?name={name}:
   *    get:
   *      summary: "유저에게 환영인사"
   *      description: "서버에 데이터로 이름을 보내고 Get방식으로 요청"
   *      tags: [User]
   *      parameters:
   *      - in: query
   *        name: name
   *        required: true
   *        description: 유저 이름
   *        schema:
   *          type: string
   *      responses:
   *        '200':
   *           description: 유저에게 환영인사
   *           content:
   *             text/plain:
   *               schema:
   *                 type: string
   *                 example: 홍길동님. 안녕하세요.
   */

 app.get("/hello", (req, res) => {

     const name = req.query.name

     res.send(name + '님. 안녕하세요.')
 })

 // http listen port 생성 서버 실행
 app.listen(3000);
