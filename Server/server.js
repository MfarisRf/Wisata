import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/Route.js";
import Wisata from "./models/Wisata.js";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";

dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log('DB Connected...');
} catch (error) {
    console.error('Unable to connect to the database:',error);
}

app.use(cors());
app.use(express.json());
app.use(router)
app.use(fileUpload());
app.listen(5000, ()=> console.log('Server up and running...'));