const express = require("express");
const test = require("../routes/test.js");
const users = require("../routes/user");

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded());
  app.use("/", test);
  app.use("/user", users);
};
