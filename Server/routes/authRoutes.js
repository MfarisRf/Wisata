// /routes/authRoutes.js
import express from 'express';
import { login, dashboard } from '../controllers/authController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();
// router.post('/signup', signup);
router.post('/login', login);
router.get('/dashboard', dashboard);

export default router;