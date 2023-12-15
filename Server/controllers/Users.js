import express from "express";
import User from "../models/UserModel.js";
import argon2 from "argon2";



export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll({
            attributes: ['uuid', 'username', 'Password']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUserById = async (req, res) => {
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

export const createUser = async (req, res) => {
    const { username, password, confPassword } = req.body;
    if (password !== confPassword) {res.status(400).json({ message: "Password not match!" })};
    const hashpassword = await argon2.hash(password);
    try {
        await User.create({
            username: username,
            password: hashpassword,
        });
        res.status(201).json({ message: "User created!" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// export const updateUser = async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             uuid: req.params.id
//         }
//     });
//     if (!user) {res.status(404).json({ msg : "User not found!" })};
//     const { username, password, confPassword } = req.body;
//     let hashpassword;
//     if (password === "" || password === null) {
//         hashpassword = user.password;
//     }else{
//         hashpassword = await argon2.hash(password);
//     }
//     if(password !== confPassword) {res.status(400).json({ msg : "Password not match!" })}
//     try {
//         await User.update({
//             username: username,
//             password: hashpassword,
//         });{
//             where : {
//                 id: user.id
//             }
//         }
        
//         res.status(200).json({ message: "User updated!" });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

export const updateUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                uuid: req.params.id
            }
        });

        if (!user) {
            return res.status(404).json({ msg: "Pengguna tidak ditemukan!" });
        }

        const { username, password, confPassword } = req.body;
        let hashpassword;

        console.log("Received Data:", { username, password, confPassword });

        if (password === "" || password === null) {
            hashpassword = user.password;
        } else {
            hashpassword = await argon2.hash(password);
        }

        if (password !== confPassword) {
            return res.status(400).json({ msg: "Kata sandi tidak cocok!" });
        }

        await User.update(
            {
                username: username ? username : user.username,
                password: hashpassword,
            },
            {
                where: {
                    id: user.id
                }
            }
        );

        console.log("User Updated:", user.id);
        res.status(200).json({ message: "Pengguna diperbarui!" });
    } catch (error) {
        console.error("Error in updateUser:", error);
        res.status(400).json({ message: error.message || "Terjadi kesalahan saat memperbarui pengguna." });
    }
};





export const deleteUser = async (req, res) => {
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!user) {res.status(404).json({ msg : "User not found!" })};
    try {
        await User.destroy({
            where: {
                id: user.id
            }
        });
        
        res.status(200).json({ message: "User deleted!" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
