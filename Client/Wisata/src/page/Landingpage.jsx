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
import CardIndramayu from '../components/LP/CardIndramayu'
import CardMajalengka from '../components/LP/CardMajalengka'
import CardKuningan from '../components/LP/CardKuningan'

const Landingpage = () => {
  return (
    <div>
        <>
        <Navbar />
        <Carosel />
{/* Keterangan */}
<div className='bg-cover px-20 pb-40' style={{backgroundImage: `url(${background}) `}}>
    <div className="text-center tracking-wide font-['Boogaloo'] text-2xl text-456761 pb-10 pt-28 font-bold">
        <Type/>
    </div>
        <p className="text-center text-lg px-25 text-[#37645C]">Ciayumajakuning adalah sebuah wilayah di Jawa Barat, Indonesia yang terdiri dari Kota Cirebon, Kabupaten Cirebon, Kabupaten Indramayu, Kabupaten Majalengka, dan Kabupaten Kuningan. Wilayah ini merupakan kekuatan ekonomi yang baru dan besar di Jawa Barat sesudah kawasan Bandung Raya.</p>
    <div className='w-1209 pb-60 ml-auto mr-auto mt-20 border-2 border-[#206A5D] rounded-lg p-5' style={{backgroundImage: `url(${background2}) `}}>
        <h2 className="pb-5 font-bold text-2xl font-['Boogaloo'] text-[#2D8C14] pl-24">Rekomendasi Wisata</h2>
        {/* card A */}
        <div className='h-56 grid grid-cols-3 pl-24'>
        {/* card 1 */}
        <div className="max-w-md w-468 bg-f1f1e8 border border-f1f1e8 rounded-lg shadow-2xl h-70 grid grid-cols-2 content-start">
            <a href="/Destinasiwisata">
                <img className="w-234" src={Cirebon1} alt="wisata cirebon" />
            </a>
            <a href="/Destinasiwisata">
                <img className="w-234" src={Cirebon2} alt="wisata cirebon" />
            </a>
            <a href="/Destinasiwisata">
                <img className="w-234" src={Cirebon3} alt="wisata cirebon" />
            </a>
            <a href="/Destinasiwisata">
                <img className="w-234" src={Cirebon4} alt="wisata cirebon" />
            </a>
            <div className="text-[#29446F] w-80">
                <a href="/Destinasiwisata">
                    <h5 className="mb-2 text-5 font-bold pl-3 pt-1">Wisata cirebon</h5>
                </a>
                <a href="/Destinasiwisata" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
                Lihat selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            </div>

            {/* card 2 */}
            <div className='pl-28'>            {/* jarak*/}
            <div className="max-w-sm w-468 bg-f1f1e8 border border-f1f1e8 rounded-lg shadow-2xl h-70 grid grid-cols-2 content-start">
                <a href="/Destinasiwisata">
                    <img className="w-234" src={Indramayu1} alt="wisata indramayu" />
                </a>
                <a href="/Destinasiwisata">
                    <img className="w-234" src={Indramayu2} alt="wisata indramayu" />
                </a>
                <a href="/Destinasiwisata">
                    <img className="w-234" src={Indramayu3} alt="wisata indramayu" />
                </a>
                <a href="/Destinasiwisata">
                    <img className="w-234" src={Indramayu4} alt="wisata indramayu" />
                </a>
                <div className="text-[#29446F] w-80 ">
                    <a href="/Destinasiwisata">
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
            <a href="/Destinasiwisata">
                <img className="w-234" src={Majalengka1} alt="wisata majalengka" />
            </a>
            <a href="/Destinasiwisata">
                <img className="w-234" src={Majalengka2} alt="wisata majalengka" />
            </a>
            <a href="/Destinasiwisata">
                <img className="w-234" src={Majalengka3} alt="wisata majalengka" />
            </a>
            <a href="/Destinasiwisata">
                <img className="w-234" src={Majalengka4} alt="wisata majalengka" />
            </a>
            <div className="text-[#29446F] w-80">
                <a href="/Destinasiwisata">
                    <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Wisata majalengka</h5>
                </a>
                <a href="/Destinasiwisatas" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ">
                Lihat selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            </div>

            {/* card 2 */}
            <div className='pl-28'>            {/* jarak*/}
            <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg shadow-2xl h-70 grid grid-cols-2 content-start">
                <a href="/Destinasiwisata">
                    <img className="w-234" src={Kuningan1} alt="wisata kuningan" />
                </a>
                <a href="/Destinasiwisata">
                    <img className="w-234" src={Kuningan2} alt="wisata kuningan" />
                </a>
                <a href="/Destinasiwisata">
                    <img className="w-234" src={Kuningan3} alt="wisata kuningan" />
                </a>
                <a href="/Destinasiwisata">
                    <img className="w-234" src={Kuningan4} alt="wisata kuningan" />
                </a>
                <div className="text-[#29446F] w-80">
                    <a href="/Destinasiwisata">
                        <h5 className="mb-2 text-10 font-bold pl-3 pt-1">Wisata kuningan</h5>
                    </a>
                    <a href="/Destinasiwisata" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center">
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
            <h2 className="font-bold text-xl pb-10 text-center text-[#2D8C14] font-['Boogaloo']">Rekomendasi Oleh-oleh</h2>
                <div className='ml-64 pb-11'>
                    <CardCirebon /> 
                </div>
                {/* content1 */}
                <div>
                    <div className='ml-96 w-Lebar h-64 bg-[#D5EDC7] p-5'>
                    <p className="ml-48 text-[#29446F]">
                        Oleh-oleh Cirebon merupakan bagian dari potensi wisata yang dipengaruhi kehadirannya di Pesisir Barat Jawa. Terdapat berbagai jenis oleh-oleh khas Cirebon yang bisa anda pilih dan sesuaikan dengan kebutuhan anda. Mulai dari makanan hingga kain tradisional seperti batik dan kain lainnya. Sebab kota Cirebon mempunyai sumber daya alam yang kaya dan melimpah yang bisa dijadikan oleh-oleh. Banyak juga makanan kecil dengan cita rasa yang berbeda, kerupuk, minuman, hingga kenang-kenangan berupa aksesoris maupun pernak-pernik hiasan tertentu.
                    </p>
                    </div>
                </div>
            </div>

            <br /><br />

            {/* content 2 */}
            <div className='ml-kanan pb-11'>
                    <CardIndramayu /> 
            </div>
{/* batas Card Indramayu*/}
            <div>
                <div className='ml-96 w-Lebar h-64 bg-[#D5EDC7] p-5'>
                    <p className='ml-5 pr-64 text-justify text-[#29446F]'>
                    Indramayu merupakan salah satu daerah di Jawa Barat yang dijuluki sebagai kota Mangga dan terkenal dengan jutaan tempat wisata menarik dan mengesankan. Selain menjadi salah satu kota penghasil mangga Cengkir terbesar, tempat ini juga banyak mempunyai oleh-oleh khas yang berbahan dasar buah tersebut. Selain mangga, ternyata masih banyak oleh-oleh lain yang layak dibeli, dibawa pulang, dan dibagikan kepada orang tersayang. Seperti batik Indramayu, kue koci, dan masih banyak lainnya. 
                    </p>
                </div>
            </div>
{/* batas Card Indramayu*/}

            <br /><br />

            {/* content 3 */}
            <div className='ml-64 pb-10'>
                    <CardMajalengka /> 
            </div>
{/* batas */}
            <div>
                <div className='ml-96 w-Lebar h-64 bg-[#D5EDC7] p-5'>
                    <p className='ml-48 text-[#29446F]'>
                    Majalengka dikenal dengan sebutan Kota Angin, dengan daya tarik wisata alam yang menarik, masakan khas dan kerajinan tangan yang unik. Menampilkan beragam pesona alam dengan cita rasa jajanan khas, menjadikan Majalengka sebagai tempat liburan idaman banyak orang. Musim libur panjang bisa menjadi  waktu lain untuk mencapai hal tersebut. Tak lengkap rasanya jika berlibur tanpa membawa oleh-oleh khas. Banyak oleh-oleh khas Majalengka yang digemari wisatawan seperti batik Majalengka, kecap asli Majalengka, Kalua jeruk, gula cakar dan oleh-oleh lainnya. 
                    </p>
                </div>
            </div>
{/* batas */}

            <br /><br />

            {/* content 4 */}
            <div className='ml-kanan pb-10'>
                    <CardKuningan /> 
            </div>
{/* batas */}
<div>
                <div className='ml-96 w-Lebar h-64 bg-[#D5EDC7] p-4'>
                    <p className='ml-5 pr-64 text-justify text-[#29446F]'>
                    Kuningan merupakan salah satu kota di Jawa Barat yang terkenal dengan keindahan alamnya. Tanahnya yang indah menarik wisatawan untuk berkunjung secara rutin. Anda juga bisa mencicipi berbagai  makanan yang sangat lezat dan kaya akan rempah-rempah. Tidak hanya keindahan alamnya, Kuningan juga memikat wisatawan dengan banyaknya oleh-oleh terkenal. Banyak oleh-oleh khas kota ini yang bisa Anda bawa pulang setelah mengunjungi tempat wisata terkenal di Kuningan. Mulai dari jajanan hingga kerajinan tangan yang siap dijadikan souvenir menarik anda selama liburan seperti batik Kuningan, lepet, tahu susu, minuman jeniper dan masih banyak lagi lainnya. 
                    </p>
                </div>
            </div>
{/* batas */}

            <br></br><br />

            <Layer_lp />
        </div>
        <Footer />
        </>
    </div>
  )
}

export default Landingpage