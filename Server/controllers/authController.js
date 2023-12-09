// controllers/authController.js
import Admin from '../models/admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const secretKey = 'inirahasiaya';

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ where: { username } });

    if (!admin || !bcrypt.compareSync(password, admin.password)) {
      return res.status(401).json({ message: 'Login failed: Invalid credentials' });
    }

    const token = jwt.sign({ id: admin.id, username: admin.username }, secretKey, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const dashboard = (req, res) => {
  res.json({ message: 'Welcome to the dashboard!' });
};

export { login, dashboard };
