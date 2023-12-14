import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Oleh from "./olehModels.js";
import detailOleh from "./olehModels.js";

const { DataTypes } = Sequelize;

const detailOleh = db.define("detailOleh",     {
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
    detailOlehId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: detailt_oleh,
            key: 'id', // Atur sesuai dengan kolom yang Anda gunakan sebagai primary key di Category
        },
    }
},{
    freezeTableName: true,
});

detailOleh.hasMany(TempatOleh);
TempatOleh.belongsTo(detailOleh, {foreignKey: "detailOlehId", as: "detailOlehId",});

export default Tempat_Oleh;