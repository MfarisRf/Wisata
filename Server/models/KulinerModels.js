import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import category from "./kategori.js";
const { DataTypes } = Sequelize;

const Kuliner = db.define("detailkuliner",     {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
         validate: {
            notEmpty: true,
            },
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
         validate: {
            notEmpty: true,
            len: [3, 100],
            },
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
         validate: {
            notEmpty: true,
            },
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
         validate: {
            notEmpty: true,
            },
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
         validate: {
            notEmpty: true,
            },
    },

},{
    freezeTableName: true,
});

category.hasMany(Kuliner);
Kuliner.belongsTo(category, {foreignKey: "categoryId", as: "category",});

export default Kuliner;