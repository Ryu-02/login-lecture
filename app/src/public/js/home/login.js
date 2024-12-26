"use strict";

const loginForm = document.querySelector("#login-form");
const id = document.querySelector("#id");
const pwd = document.querySelector("#pwd");
const loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", login);

function login(event) {
  event.preventDefault();
  const req = {
    id: id.value,
    pwd: pwd.value,
  };
  console.log(req);

  loginAdmin(req);
}

function loginAdmin(req) {
  if (req.id === "admin") {
    console.log("로그인 성공");
  }
}
