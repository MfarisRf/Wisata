import { Sequelize } from "sequelize";
import db from "../config/Database.js";
<<<<<<< HEAD:Server/models/olehModels.js
import category from "./kategori.js";
const { DataTypes } = Sequelize;

const detailOleh = db.define("detailOleh",     {
=======
import category from "./category.js";
const { DataTypes } = Sequelize;

const detail_oleh = db.define("detail_oleh",     {
>>>>>>> 2812deaf5e5de21a43eb2ab38ada85bcd923713a:Server/models/detailt_oleh.js
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
        references: {
            model: category,
            key: 'id', // Atur sesuai dengan kolom yang Anda gunakan sebagai primary key di Category
        },
    }

},{
    freezeTableName: true,
});

<<<<<<< HEAD:Server/models/olehModels.js
category.hasMany(detailOleh);
detailOleh.belongsTo(category, {foreignKey: "categoryId", as: "category",});

export default detailOleh;
=======
category.hasMany(detail_oleh);
detail_oleh.belongsTo(category, {foreignKey: "categoryId", as: "category",});

export default detail_oleh;
>>>>>>> 2812deaf5e5de21a43eb2ab38ada85bcd923713a:Server/models/detailt_oleh.js
