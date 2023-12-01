import Express from 'express';
import { Register, getAdmin, Login } from '../controllers/admin.js'; // Updated import path
import { verifyToken } from '../middleware/VerifyToken.js';
const router = Express.Router();

router.get('/admin', getAdmin );
router.post('/admin', Register );
router.post('/login', Login );

export default router;