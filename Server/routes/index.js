const express = require("express");
const app = express();
const auth = require("./routes/auth");
const apiUrl = "/api/v1";

app.use(apiUrl, auth);
module.exports = app;