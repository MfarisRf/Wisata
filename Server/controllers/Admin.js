//require ('dotenv').config();
import Admin from "../models/AdminModel.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";



export const getAdmin = async (req, res) => {
    try {
        const admin = await Admin.findAll();
        console.log(admin);
        res.json(admin);
    } catch (error) {
        console.log(error);
        res.status(500).json({});
    }
}

export const Register = async (req, res) => {
    const { nama_admin, username, password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({ message: "Password tidak sama" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Admin.create({
            nama_admin: nama_admin,
            username: username,
            password: hashPassword,
        });
        res.json({
            message: "Admin berhasil ditambahkan",
        });
    } catch (error) {
        console.log(error);
    }
}

// export const Login = async (req, res) => {
//     try {
//         const admin = await Admin.findAll({
//         where : { username: req.body.username }
//     });
//     const match = await bcrypt.compare(req.body.password, admin[0].password);
//     if(!match) return res.status(400).json({message: "Password salah"});
//     const adminId = admin[0].id;
//     const nama_admin = admin[0].nama_admin;
//     const username = admin[0].username;
//     const accessToken = Jwt.sign({adminId, nama_admin, username}, process.env.ACCESS_TOKEN_SECRET,{
//         expiresIn: "20s"
//     });
//     const refreshToken = Jwt.sign({adminId, nama_admin, username}, process.env.REFRESH_TOKEN_SECRET,{
//         expiresIn: "1d"
//     });
//     await Admin.update({refresh_token:refreshToken},{
//         where:{
//             id: adminId
//         }
//     });
//     res.cookie('refreshToken', refreshToken, {
//         httpOnly: true,
//         maxAge: 24*60*60*1000,
//     });
//     res.json({accessToken})

// } catch (error) {
//     console.log(error);
//     res.status(404).json({ msg: "Username tidak ditemukan" });
// }






export const Login = async (req, res) => {
    try {
        const admin = await Admin.findAll({
            where: {
                username: req.body.username
            }
        });
        const match = await bcrypt.compare(req.body.password, admin[0].password);
        if(!match) return res.status(400).json({message: "Password salah"});
        const adminId = admin[0].id;
        const nama_admin = admin[0].nama_admin;
        const username = admin[0].username;
        const accessToken = Jwt.sign({adminId, nama_admin, username}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: "20s"
        });
        const refreshToken = Jwt.sign({adminId, nama_admin, username}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "1d"
        });
        await Admin.update({refresh_token: refreshToken},{
            where:{
                id: adminId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24*60*60*1000,
        })
        res.json({accessToken})
    } catch (error) {
        console.log(error);
        res.status(404).json({msg : "Username tidak ditemukan"});
    }
}