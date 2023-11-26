// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import 'flowbite'

// import background from "../assets/images/Teksturs.png";
import Gambarnfdw from '../assets/images/NFDW 1920x689.png'
// import GambarPK from '../assets/images/PK.png'

function Destinasiwisata() {
  return (
    <div>
    <Navbar/>
    <img className="h-2/5 w-5/5 pt-20" src={Gambarnfdw} alt="image description"></img>
    <br/>
    <h1>Destinasi Wisata</h1>
    <br/>
    <div className="flex items-center justify-space-between w-full sm:w-96">
    
    <div className="relative w-full mr-2">
  <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" required />

  <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-gray-900 bg-white bg-opacity-80 rounded-e-lg border border-gray-300 hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:border-s-gray-700 dark:border-gray-700 dark:text-white dark:focus:border-blue-500 dark:hover:bg-gray-900 dark:focus:ring-blue-800">
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    </svg>
    <span className="sr-only">Search</span>
  </button>
</div>


<form>
    <div className="relative flex-shrink-0 z-10 inline-flex items-center">
        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg></button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cirebon</button>
                </li>
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Indramayu</button>
                </li>
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Majalengka</button>
                </li>
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kuningan</button>
                </li>
            </ul>
        </div>
    </div>
</form>
</div>
<br/>
<div>
  <div class="grid grid-cols-1 gap-6   lg:grid-cols-4 ">
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">Pantai Dadap</h2>
                                <p class="text-lg font-light text-white">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src="https://source.unsplash.com/random/400x400" class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="text-2xl font-bold  text-white mb-0 pb-1"> Telaga Biru Cirerem </h2>
                                <p class="text-lg font-light text-white">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src="https://source.unsplash.com/random/400x400" class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">Pantai Bolongan Indah</h2>
                                <p class="text-lg font-light text-white">Lihat Selengkanya</p>
                            </div>
                        </div>
                    </div>
                    <img src="https://source.unsplash.com/random/400x400" class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a> 
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">Pantai Kejawanan</h2>
                                <p class="text-lg font-light text-white">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src="https://source.unsplash.com/random/400x400" class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
        </div>
        <br/>
        <div class="grid grid-cols-1 gap-6   lg:grid-cols-4 ">
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">Terasering Panyaweuan Argapura</h2>
                                <p class="text-lg font-light text-white">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src="https://source.unsplash.com/random/400x400" class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">Sunyaragi</h2>
                                <p class="text-lg font-light text-white">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src="https://source.unsplash.com/random/400x400" class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">Situ Cipatan</h2>
                                <p class="text-lg font-light text-white">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src="https://source.unsplash.com/random/400x400" class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a> 
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">Telaga Biru Cirerem</h2>
                                <p class="text-lg font-light text-white">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src="https://source.unsplash.com/random/400x400" class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
        </div>
        </div>
        <br/>
      <div>
        <Footer/>
      </div>
  </div>
  )
}

export default Destinasiwisata
