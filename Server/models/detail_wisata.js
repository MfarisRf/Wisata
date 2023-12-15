import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import category from "./category.js";

const { DataTypes } = Sequelize;

const wisata = db.define("detail_wisata", {
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
    jam_buka: {
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
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: category,
            key: 'id', // Atur sesuai dengan kolom yang Anda gunakan sebagai primary key di Category
        },
    }
}, {
    freezeTableName: true,
});

category.hasMany(wisata);
wisata.belongsTo(category, { foreignKey: "categoryId", as: "category", });

export default wisata;