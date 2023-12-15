import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Kuliner from "./KulinerModels.js";
import detailkuliner from "./KulinerModels.js";
const { DataTypes } = Sequelize;

const tempatkuliner = db.define("tempatkuliner",     {
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
    address: {
        type: DataTypes.STRING,
        allowNull: false,
         validate: {
            notEmpty: true,
            },
    },
    jam_buka: {
        type: DataTypes.STRING,
        allowNull: false,
         validate: {
            notEmpty: true,
            },
    },
    jam_tutup: {
        type: DataTypes.STRING,
        allowNull: false,
         validate: {
            notEmpty: true,
            },
    },
    detailkulinerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: detailkuliner,
            key: 'id', // Atur sesuai dengan kolom yang Anda gunakan sebagai primary key di Category
        },
    }
},{
    freezeTableName: true,
});

detailkuliner.hasMany(tempatkuliner);
tempatkuliner.belongsTo(detailkuliner, {foreignKey: "detailkulinerId", as: "detailkuliner",});

export default tempatkuliner;