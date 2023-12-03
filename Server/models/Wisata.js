import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Wisata = db.define('detail_wisata', {
    nama_wisata: {
        type: DataTypes.STRING,
    },
    images_wisata: {
        type: DataTypes.STRING,
    },
    desc_wisata: {
        type: DataTypes.STRING,
    },
    alamat_wisata: {
        type: DataTypes.STRING,
    },
    jam_wisata: {
        type: DataTypes.STRING,
    },
    tiket_wisata: {
        type: DataTypes.STRING,
    },
    sosmed_wisata: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
    },
}, {
    freezeTableName: true,
});
export default Wisata;

(async () => {
    await db.sync();
})();