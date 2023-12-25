import detailOleh from "../models/olehModels.js";

export const getOleh = async  (req, res) => {
    try {
        const response = await detailOleh.findAll(
            {
                include: 'category', 
            }
        );
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getOlehById = async  (req, res) => {
    try {
        const response = await detailOleh.findOne({
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createOleh = async  (req, res) => {
    const { name, description, image, categoryId,address,nama_toko, price, jam_buka, jam_tutup, location} = req.body;
    try {
        // Ambil data dari body request
        
    
        // Buat data wisata baru
        const newOleh = await detailOleh.create({
            name,
            description,
            image,
            price,
            jam_buka,
            jam_tutup,
            location,
            categoryId,
            nama_toko,
            address,
        });
    
        // Mengirimkan data yang baru dibuat sebagai respons
        res.status(201).json(newOleh);
      } catch (error) {
        // Menangani error jika terjadi
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

export const updateOleh = async (req, res) => {
    try {
        const existingOleh = await detailOleh.findOne({
            where: {
                uuid: req.params.id
            }
        });
  
        if (!existingOleh) {
            return res.status(404).json({ msg: "Oleh-Oleh not found!" });
        }
  
        const { name, description, image, price,jam_buka,jam_tutup,location , categoryId } = req.body;
  
        await existingOleh.update({
            name,
            description,
            image,
            price,
            jam_buka,
            jam_tutup,
            location,
            categoryId,
        }, {
            where: {
                uuid: req.params.id
            }
        });
  
        res.status(200).json({ message: "Oleh-oleh updated!" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteOleh = async (req, res) => {
    try {
        const existingOleh = await detailOleh.findOne({
            where: {
                uuid: req.params.id
            }
        });
  
        if (!existingOleh) {
            return res.status(404).json({ msg: "Oleh-Oleh not found!" });
        }
  
        await existingOleh.destroy();
  
        res.status(200).json({ message: "Oleh-oleh delete"})
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}

export default detailOleh;