import express from "express";
import {
    getCategory,
    getCategoryById,
    createCategory,
    updateCategory,
} from "../controllers/category.js";

const router = express.Router();
//router untuk detail Category
router.get("/Category", getCategory);
router.get("/Category/:id", getCategoryById);
router.post('/Category', createCategory);
// router.patch("/Category/:id",updateCategory);
// router.delete("/Category/:id", deleteCategory);

export default router;