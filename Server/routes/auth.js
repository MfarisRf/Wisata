const express = require("express");
const routes = express();
const {login, register} = require("../controllers/auth");

// api login
routes.post("/login", login);
routes.post("/register", register);


module.exports = routes;