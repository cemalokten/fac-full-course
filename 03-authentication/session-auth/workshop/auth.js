const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const model = require("./database/model");

const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 600000,
  sameSite: "strict",
  signed: true,
};

function createUser(email, password, name) {
  return bcrypt.hash(password, 10).then((hashed) => model.createUser(email, hashed, name))
}

function saveUserSession(userObj) {
  const string = crypto.randomBytes(18).toString("base64")
  
  return model.createSession(string, {userObj});
}

module.exports = { COOKIE_OPTIONS, createUser, saveUserSession };
