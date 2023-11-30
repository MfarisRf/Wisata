// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import background from "../assets/images/Backgroud_kwo.png"
import 'flowbite'

// import background from "../assets/images/Teksturs.png";
import GambarExploreWisata from '../assets/images/ExploreWisata.png'
import GambarTBC from '../assets/images/TBC.png'
import GambarPK from '../assets/images/PK.png'
import GambarPBi from '../assets/images/PBI.png'
import GambarPD from '../assets/images/PD.png'
import GambarTPA from '../assets/images/TPA.png'
import GambarSunyaragi from '../assets/images/Sunyaragi.png'
import GambarSC from '../assets/images/SC.png'
import GambarMAC from '../assets/images/MAC.png'


function Destinasiwisata() {
  return (
    <div className='bg-cover' style={{backgroundImage: `url(${background}) `}}>
    <Navbar/>
    <img className="h-2/5 w-5/5 pt-20" src={GambarExploreWisata} alt="image description"></img>
    <br/>
    <h2 className="font-bold  text-[#29446F] font-['Boogaloo'] text-[25px] pl-20 pb-5 tracking-[.1em]">Destinasi Wisata</h2>
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
  <div className="grid px-12 grid-cols-1 gap-6 lg:grid-cols-4 ">
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Pantai Kejawanan</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarPK} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Pantai Kejawanan</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarPK} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Pantai Kejawanan</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarPK} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Pantai Kejawanan</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarPK} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Pantai Kejawanan</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarPK} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Pantai Kejawanan</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarPK} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Pantai Kejawanan</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarPK} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Pantai Kejawanan</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarPK} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Pantai Kejawanan</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarPK} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1"> Telaga Biru Cirerem </h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarTBC} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Pantai Bolongan Indah</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkanya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarPBi} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a> 
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Pantai Dadap</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={GambarPD} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
</div>
        <br/>
        </div>
        <br/>
      <div>
        <Footer/>
      </div>
  </div>
  )
}

export default Destinasiwisata
