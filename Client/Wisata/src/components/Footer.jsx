// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from "../assets/images/Logo_Only.png"

const Footer = () => {
  return (
    
<footer className="bg-f1f1e8 dark:bg-gray-900 font-">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <img src={logo} className="img-fluid logo object h-40 w-40 mt-4 ml-10 stransition-transform hover:scale-110" alt="brand" />
        </div>
        <div>
            <ul className="text-2d8c14 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Beranda</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Tentang Kami</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Destanasi Wisata</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Kuliner</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Oleh-Oleh</a>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-2d8c14 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Kontak</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Ciayumajakuning@gmail.com</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">(021) 000 234</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">PT CIAYUMAJAKUNING</a>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-2d8c14 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Instagram</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Facebook</a>
                </li>

            </ul>
        </div>
    </div>
    </div>
</footer>

    )
}

export default Footer