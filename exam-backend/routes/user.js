const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcrypt");

const { User, validate } = require("../models/User");

// User registration
router.post("/register", async (req, res) => {
  const { error } = validate(req);
  if (error) return res.status(403).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(403).send(`${user.email} is already registed`);

  user = new User(_.pick(req.body, ["name", "email", "password", "phone"]));
  const salt = bcrypt.genSaltSync(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  res.send(_.pick(user, ["name", "email"]));
});

module.exports = router;
