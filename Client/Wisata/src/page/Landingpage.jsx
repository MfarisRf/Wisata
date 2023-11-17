// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carosel from '../components/Carosel'
import 'flowbite'
import background from "../assets/images/Teksturs.png";

const Landingpage = () => {
  return (
    <div>
        <>
        <Navbar />
        <Carosel />
{/* Keterangan */}
<div className='bg-f1f1e8' style={{ backgroundImage: `url(${background})`}}>
    <h3 className='text-center text-2xl font-Boogaloo text-456761 pb-10 pt-28'>Tentang CIAYUMAJAKUNING</h3>
        <p className='text-center font-sm px-25 text-456761'>Ciayumajakuning adalah sebuah wilayah di Jawa Barat, Indonesia yang terdiri dari Kota Cirebon, Kabupaten Cirebon, Kabupaten Indramayu, Kabupaten Majalengka, dan Kabupaten Kuningan. Wilayah ini merupakan kekuatan ekonomi yang baru dan besar di Jawa Barat sesudah kawasan Bandung Raya.</p>
    <div className='w-4/6 ml-60 mt-20 p-5 border-4 border-green-500 rounded-lg bg-f1f1e8'>
        <h2 className='pb-10 font-bold text-2xl'>Rekomendasi Wisata</h2>
        {/* image */}

        <div className='h-56 grid grid-cols-3 gap-4 content-start'>
        {/* card 1 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="wisata cirebon" />
            </a>
            <a href="#">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="wisata cirebon" />
            </a>
            <a href="#">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="wisata cirebon" />
            </a>
            <a href="#">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="wisata cirebon" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wisata cirebon</h5>
                </a>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Lihat selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            </div>
        <br />
            {/* card 2 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="wisata cirebon" />
                </a>
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="wisata cirebon" />
                </a>
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="wisata cirebon" />
                </a>
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="wisata cirebon" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wisata cirebon</h5>
                    </a>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Lihat selengkapnya
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    

{/* tanda */}
    </div>
</div>
        <Footer />
        </>
    </div>
  )
}

export default Landingpage