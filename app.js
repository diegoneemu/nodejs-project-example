const http = require("http");
const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const usersRoutes = require("./routes/user");
const mainRoutes = require("./routes/main");
const users = require("./model/user");

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

app.use(mainRoutes);
app.use(usersRoutes);

const server = http.createServer(app);
server.listen(3000);
