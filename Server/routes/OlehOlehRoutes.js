import express from "express";
import {
    getOleh,
    getOlehById,
    createOleh,
    updateOleh,
    deleteOleh
} from "../controllers/detailOleh.js";

import {
    getTempatOleh,
    getTempatOlehById,
    createTempatOleh,
    updateTempatOleh,
    deleteTempatOleh
} from "../controllers/TempatOleh.js"
import {verifyUser} from "../middleware/AuthUser.js";

const router = express.Router();
//router untuk detail kuliner
router.get("/Oleh", getOleh);
router.get("/Oleh/:id", getOlehById);
router.post("/Oleh", verifyUser, createOleh);
router.patch("/Oleh/:id", verifyUser,updateOleh);
router.delete("/Oleh/:id", verifyUser,deleteOleh);

//router untuk tempat kuliner
router.get("/tempatOleh", getTempatOleh);
router.get("/tempatOleh/:id", getTempatOlehById);
router.post("/tempatOleh", verifyUser, createTempatOleh);
router.patch("/tempatOleh/:id", verifyUser,updateTempatOleh);
router.delete("/tempatOleh/:id", verifyUser, deleteTempatOleh);

export default router;