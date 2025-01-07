"use strict"; // strict 모드로 작성한다. // "use strict";는 자바스크립트의 엄격한 모드로, 코드의 오류를 더 엄격하게 검사하고, 일부 기능을 제한한다.

const UserStorage = require("../../models/userStorages"); // UserStorage를 불러온다.

const output = {
  login: (req, res) => {
    res.render("home/login");
  },

  home: (req, res) => {
    res.render("home/index");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const pwd = req.body.pwd;

    const users = UserStorage.getUsers("id", "pwd");
    const response = {};

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);

      if (users.pwd[idx] === pwd) {
        response.success = true;
        return res.json(response);
      }
      response.success = false;
      return res.json(response);
    }
    response.success = false;
    response.msg = "존재하지 않는 아이디입니다.";
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
