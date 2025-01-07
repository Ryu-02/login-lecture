"use strict"; // strict 모드로 작성한다. // "use strict";는 자바스크립트의 엄격한 모드로, 코드의 오류를 더 엄격하게 검사하고, 일부 기능을 제한한다.

const express = require("express"); // express라는 프레임워크 모듈을 불러온다.
const app = express(); // express를 app이라는 이름으로 실행한다.

// 라우팅
const home = require("./routes/home"); // home이라는 라우터를 불러온다.

app.set("views", "./views"); // views라는 폴더를 템플릿 엔진이 있는 폴더로 설정한다.
app.set("view engine", "ejs"); // 템플릿 엔진으로 ejs를 사용한다.

app.use("/", home); // 루트 경로에 대한 요청을 home 라우터로 처리한다.

module.exports = app; // app을 내보낸다.
