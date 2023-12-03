import Wisata from "../models/Wisata.js";
import path from "path";

export const getWisata = async (req, res) => {
    try {
        const response = await Wisata.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getWisataById = async (req, res) => {
    try {
        const response = await Wisata.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const saveWisata = (req, res) => {
    if (req.files === null)
        return res.status(400).json({ msg: "Tidak ada file yang diupload" });
    const nama_wisata = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.lenght;
    const ext = path.extname(file.nama_wisata);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))return res.status(422).json({ msg: "Guanakan Format yang didukung" });
    if (fileSize > 50000000)return res.status(422).json({ msg: "Ukuran file Harus kurang dari 50MB" });

    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await Wisata.create({
                nama_wisata: nama_wisata,
                images_wisata: fileName,
                desc_wisata: req.body.desc,
                alamat_wisata: req.body.alamat,
                jam_wisata: req.body.jam,
                tiket_wisata: req.body.tiket,
                sosmed_wisata: req.body.sosmed,
                url: url,
            });
            res.status(201).json({ msg: "Wisata berhasil ditambahkan" });
        } catch (error) {
            console.log(error.message);
        }
    });
};

export const updateWisata = (req, res) => {};

export const deleteWisata = (req, res) => {};
