const http = require("http");
const express = require("express");
const app = express();

const users = {
  maria: {
    name: "Maria",
    age: "25"
  },
  jose: {
    name: "Jose",
    age: "31"
  }
};

app.use("/users", (req, res, next) => {
  res.setHeader("Content-type", "application/json");
  res.send(JSON.stringify(users));
});

app.use("/", (req, res, next) => {
  res.send("<h1>Welcome to the Express.js</h1>");
});

const server = http.createServer(app);
server.listen(3000);
