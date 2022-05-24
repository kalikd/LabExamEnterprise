const bcrypt = require("bcrypt");

const decryptPasswordMiddleWare = (req, res, move) => {
  bcrypt.hash(req.body.password, 5, (err, hash) => {
    if (!err) {
      req.body.password = hash;
      move();
    } else res.send(err);
  });
};

const checkRequiredFields = (req, res, move) => {
  console.log("in middle ware");
  if (!req.body.name || !req.body.password) {
    res.redirect("/list");
  } else move();
};

module.exports = { decryptPasswordMiddleWare, checkRequiredFields };
