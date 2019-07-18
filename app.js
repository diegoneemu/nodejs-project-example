const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("in the middleware!");
  next();
});

app.use((req, res, next) => {
  console.log("another middleware!");
  res.send("Ok");
});

const server = http.createServer(app);
server.listen(3000);
