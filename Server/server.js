// server.js
import express from 'express';
import sequelize from '../Server/config/dbConfig.js';
import authRoutes from '../Server/routes/authRoutes.js';
import { enableCORS } from '../Server/middleware/authMiddleware.js';
const app = express();
const PORT = 3000;

// Middleware untuk membaca body dari request
app.use(express.json());
app.use(enableCORS);
app.use((req, res, next) => {
  // Set-Cookie header dengan SameSite=None untuk mendukung cookie lintas situs
  res.setHeader('Set-Cookie', 'myCookie=myValue; Secure');
  next();
});

// Sinkronisasi database
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

// Menggunakan rute auth
app.use('/auth', authRoutes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
