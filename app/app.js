"use strict";

const PORT = 3000;

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => console.log("server start"));
