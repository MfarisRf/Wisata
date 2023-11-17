import {Sequelize} from "sequelize";

cont Sequelize = require('sequelize');

const db = new Sequelize('crud_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;