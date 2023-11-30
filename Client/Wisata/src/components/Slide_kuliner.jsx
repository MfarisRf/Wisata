// eslint-disable-next-line no-unused-vars
import React from 'react'

import Kuliner1 from '../assets/images/kuliner1.png';
import Kuliner2 from '../assets/images/kuliner2.png';
import Kuliner3 from '../assets/images/kuliner3.png';
import Kuliner4 from '../assets/images/kuliner4.png';
import Kuliner5 from '../assets/images/kuliner5.png';
import Kuliner6 from '../assets/images/kuliner6.png';
import Kuliner7 from '../assets/images/kuliner7.png';
import Kuliner8 from '../assets/images/kuliner8.png';

// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

const Slide_layer = () => {
  return (
    <div className="grid px-12 grid-cols-1 gap-6 lg:grid-cols-4 ">
    <a href="#" className=" shadow-2xl relative ">
        <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
            <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                        <h2 className="mb-2 text-10 pl-3 pt-1 font-extrabold">Empal Gentong</h2>
                        <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                    </div>
                </div>
            </div>
            <img src={Kuliner1} className="w-full z-0 h-full object-fill example "></img>
        </div>
    </a>
    <a href="#" className=" shadow-2xl relative ">
        <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
            <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                        <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Sop Buntut Bakar</h2>
                        <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                    </div>
                </div>
            </div>
            <img src={Kuliner2} className="w-full z-0 h-full object-fill example "></img>
        </div>
    </a>
    <a href="#" className=" shadow-2xl relative ">
        <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
            <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                <div className="w-full h-full p-5 relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                        <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Lumpia Basah</h2>
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
                        <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Lotek</h2>
                        <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                    </div>
                </div>
            </div>
            <img src={Kuliner4} className="w-full z-0  h-full    object-fill example "></img>
        </div>
    </a>
    <a href="#" className=" shadow-2xl relative ">
        <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
            <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                        <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Pedesan Entog</h2>
                        <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                    </div>
                </div>
            </div>
            <img src={Kuliner5} className="w-full z-0  h-full    object-fill example "></img>
        </div>
    </a>
    <a href="#" className=" shadow-2xl relative ">
        <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
            <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                        <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Tutut</h2>
                        <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                    </div>
                </div>
            </div>
            <img src={Kuliner6} className="w-full z-0  h-full    object-fill example "></img>
        </div>
    </a>
    <a href="#" className=" shadow-2xl relative ">
        <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
            <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                        <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Lotek</h2>
                        <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                    </div>
                </div>
            </div>
            <img src={Kuliner7} className="w-full z-0  h-full    object-fill example "></img>
        </div>
    </a>
    <a href="#" className=" shadow-2xl relative ">
        <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
            <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                        <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Rumbah</h2>
                        <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                    </div>
                </div>
            </div>
            <img src={Kuliner8} className="w-full z-0  h-full    object-fill example "></img>
        </div>
    </a>
    <a href="#" className=" shadow-2xl relative ">
        <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
            <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                        <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Empal Gentong</h2>
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
                        <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Sop Buntut Bakar</h2>
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
                        <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Lumpia Basah</h2>
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
                        <h2 className="mb-2 text-10 font-bold pl-3 pt-1">Lotek</h2>
                        <p className="mb-2 text-10 font-bold pl-3 pt-1">Lihat Selengkapnya</p>
                    </div>
                </div>
            </div>
            <img src={Kuliner4} className="w-full z-0  h-full    object-fill example "></img>
        </div>
    </a>
</div>
    
  )
}

export default Slide_layer