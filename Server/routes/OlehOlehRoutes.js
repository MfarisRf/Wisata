import express from "express";
import {
    getOleh,
    getOlehById,
    createOleh,
    updateOleh,
    deleteOleh
} from "../controllers/detailOleh.js";

import {verifyUser} from "../middleware/AuthUser.js";

const router = express.Router();
//router untuk detail kuliner
router.get("/Oleh", getOleh);
router.get("/Oleh/:id", getOlehById);
router.post("/Oleh", verifyUser, createOleh);
router.patch("/Oleh/:id", verifyUser,updateOleh);
router.delete("/Oleh/:id", verifyUser,deleteOleh);

export default router;