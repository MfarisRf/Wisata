import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Kuliner from "./KulinerModels.js";
const { DataTypes } = Sequelize;

const TempatKuliner = db.define("tempatkuliner",     {
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
    // KulinerId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //      validate: {
    //         notEmpty: true,
    //         },
    // },
},{
    freezeTableName: true,
});

Kuliner.hasMany(TempatKuliner);
TempatKuliner.belongsTo(Kuliner, {foreignKey: "KulinerId", as: "Kuliner",});

export default TempatKuliner;