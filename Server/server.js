import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import Admin from "./models/AdminModel.js";
import dotenv from "dotenv";

const app = express();

try {
    await db.authenticate();
    console.log('DB Connected...');
} catch (error) {
    console.error('Unable to connect to the database:',error);
}
app.use(express.json());
app.use(router)
app.listen(5000, ()=> console.log('Server up and running...'));