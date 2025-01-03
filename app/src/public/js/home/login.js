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

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생"));
    });
}
