const registerModal = require("../model/registerModal");
const path = require("path");
const localStorage = require("local-storage");
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const registModal = require("../model/user");



function register(req, res) {
  res.render("register");
}
function list(req, res) {
  res.render("list");
}
function register_post(req, res) {
  const newUser = new registerModal({
    ...req.body,
  });
  newUser
    .save()
    .then((result) => {
      localStorage.set("id", result._id);
      res.redirect("/list");
    })
    .catch((err) => res.send(err));
}


module.exports = {
  register,
  list,
};
