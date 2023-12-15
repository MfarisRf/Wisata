// src/utils/api.js

import axios from 'axios';

// Membuat instance axios
const api = axios.create({
  baseURL: 'http://localhost:3000', // Sesuaikan dengan URL backend Anda
});

// Interceptor untuk menangani token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor untuk menangani respons dari server
api.interceptors.response.use(
  (response) => {
    const { token } = response.data;
    if (token) {
      localStorage.setItem('token', token);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
