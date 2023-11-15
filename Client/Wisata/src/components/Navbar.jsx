// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from "../assets/images/Logo_navbar.png"
const Navbar = () => {
    return (
        <div>
          
<nav className="bg-f1f1e8 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-f1f1e8 dark:border-f1f1e8">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
  <img src={logo} className="img-fluid logo object-contain h-15 w-40 ml-20" alt="brand" />
  </a>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-sm mr-20 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-f1f1e8 :bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
    </ul>
  </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar
