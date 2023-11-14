// eslint-disable-next-line no-unused-vars
import React from 'react';

const CardLoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="masukan email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Kata sandi*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="masukan kata sandi"
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <a href="#" className="text-blue-500 text-sm">Lupa Kata Sandi?</a>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            >
              Masuk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardLoginForm;
