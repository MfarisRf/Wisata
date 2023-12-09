// models/admin.js
import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import sequelize from '../config/dbConfig.js';

const Admin = sequelize.define('Admin', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Admin.beforeCreate(async (admin) => {
  const saltRounds = 10;
  admin.password = await bcrypt.hash(admin.password, saltRounds);
});

export default Admin;
