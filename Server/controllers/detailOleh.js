<<<<<<<< HEAD:Server/controllers/detailOleh.js
import detailOleh from "../models/olehModels.js";
========
import Kuliner from "../models/KulinerModels.js";
>>>>>>>> parent of c1648dc3 (API Relasi tabel Detail kuliner => Tempat kuliner(crud) Done):Server/controllers/Kuliner.js

export const getOleh = async  (req, res) => {
    try {
<<<<<<<< HEAD:Server/controllers/detailOleh.js
        const response = await detailOleh.findAll(
            {
                include: 'category', 
            }
        );
========
        const response = await Kuliner.findAll();
>>>>>>>> parent of c1648dc3 (API Relasi tabel Detail kuliner => Tempat kuliner(crud) Done):Server/controllers/Kuliner.js
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getOlehById = async  (req, res) => {
    try {
<<<<<<<< HEAD:Server/controllers/detailOleh.js
        const response = await detailOleh.findOne({
========
        const response = await Kuliner.findOne({
>>>>>>>> parent of c1648dc3 (API Relasi tabel Detail kuliner => Tempat kuliner(crud) Done):Server/controllers/Kuliner.js
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
    const { name, description, image, categoryId } = req.body;
    try {
        // Ambil data dari body request
        
    
        // Buat data wisata baru
<<<<<<<< HEAD:Server/controllers/detailOleh.js
        const newOleh = await detailOleh.create({
========
        const newKuliner = await Kuliner.create({
>>>>>>>> parent of c1648dc3 (API Relasi tabel Detail kuliner => Tempat kuliner(crud) Done):Server/controllers/Kuliner.js
          name,
          description,
          image,
          categoryId,
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
<<<<<<<< HEAD:Server/controllers/detailOleh.js
        const existingOleh = await detailOleh.findOne({
========
        const existingKuliner = await Kuliner.findOne({
>>>>>>>> parent of c1648dc3 (API Relasi tabel Detail kuliner => Tempat kuliner(crud) Done):Server/controllers/Kuliner.js
            where: {
                uuid: req.params.id
            }
        });
  
        if (!existingOleh) {
            return res.status(404).json({ msg: "Oleh-Oleh not found!" });
        }
  
        const { name, description, image, categoryId } = req.body;
  
        await existingOleh.update({
            name,
            description,
            image,
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

<<<<<<<< HEAD:Server/controllers/detailOleh.js
export const deleteOleh = async (req, res) => {
    try {
        const existingOleh = await detailOleh.findOne({
========

export const deleteKuliner = async (req, res) => {
    try {
        const existingKuliner = await Kuliner.findOne({
>>>>>>>> parent of c1648dc3 (API Relasi tabel Detail kuliner => Tempat kuliner(crud) Done):Server/controllers/Kuliner.js
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

<<<<<<<< HEAD:Server/controllers/detailOleh.js
export default detailOleh;
========

export default Kuliner;
>>>>>>>> parent of c1648dc3 (API Relasi tabel Detail kuliner => Tempat kuliner(crud) Done):Server/controllers/Kuliner.js
