// app.js
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import sequelize from './Config/database.js';

const app = express();
const PORT = 3000;

// Middleware untuk mengizinkan Express membaca body dari request
app.use(express.json());

// Menggunakan Routes
app.use('/auth', authRoutes);

// Sinkronisasi model dengan database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
