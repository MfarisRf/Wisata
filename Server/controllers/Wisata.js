import wisata from '../models/detail_wisata.js';
import category from '../models/category.js';
export const getWisata = async (req, res) => {
    try {
        // Menggunakan findAll untuk mengambil semua data dari tabel Wisata
        const wisataList = await wisata.findAll({
          include: 'category', // Sesuaikan dengan nama relasi yang digunakan di model Wisata
          attributes: ['name', 'description', 'image', 'price', 'categoryId'], // Menentukan atribut yang ingin ditampilkan
        });
    
        // Mengirimkan data sebagai respons
        res.status(200).json(wisataList);
      } catch (error) {
        // Menangani error jika terjadi
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

export const getWisataById =  (req, res) => {
    
}

export const createWisata = async (req, res) => {
    try {
        // Ambil data dari body request
        const { name, description, image, price, categoryId } = req.body;
    
        // Buat data wisata baru
        const newWisata = await wisata.create({
          name,
          description,
          image,
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

export const updateWisata =  (req, res) => {
    
}

export const deleteWisata =  (req, res) => {
    
}