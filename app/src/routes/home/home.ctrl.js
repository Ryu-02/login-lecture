"use strict"; // strict 모드로 작성한다. // "use strict";는 자바스크립트의 엄격한 모드로, 코드의 오류를 더 엄격하게 검사하고, 일부 기능을 제한한다.

const login = (req, res) => {
  res.render("home/login");
};

const hello = (req, res) => {
  res.render("home/index");
};

module.exports = {
  hello,
  login,
};
