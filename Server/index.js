import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import UserRoute from './routes/UserRoute.js';
import WisataRoute from './routes/WisataRoute.js';
import AuthRoute from './routes/AuthRoute.js';
import KulinerRoutes from './routes/KulinerRoutes.js';
import db from './config/Database.js';
import SequelizeStore from 'connect-session-sequelize';

dotenv.config();

// (async()=>{
//     await db.sync();
// })();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db,

});

app.use(cors({
    origin: ['http://localhost:5173'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  }));


app.use(session({
    secret: 'dwandalkclkamcl',
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: { 
        secure: 'auto' 
    }
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);
app.use(WisataRoute);
app.use(KulinerRoutes);
// store.sync();
app.listen(5000, () => {
    console.log("Server running on port 5000");
});