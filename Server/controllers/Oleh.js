import Oleh from "../models/detailt_oleh.js";

export const getOleh = async  (req, res) => {
    try {
        const response = await Oleh.findAll({
            attributes: ['uuid', 'username', 'Password']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getOlehById = async  (req, res) => {
    try {
        const response = await Oleh.findAll({
            attributes: ['uuid', 'username', 'Password']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createOleh = async  (req, res) => {
    try {
        const response = await Oleh.findAll({
            attributes: ['uuid', 'username', 'Password']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateOleh = async (req, res) => {
    try {
        const response = await Oleh.findAll({
            attributes: ['uuid', 'username', 'Password']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteOleh = async (req, res) => {
    try {
        const response = await Oleh.findAll({
            attributes: ['uuid', 'username', 'Password']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}