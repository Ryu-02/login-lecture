"use strict"; // strict 모드로 작성한다. // "use strict";는 자바스크립트의 엄격한 모드로, 코드의 오류를 더 엄격하게 검사하고, 일부 기능을 제한한다.

const users = {
  id: ["test1", "test2", "admin"],
  pwd: ["1234", "123234", "1111"],
};

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

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);

      if (users.pwd[idx] === pwd) {
        return res.json({
          success: true,
        });
      }
      return res.json({
        success: false,
        msg: "비밀번호가 틀렸습니다.",
      });
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하였습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
