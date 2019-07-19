const express = require("express");
const users = require("../model/user");

const router = express.Router();

router.get("/add-users", (req, res) => {
  res.send(`<h1>Add User</h1>
  <form action='/user' method=POST>
    <label>Name: <input type='text' name='name' /></label>
    <label>Age: <input type='text' name='age' /></label>
    <input type=submit />
  </form>`);
});

router.post("/user", (req, res) => {
  users[req.body.name.toLowerCase()] = req.body;

  console.log(users);

  res.redirect("/users");
});

router.get("/users", (req, res, next) => {
  res.setHeader("Content-type", "application/json");
  res.send(JSON.stringify(users));
});

module.exports = router;
