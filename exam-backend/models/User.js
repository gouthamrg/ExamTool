const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  phone: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  hash: {
    type: String,
  },
});

// Methods
userSchema.methods.generateAuthToken = () => {
  console.log(config.get("jwtPrivateKey"));
  return jwt.sign({ _id: this.id }, config.get("jwtPrivateKey"));
};

// user Model
const User = mongoose.model("User", userSchema);

// Validate the request body
const validate = (req) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phone: Joi.string().required(),
  });

  return schema.validate(req.body);
};

module.exports.User = User;
module.exports.userSchema = userSchema;
module.exports.validate = validate;
