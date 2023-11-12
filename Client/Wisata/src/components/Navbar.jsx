// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
    return (
        <div>
          
<nav className="bg-f1f1e8 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-f1f1e8 dark:border-f1f1e8">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" className="flex items-center">
      <img src="..\assets\icon\icon_profile.png" className="h-8 mr-3" />
  </a>
  <div className="flex md:order-2">
  <button type="button" className="py-2.5 px-5 me-2 mb-2 text-x15 font-bold text-green-700 focus:outline-none bg-f1f1e8 rounded-full border border-green-700 hover:bg-f1f1e8-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><img src="" />Masuk</button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-f1f1e8 :bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#Beranda" className="py-2 pl-3 pr-4 text-2d8c14 text-x15 rounded md:bg-transparent font-poppins font-bold" aria-current="page">Beranda</a>
      </li>
      <li>
        <a href="#Tentang Kami" className="block py-2 pl-3 pr-4 text-2d8c14 text-x15 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-poppins font-bold">Tentang kami</a>
      </li>
      <li>
        <a href="#Wisata" className="block py-2 pl-3 pr-4 text-2d8c14 text-x15 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-poppins font-bold">Wisata</a>
      </li>
      <li>
        <a href="#Kuliner" className="block py-2 pl-3 pr-4 text-2d8c14 text-x15 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-poppins font-bold">Kuliner</a>
      </li>
      <li>
        <a href="#Oleh-Oleh" className="block py-2 pl-3 pr-4 text-2d8c14 text-x15 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-poppins font-bold">Oleh-Oleh</a>
      </li>
      <li>
        <a href="#Rencana" className="block py-2 pl-3 pr-4 text-2d8c14 text-x15 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-poppins font-bold">Rencana</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar
