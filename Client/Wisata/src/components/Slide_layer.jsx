// eslint-disable-next-line no-unused-vars
import React from 'react'

import Majalengka1 from '../assets/images/wisata_majalengka1.png';
import Majalengka2 from '../assets/images/wisata_majalengka2.png';
import Majalengka3 from '../assets/images/wisata_majalengka3.png';
import Majalengka4 from '../assets/images/wisata_majalengka4.png';

import Cirebon1 from '../assets/images/wisata_cirebon1.png';
import Cirebon2 from '../assets/images/wisata_cirebon2.png';
import Cirebon3 from '../assets/images/wisata_cirebon3.png';
import Cirebon4 from '../assets/images/wisata_cirebon4.png';

import Indramayu1 from '../assets/images/wisata_indramayu1.png';
import Indramayu2 from '../assets/images/wisata_indramayu2.png';
import Indramayu3 from '../assets/images/wisata_indramayu3.png';
import Indramayu4 from '../assets/images/wisata_indramayu4.png';

import Kuningan1 from '../assets/images/wisata_kuningan1.png';
import Kuningan2 from '../assets/images/wisata_kuningan2.png';
import Kuningan3 from '../assets/images/wisata_kuningan3.png';
import Kuningan4 from '../assets/images/wisata_kuningan4.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles.css';
import { Pagination } from 'swiper/modules';

const Slide_layer = () => {
  return (
    <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg shadow-2xl h-70 grid grid-cols-2 content-start">
            <a href="#">
                <img className="w-234" src={Majalengka1} alt="wisata majalengka" />
            </a>
            <a href="#">
                <img className="w-234" src={Majalengka2} alt="wisata majalengka" />
            </a>
            <a href="#">
                <img className="w-234" src={Majalengka3} alt="wisata majalengka" />
            </a>
            <a href="#">
                <img className="w-234" src={Majalengka4} alt="wisata majalengka" />
            </a>
            <div className="text-[#29446F] w-80 font-Boogaloo">
                <a href="#">
                    <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Wisata majalengka</h5>
                </a>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ">
                Lihat selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div className="max-w-md w-468 bg-f1f1e8 border border-gray-200 rounded-lg shadow-2xl h-70 grid grid-cols-2 content-start">
            <a href="#">
                <img className="w-234" src={Cirebon1} alt="wisata cirebon" />
            </a>
            <a href="#">
                <img className="w-234" src={Cirebon2} alt="wisata cirebon" />
            </a>
            <a href="#">
                <img className="w-234" src={Cirebon3} alt="wisata cirebon" />
            </a>
            <a href="#">
                <img className="w-234" src={Cirebon4} alt="wisata cirebon" />
            </a>
            <div className="text-[#29446F] w-80 font-Boogaloo">
                <a href="#">
                    <h5 className="mb-2 text-5 font-bold pl-3 pt-1">Wisata cirebon</h5>
                </a>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                Lihat selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg shadow-2xl h-70 grid grid-cols-2 content-start">
                <a href="#">
                    <img className="w-234" src={Indramayu1} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Indramayu2} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Indramayu3} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Indramayu4} alt="wisata indramayu" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo">
                    <a href="#">
                        <h5 className="mb-2 text-5 font-bold pl-3 pt-1"> Wisata indramyu</h5>
                    </a>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg shadow-2xl h-70 grid grid-cols-2 content-start">
                <a href="#">
                    <img className="w-234" src={Kuningan1} alt="wisata kuningan" />
                </a>
                <a href="#">
                    <img className="w-234" src={Kuningan2} alt="wisata kuningan" />
                </a>
                <a href="#">
                    <img className="w-234" src={Kuningan3} alt="wisata kuningan" />
                </a>
                <a href="#">
                    <img className="w-234" src={Kuningan4} alt="wisata kuningan" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo">
                    <a href="#">
                        <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Wisata kuningan</h5>
                    </a>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slide_layer