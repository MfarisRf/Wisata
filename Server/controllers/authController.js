// controllers/authController.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

const secretKey = 'inirahasia';

const generateToken = (user) => {
  return jwt.sign(user, secretKey, { expiresIn: '1h' });
};

//Create admin
const createAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Cek apakah admin dengan username yang sama sudah ada
    const existingAdmin = await Admin.findOne({ where: { username } });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin with the same username already exists' });
    }

    // Hash password sebelum menyimpan ke database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat admin baru
    const newAdmin = await Admin.create({
      username,
      password: hashedPassword,
    });

    // Buat dan kirim token sebagai respons
    const token = generateToken({ username });
    res.json({ token });
  } catch (error) {
    console.error('Error during admin creation:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ where: { username } });

    if (admin) {
      // Membandingkan password yang belum dihash dengan password yang sudah dihash di database
      const passwordMatch = await bcrypt.compare(password, admin.password);

      if (passwordMatch) {
        const token = generateToken({ username });
        res.json({ token });
      } else {
        res.status(401).json({ message: 'Login failed: Invalid credentials' });
      }
    } else {
      res.status(401).json({ message: 'Login failed: Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { createAdmin, login };
 