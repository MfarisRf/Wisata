// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import cors from 'cors';

const secretKey = 'inirahasiaya';

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied: No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Access denied: Invalid token' });
    }

    req.user = decoded;
    next();
  });
};

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

const enableCORS = cors(corsOptions);

export { verifyToken, enableCORS };
