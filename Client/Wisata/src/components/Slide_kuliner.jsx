// eslint-disable-next-line no-unused-vars
import React from 'react'

import Kuliner1 from '../assets/images/kuliner_cirebon.png';

import Kuliner2 from '../assets/images/kuliner_idramayu.png';

import Kuliner3 from '../assets/images/kuliner_majalengka.png';

import Kuliner4 from '../assets/images/kuliner_kuningan.png';

// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

const Slide_layer = () => {
  return (
    <div>
  <div className="grid grid-cols-1 gap-6   lg:grid-cols-4 ">
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
                    <img src={Kuliner1} className="w-full z-0  h-full    object-fill example "></img>
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
                    <img src={Kuliner2} className="w-full z-0  h-full    object-fill example "></img>
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
                    <img src={Kuliner3} className="w-full z-0  h-full    object-fill example "></img>
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
                    <img src={Kuliner4} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
        </div>
        <br/>
        <div className="grid grid-cols-1 gap-6   lg:grid-cols-4 ">
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Terasering Panyaweuan Argapura</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={Kuliner1} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Sunyaragi</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={Kuliner3} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Situ Cipatan</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={Kuliner3} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a> 
            <a href="#" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Masjid Agung Cirebon</h2>
                                <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                            </div>
                        </div>
                    </div>
                    <img src={Kuliner4} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </a>
        </div>
        </div>
    
  )
}

export default Slide_layer