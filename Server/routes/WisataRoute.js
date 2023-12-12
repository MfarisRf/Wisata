import express from "express";
import {
    getWisata,
    getWisataById,
    createWisata,
    updateWisata,
    deleteWisata
} from "../controllers/Wisata.js";
import {verifyUser} from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/wisata", verifyUser, getWisata);
router.get("/wisata/:id", verifyUser, getWisataById);
router.post("/wisata", verifyUser, createWisata);
router.patch("/wisata/:id", verifyUser,updateWisata);
router.delete("/wisata/:id", verifyUser, deleteWisata);

export default router;