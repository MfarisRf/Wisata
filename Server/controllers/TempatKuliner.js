import TempatKuliner from "../models/Tempat_Kuliner.js";
import detailkuliner from "../models/KulinerModels.js";

export const getTempatKuliner = async (req, res) => {
  try {
    // Menggunakan findAll untuk mengambil semua data dari tabel Wisata
    const TempatKulinerList = await TempatKuliner.findAll({
      include: 'detailkuliner', // Sesuaikan dengan nama relasi yang digunakan di model Wisata
       // Menentukan atribut yang ingin ditampilkan
    });

    // Mengirimkan data sebagai respons
    res.status(200).json(TempatKulinerList);
  } catch (error) {
    // Menangani error jika terjadi
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const getTempatKulinerById = async (req, res) => {
  try {
    const response = await TempatKuliner.findOne({
        where: {
            uuid: req.params.id
        },
        include: 'detailkuliner',
    });
    res.status(200).json(response);
} catch (error) {
    res.status(500).json({ message: error.message });
}
}

export const createTempatKuliner = async (req, res) => {
    const { name, address, jam_buka, detailkulinerId } = req.body;
    try {
        // Ambil data dari body request
        
    
        // Buat data Tempat Kuliner baru
        const newTempatKuliner = await TempatKuliner.create({
            name,
            address,
            jam_buka,
            detailkulinerId,
        });
    
        // Mengirimkan data yang baru dibuat sebagai respons
        res.status(201).json(newTempatKuliner);
      } catch (error) {
        // Menangani error jika terjadi
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

export const updateTempatKuliner = async (req, res) => {
  try {
    const existingTempatKuliner = await TempatKuliner.findOne({
        where: {
            uuid: req.params.id
        }
    });

    if (!existingTempatKuliner) {
        return res.status(404).json({ msg: "Kuliner not found!" });
    }

    const { name, address, jam_buka, detailkulinerId } = req.body;

    await existingTempatKuliner.update({
        name,
        address,
        jam_buka,
        detailkulinerId,
    }, {
        where: {
            uuid: req.params.id
        }
    });

    res.status(200).json({ message: "Kuliner updated!" });
} catch (error) {
    res.status(400).json({ message: error.message });
}
}

export const deleteTempatKuliner = async (req, res) => {
  try {
    const existingTempatKuliner = await TempatKuliner.findOne({
        where: {
            uuid: req.params.id
        }
    });

    if (!existingTempatKuliner) {
        return res.status(404).json({ msg: "Tempat Kuliner not found!" });
    }

    await existingTempatKuliner.destroy();

    res.status(200).json({ message: "Tempat Kuliner deleted!" });
} catch (error) {
    res.status(400).json({ message: error.message });
}
}
export default TempatKuliner;