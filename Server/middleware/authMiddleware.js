// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import cors from 'cors';

const secretKey = 'inikuncisukses';

app.use(cors());
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied: No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded; // Menyimpan informasi admin ke objek req
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export { verifyToken };
