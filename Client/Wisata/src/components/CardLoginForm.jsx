/* eslint-disable no-unused-vars */
// src/App.js
import React from 'react';
import logo from '../assets/images/gambar_login.png'

const CardLoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login logic goes here');
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-bfdcae w-9/12 shadow-md rounded-md overflow-hidden flex">
        {/* Form Login */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-4">Masuk</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="border rounded w-full py-1 px-3"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border rounded w-full py-1 px-3"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Log In
            </button>
          </form>
        </div>

        {/* Gambar Illustrasi */}
        <div className="w-1/2 bg-gray-400 flex items-center justify-center">
          <img
            src={logo} // Ganti dengan URL gambar yang diinginkan
            alt="Illustration"
            className="object-cover w-full h-full rounded-r-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CardLoginForm;
