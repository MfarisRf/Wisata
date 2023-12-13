import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const category = db.define("category",     {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
         validate: {
            notEmpty: true,
            len: [3, 100],
            },
    },

},{
    freezeTableName: true,
});

export default category;