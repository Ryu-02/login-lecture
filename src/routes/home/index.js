"use strict"; // strict 모드로 작성한다. // "use strict";는 자바스크립트의 엄격한 모드로, 코드의 오류를 더 엄격하게 검사하고, 일부 기능을 제한한다.

const express = require("express");
const router = express.Router(); // express의 Router를 불러온다.

const ctrl = require("./home.ctrl"); // home.ctrl.js 파일을 불러온다.

router.get("/", ctrl.hello);

router.get("/login", ctrl.login);

module.exports = router; // 라우터를 내보낸다.
