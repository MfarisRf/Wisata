import Kuliner from "../models/KulinerModels.js";


export const getKuliner = async (req, res) => {
    try {
        const response = await Kuliner.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getKulinerById = async (req, res) => {
    try {
        const response = await Kuliner.findOne({
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
    try {
        const existingKuliner = await Kuliner.findOne({
            where: {
                uuid: req.params.id
            }
        });
  
        if (!existingKuliner) {
            return res.status(404).json({ msg: "Kuliner not found!" });
        }
  
        const { name, description, image, categoryId } = req.body;
  
        await existingKuliner.update({
            name,
            description,
            image,
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
        const existingKuliner = await Kuliner.findOne({
            where: {
                uuid: req.params.id
            }
        });
  
        if (!existingKuliner) {
            return res.status(404).json({ msg: "Kuliner not found!" });
        }
  
        await existingKuliner.destroy();
  
        res.status(200).json({ message: "Kuliner delete"})
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
        
    }


export default Kuliner;