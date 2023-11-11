// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
    return (
        <div>
          
<nav className="bg-f1f1e8 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-f1f1e8 dark:border-f1f1e8">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" className="flex items-center">
      <img src="#" className="h-8 mr-3" alt="Logo" />
      <span className="self-center text-2xl font-poppins font-bold whitespace-nowrap dark:text-white">CIAYUMAJAKUNING</span>
  </a>
  <div className="flex md:order-2">

      <button type="button" className="text-2d8c14 border border-2d8c14 focus:outline-2d8c14 font-poppins font-bold rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-2d8c14 dark:hover:bg-2d8c14 shadow-md"><img src="./assets/icon/icon_profile.png" alt="logo" />Masuk</button>
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
