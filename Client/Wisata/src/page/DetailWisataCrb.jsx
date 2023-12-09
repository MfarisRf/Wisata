// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MapBox from '../components/MapBox'
import 'flowbite'

// import background from "../assets/images/Teksturs.png";
import GambarDetwisCrb from '../assets/images/DetwisCrb.png'
import GambarPK from '../assets/images/PK.png'


function DetailWisataCrb() {
    return (
        <div className='bg-[#D5EDC7]'>
            <Navbar/>
            <img className="h-2/5 w-5/5 pt-20" src={GambarDetwisCrb} alt="image description"></img>
            <br/>


        <div className="grid grid-cols-2 gap-8">
            <div>
                <figure className="max-w-lg">
                    <img className="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={GambarPK} alt="image description"></img>
                    <figcaption className="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F] dark:text-[#29446F] font-['libre_baskerville']">Pantai Kejawanan</figcaption>
                    <p className="ml-20 w-full text-[#29446F] text-justify ">Di Pantai Kejawanan pemandangan matahari terbit dapat disaksikan dengan posisi yang bagus, yaitu tepat di tengah-tengah pantai. Di sana juga kita bisa berwisata keliling pantai dengan menggunakan perahu motor milik nelayan, dengan tarif yang cukup murah yaitu seharga lima ribu Rupiah saja per orang, yang bahkan bisa di tawar hingga sebesar tiga ribu rupiah saja. Selain itu, di sana juga banyak disewakan perahu karet dengan tarif mulai seharga lima ribu Rupiah hingga sepuluh ribu Rupiah per perahu setiap satu jamnya,saat libur lebaran/jika sedang beruntung kita bisa melihat kapal nelayan/kapal tunda karena letaknya dekat dengan Pelabuhan Cirebon dan kita bisa berfoto di atas perahu dan melihat nelayan membawa hasil laut.</p>
                </figure>
            </div>
        <div className="p-12">
      <div className="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-[#22B57F] border-2">
        <h1 className="text-2xl font-extrabold mb-4 text-[#091426] font-['libre_baskerville']">Pantai Kejawanan</h1>
        <p className="flex text-[#091426] text-left font-semibold">Alamat<p className='ml-10'>: Jl. Pelabuhan Perikanan, Pegambiran, Kec. Lemahwungkuk, Cirebon.</p></p>
        <p className="flex text-[#091426] text-left font-semibold">Jam Buka <p className='ml-5'>: Rabu - Minggu  10.00 - 17.00 WIB</p></p>
        <p className="flex text-[#091426] text-left font-semibold">Sosisal Media</p>

        <div className="bg-[#D5EDC7] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Tiket</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left font-semibold">Gratis</h3>
            </div>

            <ul className="list-disc list-inside">

            </ul>
        </div>
      </div>
    </div>
        </div>
        <br/>
{/* Map */}
<div className="p-12 z-[0] m-[10]">
<div class="box-container p-1 m-[10] bg-gray-200 z-[0] rounded-md shadow-md border-2 border-[#22B57F]">
      <MapBox />
</div>
        <br/>
        </div>
            <Footer/>
    </div>
    )
}

export default DetailWisataCrb