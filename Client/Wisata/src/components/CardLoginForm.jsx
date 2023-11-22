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
        <div className="w-1/2 p-8 ml-10 mr-10 mt-20">
          <h2 className="text-2xl font-semibold mb-4">Masuk</h2>
          <form onSubmit={handleSubmit}>
          {/* Input Username */}
          <div class="relative z-0 w-50% mb-5 group">
              <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
          </div>
          {/* Input Password */}
          <div class="relative z-0 w-full mb-5 group">
            <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
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
