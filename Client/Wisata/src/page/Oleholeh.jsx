// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import background from "../assets/images/Backgroud_kwo.png"
import 'flowbite'
import Gambarnfo from '../assets/images/NFO 1920x689.png'
import GambarBMG from '../assets/images/BMG.png'
import GambarBIE from '../assets/images/BIE.png'
import GambarBGG from '../assets/images/BGG.png'
import GambarBK from '../assets/images/BK.png'
import GambarTP from '../assets/images/TP.png'
import GambarKK from '../assets/images/KK.png'
import GambarKJ from '../assets/images/KJ.png'
import GambarLepet from '../assets/images/Lepet.png'
import GambarRengginang from '../assets/images/Rengginang.png'
import GambarMI from '../assets/images/MI.png'
import GambarGC from '../assets/images/GC.png'
import GambarTS from '../assets/images/TS.png' 


function Oleholeh() {
  return (
    <div className='bg-cover' style={{backgroundImage: `url(${background}) `}}>
    <Navbar/>
    <img className="h-2/5 w-5/5 pt-24" src={Gambarnfo} alt="image description"></img>
    <br/>
    <h2 className="font-bold  text-[#29446F] font-['Boogaloo'] text-[25px] pl-20 pb-5 tracking-[.1em]">Oleh Oleh</h2>
    {/* Card */}

    {/* Card pennutup */}

  <div className="flex items-center justify-between w-full sm:w-96">
  <div className="relative w-full mr-2 pl-20">
  <input type="search" id="search-dropdown" className="block p-2.5 w-72 z-20 text-sm text-gray-900 rounded-lg border-s-[#2D8C14] border-s-1 border border-[#2D8C14] focus:ring-[#2D8C14] focus:border-[#2D8C14] dark:bg-gray-700 dark:border-s-gray-700 dark:border-[#2D8C14] dark:placeholder-gray-400 dark:text-white" placeholder="Search" required />

  <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-gray-900 bg-[#D5EDC7] bg-opacity-80 rounded-lg border border-[#2D8C14] hover:bg-opacity-90 focus:ring-1 focus:outline-none focus:ring-[#2D8C14] dark:bg-gray-800 dark:border-s-gray-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900">
    <svg className="w-10 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    </svg>
    <span className="sr-only">Search</span>
  </button>
</div>



<form>
    <div className="relative flex-shrink-0 z-10 inline-flex items-center">
        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-[#B3B3B3] sr-only dark:text-[#B3B3B3]">Cari</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="ml-32 w-48 flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-[#B3B3B3] bg-[#F1F1E8] border border-[#2D8C14] rounded-lg hover:bg-[#F1F1E8] dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-[#B3B3B3] dark:border-gray-600" type="button">All <svg className="w-2.5 h-2.5 ms-32" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg></button>
        <div id="dropdown" className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 bg-[#F1F1E8]" aria-labelledby="dropdown-button">
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
<br/>
<div>
  <div class="grid grid-cols-1 gap-6 px-8 lg:grid-cols-4 ">
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="mb-2 text-10 font-bold pl-3 pt-1">Batik Mega Mendung</h2>
                                <p class="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarBMG} class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="mb-2 text-10 font-bold pl-3 pt-1"> Batik Iwak Etong </h2>
                                <p class="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarBIE} class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="mb-2 text-10 font-bold pl-3 pt-1">Batik Gedung Gincu</h2>
                                <p class="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkanya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarBGG} class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a> 
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="mb-2 text-10 font-bold pl-3 pt-1">Batik Bokor</h2>
                                <p class="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarBK} class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
        </div>
        <br/>
        <div class="grid grid-cols-1 gap-6 px-8 lg:grid-cols-4 ">
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="mb-2 text-10 font-bold pl-3 pt-1">Tape Ketan</h2>
                                <p class="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarTP} class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="mb-2 text-10 font-bold pl-3 pt-1">Kue Koci</h2>
                                <p class="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarKK} class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="mb-2 text-10 font-bold pl-3 pt-1">Kalua Jeruk</h2>
                                <p class="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarKJ} class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a> 
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="mb-2 text-10 font-bold pl-3 pt-1">Lepet</h2>
                                <p class="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarLepet} class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
        </div>
        </div>
        <br/>
        <div class="grid grid-cols-1 gap-6 px-8 lg:grid-cols-4 ">
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="mb-2 text-10 font-bold pl-3 pt-1">Rengginang</h2>
                                <p class="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarRengginang} class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="mb-2 text-10 font-bold pl-3 pt-1">Mangga Indonesia</h2>
                                <p class="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarMI} class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="mb-2 text-10 font-bold pl-3 pt-1">Gula Cakar</h2>
                                <p class="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarGC} class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a> 
            <a href="#" class=" shadow-2xl relative ">
                <div class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div class="w-full h-full   p-5   relative">
                            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 class="mb-2 text-10 font-bold pl-3 pt-1">Tahu Susu</h2>
                                <p class="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarTS} class="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
        </div>

    <br/>
      <div>
        <Footer/>
      </div>
  </div>
  )
}

export default Oleholeh
