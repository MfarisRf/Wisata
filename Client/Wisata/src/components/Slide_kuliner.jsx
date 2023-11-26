// eslint-disable-next-line no-unused-vars
import React from 'react'

import Kuliner1 from '../assets/images/kuliner_cirebon.png';

import Kuliner2 from '../assets/images/kuliner_idramayu.png';

import Kuliner3 from '../assets/images/kuliner_majalengka.png';

import Kuliner4 from '../assets/images/kuliner_kuningan.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Slide_layer = () => {
  return (
    <div className='bg-[#F1F1E8] py-10'>
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
        className="mySwiper" >
        <SwiperSlide className='pl-5'>
            <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70 ">
            <a href="#">
                <img className="px-9/12 rounded-t-lg" src={Kuliner1} alt="wisata majalengka" />
            </a>
            <div className="text-[#29446F] w-80 font-Boogaloo">
                <a href="/Kuliner">
                    <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Kuliner Cirebon</h5>
                </a>
                <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ">
                Lihat selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            </div>
            </SwiperSlide>
        <SwiperSlide className='pl-20'>
        <div className="max-w-md w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
            <a href="/Kuliner">
                <img className="px-9/12 rounded-t-lg" src={Kuliner2} alt="wisata cirebon" />
            </a>
            <div className="text-[#29446F] w-80 font-Boogaloo">
                <a href="/Kuliner">
                    <h5 className="mb-2 text-5 font-bold pl-3 pt-1">Kuliner Indramayu</h5>
                </a>
                <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                Lihat selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='pl-36'>
        <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
                <a href="/Kuliner">
                    <img className="px-9/12 rounded-t-lg" src={Kuliner3} alt="wisata indramayu" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo">
                    <a href="/Kuliner">
                        <h5 className="mb-2 text-5 font-bold pl-3 pt-1">Kuliner Majalengka</h5>
                    </a>
                    <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='pl-52'>
        <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
                <a href="/Kuliner">
                    <img className="px-9/12 rounded-t-lg" src={Kuliner4} alt="wisata kuningan" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo">
                    <a href="/Kuliner">
                        <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Kuliner Kuningan</h5>
                    </a>
                    <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='pl-72'>
        <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
                <a href="/Kuliner">
                    <img className="px-9/12 rounded-t-lg" src={Kuliner1} alt="wisata kuningan" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo">
                    <a href="/Kuliner">
                        <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Kuliner Cirebon</h5>
                    </a>
                    <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='pl-80'>
        <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
                <a href="/Kuliner">
                    <img className="px-9/12 rounded-t-lg" src={Kuliner2} alt="wisata kuningan" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo">
                    <a href="/Kuliner">
                        <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Wisata Indramayu</h5>
                    </a>
                    <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
                                                                   {/* Content2 */} <br /><br />
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
        className="mySwiper" >
        <SwiperSlide className='pl-5'>
            <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70 ">
            <a href="#">
                <img className="px-9/12 rounded-t-lg" src={Kuliner1} alt="wisata majalengka" />
            </a>
            <div className="text-[#29446F] w-80 font-Boogaloo">
                <a href="/Kuliner">
                    <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Kuliner Cirebon</h5>
                </a>
                <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ">
                Lihat selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            </div>
            </SwiperSlide>
        <SwiperSlide className='pl-20'>
        <div className="max-w-md w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
            <a href="/Kuliner">
                <img className="px-9/12 rounded-t-lg" src={Kuliner2} alt="wisata cirebon" />
            </a>
            <div className="text-[#29446F] w-80 font-Boogaloo">
                <a href="/Kuliner">
                    <h5 className="mb-2 text-5 font-bold pl-3 pt-1">Kuliner Indramayu</h5>
                </a>
                <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                Lihat selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='pl-36'>
        <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
                <a href="/Kuliner">
                    <img className="px-9/12 rounded-t-lg" src={Kuliner3} alt="wisata indramayu" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo">
                    <a href="/Kuliner">
                        <h5 className="mb-2 text-5 font-bold pl-3 pt-1">Kuliner Majalengka</h5>
                    </a>
                    <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='pl-52'>
        <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
                <a href="/Kuliner">
                    <img className="px-9/12 rounded-t-lg" src={Kuliner4} alt="wisata kuningan" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo">
                    <a href="/Kuliner">
                        <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Kuliner Kuningan</h5>
                    </a>
                    <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='pl-72'>
        <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
                <a href="/Kuliner">
                    <img className="px-9/12 rounded-t-lg" src={Kuliner1} alt="wisata kuningan" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo">
                    <a href="/Kuliner">
                        <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Kuliner Cirebon</h5>
                    </a>
                    <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='pl-80'>
        <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
                <a href="/Kuliner">
                    <img className="px-9/12 rounded-t-lg" src={Kuliner2} alt="wisata kuningan" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo">
                    <a href="/Kuliner">
                        <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Wisata Indramayu</h5>
                    </a>
                    <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
                                                            {/* Contnet3 */} <br /><br />
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
        className="mySwiper" >
        <SwiperSlide className='pl-5'>
            <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70 ">
            <a href="#">
                <img className="px-9/12 rounded-t-lg" src={Kuliner1} alt="wisata majalengka" />
            </a>
            <div className="text-[#29446F] w-80 font-Boogaloo">
                <a href="/Kuliner">
                    <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Kuliner Cirebon</h5>
                </a>
                <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ">
                Lihat selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            </div>
            </SwiperSlide>
        <SwiperSlide className='pl-20'>
        <div className="max-w-md w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
            <a href="/Kuliner">
                <img className="px-9/12 rounded-t-lg" src={Kuliner2} alt="wisata cirebon" />
            </a>
            <div className="text-[#29446F] w-80 font-Boogaloo">
                <a href="/Kuliner">
                    <h5 className="mb-2 text-5 font-bold pl-3 pt-1">Kuliner Indramayu</h5>
                </a>
                <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                Lihat selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='pl-36'>
        <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
                <a href="/Kuliner">
                    <img className="px-9/12 rounded-t-lg" src={Kuliner3} alt="wisata indramayu" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo">
                    <a href="/Kuliner">
                        <h5 className="mb-2 text-5 font-bold pl-3 pt-1">Kuliner Majalengka</h5>
                    </a>
                    <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='pl-52'>
        <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
                <a href="/Kuliner">
                    <img className="px-9/12 rounded-t-lg" src={Kuliner4} alt="wisata kuningan" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo">
                    <a href="/Kuliner">
                        <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Kuliner Kuningan</h5>
                    </a>
                    <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='pl-72'>
        <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
                <a href="/Kuliner">
                    <img className="px-9/12 rounded-t-lg" src={Kuliner1} alt="wisata kuningan" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo">
                    <a href="/Kuliner">
                        <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Kuliner Cirebon</h5>
                    </a>
                    <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='pl-80'>
        <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg drop-shadow-xl h-70">
                <a href="/Kuliner">
                    <img className="px-9/12 rounded-t-lg" src={Kuliner2} alt="wisata kuningan" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo">
                    <a href="/Kuliner">
                        <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Wisata Indramayu</h5>
                    </a>
                    <a href="/Kuliner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
    
  )
}

export default Slide_layer