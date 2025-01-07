"use strict";

class UserStorage {
  static #users = {
    // #users는 UserStorage 클래스 내부에서만 접근할 수 있다.  # <= private 변수로 선언한다.
    id: ["test1", "test2", "admin"],
    pwd: ["1234", "123234", "1111"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, fields) => {
      if (users.hasOwnProperty(fields)) {
        newUsers[fields] = users[fields];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
