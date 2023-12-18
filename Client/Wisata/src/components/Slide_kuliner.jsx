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
        <div className="  h-full relative shadow-md rounded-lg shadow-black overflow-hidden group ">
            <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-[#2D8C14] transition-all ease-in-out duration-500  ">
                <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                        <h2 className="mb-2 text-10 pl-3 pt-1 font-extrabold">Empal Gentong</h2>
                        <a href="/DetailKulinerCirebon" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F1F1E8]">
                        lihat selengkapnya
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
            <img src={Kuliner1} className="w-full z-0 h-full object-fill example "></img>
        </div>
    </a>
    
</div>
    
  )
}

export default Slide_layer