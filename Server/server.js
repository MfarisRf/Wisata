import express from "express";
import cors from "cors";
import db from "./config/Database";

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:',error);
}

const app = express();
app.use(cors())
app.use(express.json());

app.listen(5000, ()=> console.log('Server up and running...'));