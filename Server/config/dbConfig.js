// /config/dbConfig.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('db_wisata', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
