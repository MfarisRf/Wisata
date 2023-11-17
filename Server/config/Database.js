import {Sequelize} from "sequelize";

cont Sequelize = require('sequelize');

const db = new Sequelize('db_wisata', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;