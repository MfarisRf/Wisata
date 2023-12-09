// routes/authRoutes.js
import express from 'express';
import { login, createAdmin } from '../controllers/authController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/admin/create', createAdmin)
router.post('/login', login);
router.get('/admin/dashboard', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard', user: req.user });
});

export default router;
