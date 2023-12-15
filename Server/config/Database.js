import { HSTORE, Sequelize } from "sequelize";
import 'pg-hstore';

const db = new Sequelize("wisata", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default db;