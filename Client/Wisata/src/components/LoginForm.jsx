import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api from '../configs/api';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Gunakan useNavigate di sini

  const handleLogin = async () => {
    try {
      const response = await api.post('http://localhost:3000/auth/login', {
        username,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);
      console.log('Server Response:', response.data);

      // Redirect ke halaman /dashboard setelah login berhasil
      navigate('http://localhost:5173/HomeAdmin');
    } catch (error) {
      console.error('Error during login:', error.response.data);
    }
  };




  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Implement login logic here
  //   console.log('Login logic goes here');
  // };

  return (
    <div className="flex h-screen items-center justify-center bg-[#F1F1E8] pt-20">
      <div className="bg-bfdcae w-9/12 shadow-md rounded-3xl overflow-hidden flex">
        {/* Form Login */}
        <div className="w-1/2 p-8 ml-10 mr-10 py-20">
          <h2 className="text-2xl font-medium mb-10 text-center font-['Boogaloo'] tracking-[.1em]">Masuk</h2>
          <form>
          {/* Input Username */}
          <div className="mb-5">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-black dark:text-green-500">Username</label>
          <input type="text" id="username" 
          onChange={(e) => setUsername(e.target.value)}
          value={username}  
          className="bg-green-50 border border-green-500 text-green-900 placeholder-gray-300  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
          placeholder="Masukan Username"/>
          </div>
          {/* Input Password */}
          <div className="mb-5">
          <label htmlFor="pass" className="block mb-2 text-sm font-medium text-black dark:text-green-500">Kata Sandi*</label>
          <input type="password" 
          id="pass" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-green-50 border border-green-500 text-green-900 placeholder-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
          placeholder="Masukan Kata Sandi"
          />
          </div>
          {/* Button Login */}
            <button onClick={handleLogin} type="submit" className="text-sm  bg-[#6FA385] font-bold text-[#222D3F] py-2 px-6 rounded-lg ml-40 mt-5">Masuk</button>
          </form>
        </div>

        {/* Gambar Illustrasi */}
        <div className="w-1/2 bg- flex items-center justify-center">
          {/* <img src={logo} alt="Illustration" className="object-cover w-full h-full rounded-l-[200px]"/> */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
