// import express from "express";
// import cors from "cors";
// import db from "./config/Database.js";
// import router from "./routes/Route";
// import Wisata from "./models/Wisata.js";
// import dotenv from "dotenv";
// import allowCrossDomain from "./middleware/allowCrossDomain.js";
// import fileUpload from "express-fileupload";
const express = require("express");
const {createServer} = require("http");
const cors = require("cors");


// dotenv.config();

const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT;
// try {
//     await db.authenticate();
//     console.log('DB Connected...');
// } catch (error) {
//     console.error('Unable to connect to the database:',error);
// }

app.use(allowCrossDomain);
app.user(bodyParser.json());
const server = createServer(app);
app.use(routes);
// app.use(cors());
// app.use(express.json());
// app.use(router);

// app.use(fileUpload());
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// app.listen(5000, ()=> console.log('Server up and running...'));