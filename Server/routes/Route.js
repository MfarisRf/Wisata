import Express from 'express';
import { Register, getAdmin, Login } from '../controllers/Admin.js'; // Import Admin
import { verifyToken } from '../middleware/VerifyToken.js';


// import api Wisata
import { 
    getWisata, 
    getWisataById, 
    saveWisata, 
    updateWisata, 
    deleteWisata,} from '../controllers/WisataController.js';

const router = Express.Router();


// Login Admin
router.get('/admin', getAdmin );
router.post('/admin', Register );
router.post('/api/v1/login', Login );

// Wisata
router.get('/wisata', getWisata );
router.get('/wisata/:id', getWisataById );
router.post('/wisata', saveWisata );
router.patch('/wisata/:id', updateWisata );
router.delete('/wisata/:id', deleteWisata );


export default router;