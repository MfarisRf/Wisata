import express from "express";
import {
    getOleh,
    getOlehById,
    createOleh,
    updateOleh,
    deleteOleh
} from "../controllers/detailOleh.js";

import {
    getTempatKuliner,
    getTempatKulinerById,
    createTempatKuliner,
    updateTempatKuliner,
    deleteTempatKuliner
} from "../controllers/TempatKuliner.js"
import {verifyUser} from "../middleware/AuthUser.js";

const router = express.Router();
//router untuk detail kuliner
router.get("/kuliner", getKuliner);
router.get("/kuliner/:id", getKulinerById);
router.post("/kuliner", verifyUser, createKuliner);
router.patch("/kuliner/:id", verifyUser,updateKuliner);
router.delete("/kuliner/:id", verifyUser, deleteKuliner);

//router untuk tempat kuliner
router.get("/tempatKuliner", getTempatKuliner);
router.get("/tempatKuliner/:id", getTempatKulinerById);
router.post("/tempatKuliner", verifyUser, createTempatKuliner);
router.patch("/tempatKuliner/:id", verifyUser,updateTempatKuliner);
router.delete("/tempatKuliner/:id", verifyUser, deleteTempatKuliner);

export default router;