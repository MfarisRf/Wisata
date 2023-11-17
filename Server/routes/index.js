import Express from 'express';
import { getAdmin } from "../controllers/Admin.js";

const router = Express.Router();

router.get('/', getAdmin );

export default router;