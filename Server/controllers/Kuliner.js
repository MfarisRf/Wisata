import Kuliner from "../models/KulinerModels.js";


export const getKuliner = async (req, res) => {
    try {
        const response = await User.findAll({
            attributes: ['uuid', 'username', 'Password']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getKulinerById = async (req, res) => {
    try {
        const response = await User.findOne({
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
    const { name, description, image, categoryId } = req.body;
    try {
        // Ambil data dari body request
        
    
        // Buat data wisata baru
        const newKuliner = await Kuliner.create({
          name,
          description,
          image,
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
    
}

export const deleteKuliner = async (req, res) => {
    
}
export default Kuliner;