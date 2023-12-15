import wisata from '../models/detail_wisata.js';
import category from '../models/category.js';


export const getWisata = async (req, res) => {
    try {
        // Menggunakan findAll untuk mengambil semua data dari tabel Wisata
        const wisataList = await wisata.findAll({
          include: 'category', // Sesuaikan dengan nama relasi yang digunakan di model Wisata
           // Menentukan atribut yang ingin ditampilkan
        });
    
        // Mengirimkan data sebagai respons
        res.status(200).json(wisataList);
      } catch (error) {
        // Menangani error jika terjadi
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

export const getWisataById = async (req, res) => {
  try {
    const response = await wisata.findOne({
        where: {
            uuid: req.params.id
        }
    });
    res.status(200).json(response);
} catch (error) {
    res.status(500).json({ message: error.message });
}
}

export const createWisata = async (req, res) => {
  const { name, description, image,jam_buka, jam_tutup, price, categoryId } = req.body;
    try {
        // Ambil data dari body request
        
    
        // Buat data wisata baru
        const newWisata = await wisata.create({
          name,
          description,
          image,
          jam_buka,
          jam_tutup,
          price,
          categoryId,
        });
    
        // Mengirimkan data yang baru dibuat sebagai respons
        res.status(201).json(newWisata);
        
      } catch (error) {
        // Menangani error jika terjadi
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

export const updateWisata = async (req, res) => {
  try {
      const existingWisata = await wisata.findOne({
          where: {
              uuid: req.params.id
          }
      });

      if (!existingWisata) {
          return res.status(404).json({ msg: "Wisata not found!" });
      }

      const { name, description, image, price, categoryId } = req.body;

      await existingWisata.update({
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

      res.status(200).json({ message: "Wisata updated!" });
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
}

export const deleteWisata = async (req, res) => {
  try {
      const existingWisata = await wisata.findOne({
          where: {
              uuid: req.params.id
          }
      });

      if (!existingWisata) {
          return res.status(404).json({ msg: "Wisata not found!" });
      }

      await existingWisata.destroy();

      res.status(200).json({ message: "Wisata deleted!" });
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
}