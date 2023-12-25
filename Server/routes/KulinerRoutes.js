import express from "express";
import {
    getKuliner,
    getKulinerById,
    createKuliner,
    updateKuliner,
    deleteKuliner
} from "../controllers/detailkuliner.js";

// import {
//     getTempatKuliner,
//     getTempatKulinerById,
//     createTempatKuliner,
//     updateTempatKuliner,
//     deleteTempatKuliner
// } from "../controllers/TempatKuliner.js"
import {verifyUser} from "../middleware/AuthUser.js";

const router = express.Router();
//router untuk detail kuliner
router.get("/kuliner", getKuliner);
router.get("/kuliner/:id", getKulinerById);
router.post("/kuliner", verifyUser, createKuliner);
router.patch("/kuliner/:id", verifyUser,updateKuliner);
router.delete("/kuliner/:id", verifyUser, deleteKuliner);



export default router;