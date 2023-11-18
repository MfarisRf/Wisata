import Express from 'express';
import { Register, getAdmin, Login } from "../controllers/Admin.js";

const router = Express.Router();

router.get('/admin', getAdmin );
router.post('/admin', Register );
router.post('/login', Login );
export default router;