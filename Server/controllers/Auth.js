import User from "../models/UserModel.js";
import argon2 from "argon2";

// export const Login = async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: req.body.username
//         }
//     });
//     if (!user) {res.status(404).json({ msg : "User not found!" })}
//     const match = await argon2.verify(user.password, req.body.password);
//     if (!match) {res.status(400).json({ msg : "Incorrect password!" })}
//     req.session.userId = user.uuid;
//     const uuid = user.uuid;
//     const username = user.username;
//     const password = user.password;

//     res.status(200).json(uuid, username, password);
// }

export const Login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (!user) {
            return res.status(404).json({ msg: "User not found!" });
        }

        const match = await argon2.verify(user.password, req.body.password);

        if (!match) {
            return res.status(400).json({ msg: "Incorrect password!" });
        }

        req.session.userId = user.uuid;
        const { uuid, username, password } = user;

        res.status(200).json({ uuid, username, password });
    } catch (error) {
        console.error("Error in Login:", error);
        res.status(500).json({ msg: "Terjadi kesalahan saat login." });
    }
};


export const Me = async (req, res) => {
    if(!req.session.userId){
       return res.status(401).json({ msg : "Unauthorized!" });
    }
    const user = await User.findOne({
        attributes: ['uuid', 'username'],
        where: {
            uuid: req.session.userId
        }
    });
    if (!user) {res.status(404).json({ msg : "User not found!" })}
    res.status(200).json(user);

}

export const Logout = async (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(400).json({ msg : "Something went wrong!" });
        res.status(200).json({ msg : "Logout success!" });
    });
}