import kuliner from '../models/KulinerModels.js';
import category from '../models/category.js';


export const getKuliner = async (req, res) => {
    try {
        // Menggunakan findAll untuk mengambil semua data dari tabel Kuliner
        const KulinerList = await kuliner.findAll({
          include: 'category', // Sesuaikan dengan nama relasi yang digunakan di model Kuliner
           // Menentukan atribut yang ingin ditampilkan
        });
    
        // Mengirimkan data sebagai respons
        res.status(200).json(KulinerList);
      } catch (error) {
        // Menangani error jika terjadi
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

export const getKulinerById = async (req, res) => {
  try {
    const response = await kuliner.findOne({
        where: {
            uuid: req.params.id
        }
    });
    res.status(200).json(response);
} catch (error) {
    res.status(500).json({ message: error.message });
}
}

export const createKuliner = async (req, res) => {
  const { name, description, image, price, categoryId } = req.body;
    try {
        // Ambil data dari body request
        
    
        // Buat data Kuliner baru
        const newKuliner = await kuliner.create({
          name,
          description,
          image,
          price,
          categoryId,
        });
    
        // Mengirimkan data yang baru dibuat sebagai respons
        res.status(201).json(newKuliner);
      } catch (error) {
        // Menangani error jika terjadi
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

export const updateKuliner = async (req, res) => {
  try {
      const existingKuliner = await kuliner.findOne({
          where: {
              uuid: req.params.id
          }
      });

      if (!existingKuliner) {
          return res.status(404).json({ msg: "Kuliner not found!" });
      }

      const { name, description, image, price, categoryId } = req.body;

      await existingKuliner.update({
          name,
          description,
          image,
          price,
          categoryId,
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

export const deleteKuliner = async (req, res) => {
  try {
      const existingKuliner = await kuliner.findOne({
          where: {
              uuid: req.params.id
          }
      });

      if (!existingKuliner) {
          return res.status(404).json({ msg: "Kuliner not found!" });
      }

      await existingKuliner.destroy();

      res.status(200).json({ message: "Kuliner deleted!" });
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
}