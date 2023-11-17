import Admin from "../models/AdminModel.js";

export const getAdmin = async (req, res) => {
    try {
        const admin = await Admin.findAll();
        console.log(admin);
        res.json(admin);
    } catch (error) {
        console.log(error);
        res.status(500).json({
        });
    }
}