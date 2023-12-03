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
    <div className="flex h-screen items-center justify-center ">
      <div className="bg-bfdcae w-9/12 shadow-md rounded-3xl overflow-hidden flex">
        {/* Form Login */}
        <div className="w-1/2 p-8 ml-10 mr-10 mt-20">
          <h2 className="text-2xl font-semibold mb-10 text-center font-['Boogaloo'] tracking-[.1em]">Masuk</h2>
          <form onSubmit={handleSubmit}>
          {/* Input Username */}
          <div className="relative z-0 w-50% mb-5 group">
              <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email*</label>
          </div>
          {/* Input Password */}
          <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Kata sandi*</label>
          </div>
            <button
              type="submit" className="text-sm bg-[#6FA385] font-bold text-[#222D3F] py-1 px-6 rounded-lg ml-36 mt-5">Masuk</button>
          </form>
        </div>

        {/* Gambar Illustrasi */}
        <div className="w-1/2 bg- flex items-center justify-center">
          <img src={logo} alt="Illustration" className="object-cover w-full h-full rounded-l-[200px]"/>
        </div>
      </div>
    </div>
  );
};

export default CardLoginForm;
