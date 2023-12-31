// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carosel from '../components/Carosel'
import 'flowbite'
import Type from '../components/type'

import background from "../assets/images/Teksturs.png";
import background2 from "../assets/images/Teksturs2.png";

import Cirebon1 from '../assets/images/wisata_cirebon1.png';
import Cirebon2 from '../assets/images/wisata_cirebon2.png';
import Cirebon3 from '../assets/images/wisata_cirebon3.png';
import Cirebon4 from '../assets/images/wisata_cirebon4.png';

import Indramayu1 from '../assets/images/wisata_indramayu1.png';
import Indramayu2 from '../assets/images/wisata_indramayu2.png';
import Indramayu3 from '../assets/images/wisata_indramayu3.png';
import Indramayu4 from '../assets/images/wisata_indramayu4.png';

import Majalengka1 from '../assets/images/wisata_majalengka1.png';
import Majalengka2 from '../assets/images/wisata_majalengka2.png';
import Majalengka3 from '../assets/images/wisata_majalengka3.png';
import Majalengka4 from '../assets/images/wisata_majalengka4.png';

import Kuningan1 from '../assets/images/wisata_kuningan1.png';
import Kuningan2 from '../assets/images/wisata_kuningan2.png';
import Kuningan3 from '../assets/images/wisata_kuningan3.png';
import Kuningan4 from '../assets/images/wisata_kuningan4.png';
import Slide_layer from '../components/Slide_layer'
import Layer_lp from '../components/Layer_lp'
import CardCirebon from '../components/LP/CardCirebon'

const Landingpage = () => {
  return (
    <div>
        <>
        <Navbar />
        <Carosel />
{/* Keterangan */}
<div className='bg-cover px-20 pb-40' style={{backgroundImage: `url(${background}) `}}>
    <div className='text-center text-2xl font-Boogaloo text-456761 pb-10 pt-28 font-bold'>
        <Type/>
    </div>
        <p className='text-center font-sm px-25 text-456761'>Ciayumajakuning adalah sebuah wilayah di Jawa Barat, Indonesia yang terdiri dari Kota Cirebon, Kabupaten Cirebon, Kabupaten Indramayu, Kabupaten Majalengka, dan Kabupaten Kuningan. Wilayah ini merupakan kekuatan ekonomi yang baru dan besar di Jawa Barat sesudah kawasan Bandung Raya.</p>
    <div className='w-1209 pb-60 ml-auto mr-auto mt-20 border-4 border-[#206A5D] rounded-lg p-5' style={{backgroundImage: `url(${background2}) `}}>
        <h2 className='pb-5 font-bold text-2xl font-Boogaloo text-[#2D8C14] pl-24'>Rekomendasi Wisata</h2>
        {/* card A */}
        <div className='h-56 grid grid-cols-3 pl-24'>
        {/* card 1 */}
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

            {/* card 2 */}
            <div className='pl-28'>            {/* jarak*/}
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
        </div>
        </div>            {/* jarak*/}

        {/* Card B */}
        <div className='h-56 grid grid-cols-3 content-start pl-24 pt-28'>
        {/* card 1 */}
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

            {/* card 2 */}
            <div className='pl-28'>            {/* jarak*/}
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
        </div>
        </div> {/* jarak*/}

{/* tanda */}
    </div>
</div>
        <Slide_layer />
        <div className='pt-10 bg-cover' style={{backgroundImage: `url(${background}) `}} >
            <div >
                <div>
                    <CardCirebon /> 
                </div>
                <h2 className='font-bold text-lg pb-10 text-center text-[#2D8C14]'>Rekomendasi Oleh-oleh</h2>
                {/* content1 */}
                <div>
                    <div className='ml-52'>
                    <p>
                        Oleh-oleh Cirebon merupakan bagian dari potensi wisata yang dipengaruhi kehadirannya di Pesisir Barat Jawa. Terdapat berbagai jenis oleh-oleh khas Cirebon yang bisa anda pilih dan sesuaikan dengan kebutuhan anda. Mulai dari makanan hingga kain tradisional seperti batik dan kain lainnya. Sebab kota Cirebon mempunyai sumber daya alam yang kaya dan melimpah yang bisa dijadikan oleh-oleh. Banyak juga makanan kecil dengan cita rasa yang berbeda, kerupuk, minuman, hingga kenang-kenangan berupa aksesoris maupun pernak-pernik hiasan tertentu.
                    </p>
                    </div>
                </div>
            </div>

            <br />

            {/* content 2 */}
            <div className='bg-[#D5EDC7] w-7/12 ml-56 rounded-r-lg'>
{/* batas Card Indramayu*/}
            <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg shadow-2xl h-70 grid grid-cols-2 content-start ml-auto">
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
                <div className="text-[#29446F] w-80 font-Boogaloo pb-7">
                    <a href="#">
                        <h5 className="mb-2 text-5 font-bold pl-20 mt-5"> Wisata indramyu</h5>
                    </a>
                </div>
            </div>
{/* batas Card Indramayu*/}
            </div>

            <br />

            {/* content 3 */}
            <div className='bg-[#D5EDC7] w-7/12 ml-56 rounded-l-lg'>
{/* batas */}
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
                <div className="text-[#29446F] w-80 font-Boogaloo pb-7">
                    <a href="#">
                        <h5 className="mb-2 text-5 font-bold pl-20 mt-5"> Wisata indramyu</h5>
                    </a>
                </div>
            </div>
{/* batas */}
            </div>

            <br />

            {/* content 4 */}
            <div className='bg-[#D5EDC7] w-7/12 ml-56 rounded-r-lg'>
{/* batas */}
            <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg shadow-2xl h-70 grid grid-cols-2 content-start ml-auto">
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
                <div className="text-[#29446F] w-80 font-Boogaloo pb-7">
                    <a href="#">
                        <h5 className="mb-2 text-5 font-bold pl-20 mt-5"> Wisata indramyu</h5>
                    </a>
                </div>
            </div>
{/* batas */}
            </div>

            <br></br><br />

            <Layer_lp />
        </div>
        <Footer />
        </>
    </div>
  )
}

export default Landingpage