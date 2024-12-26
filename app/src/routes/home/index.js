"use strict";

const express = require("express");
const router = express.Router();

const crtl = require("./home.ctrl");

router.get("/", crtl.home);

router.get("/login", crtl.login);

module.exports = router;
