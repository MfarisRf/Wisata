import TempatOleh from "../models/Tempat_Oleh.js";
import detailoleh from "../models/olehModels.js";

export const getTempatOleh = async (req, res) => {
  try {
    // Menggunakan findAll untuk mengambil semua data dari tabel Wisata
    const TempatOlehList = await TempatOleh.findAll({
      include: 'detailoleh', // Sesuaikan dengan nama relasi yang digunakan di model Wisata
       // Menentukan atribut yang ingin ditampilkan
    });

    // Mengirimkan data sebagai respons
    res.status(200).json(TempatOlehList);
  } catch (error) {
    // Menangani error jika terjadi
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const getTempatOlehById = async (req, res) => {
  try {
    const response = await TempatOleh.findOne({
        where: {
            uuid: req.params.id
        },
        include: 'detailoleh',
    });
    res.status(200).json(response);
} catch (error) {
    res.status(500).json({ message: error.message });
}
}

export const createTempatOleh = async (req, res) => {
    const { name, address, jam_buka, detailOlehId } = req.body;
    try {
        // Ambil data dari body request
        
    
        // Buat data Tempat Kuliner baru
        const newTempatOleh = await TempatOleh.create({
            name,
            address,
            jam_buka,
            detailOlehId,
        });
    
        // Mengirimkan data yang baru dibuat sebagai respons
        res.status(201).json(newTempatOleh);
      } catch (error) {
        // Menangani error jika terjadi
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

export const updateTempatOleh = async (req, res) => {
  try {
    const existingTempatOleh = await TempatOleh.findOne({
        where: {
            uuid: req.params.id
        }
    });

    if (!existingTempatOleh) {
        return res.status(404).json({ msg: "Kuliner not found!" });
    }

    const { name, address, jam_buka, detailOlehId } = req.body;

    await existingTempatOleh.update({
        name,
        address,
        jam_buka,
        detailOlehId,
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

export const deleteTempatOleh = async (req, res) => {
  try {
    const existingTempatOleh = await TempatOleh.findOne({
        where: {
            uuid: req.params.id
        }
    });

    if (!existingTempatOleh) {
        return res.status(404).json({ msg: "Tempat Kuliner not found!" });
    }

    await existingTempatOleh.destroy();

    res.status(200).json({ message: "Tempat Kuliner deleted!" });
} catch (error) {
    res.status(400).json({ message: error.message });
}
}
export default TempatOleh;