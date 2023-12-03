// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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


        <div className="grid grid-cols-2 gap-a">
            <div>
                <figure class="max-w-lg">
                    <img class="mt-14 max-w-full ml-20 mb-14 rounded-lg" src={GambarPK} alt="image description"></img>
                    <figcaption class="mt-2 text-5x1 ml-20 mb-14 text-left text-[#29446F]-500 dark:text-[#29446F]-400">Pantai Kejawanan</figcaption>
                    <p class="ml-20 text-[#29446F]-700 text-left">Di Pantai Kejawanan pemandangan matahari terbit dapat disaksikan dengan posisi yang bagus, yaitu tepat di tengah-tengah pantai. Di sana juga kita bisa berwisata keliling pantai dengan menggunakan perahu motor milik nelayan, dengan tarif yang cukup murah yaitu seharga lima ribu Rupiah saja per orang, yang bahkan bisa di tawar hingga sebesar tiga ribu rupiah saja. Selain itu, di sana juga banyak disewakan perahu karet dengan tarif mulai seharga lima ribu Rupiah hingga sepuluh ribu Rupiah per perahu setiap satu jamnya,saat libur lebaran/jika sedang beruntung kita bisa melihat kapal nelayan/kapal tunda karena letaknya dekat dengan Pelabuhan Cirebon dan kita bisa berfoto di atas perahu dan melihat nelayan membawa hasil laut.</p>
                </figure>
            </div>
        <div class="p-12">
      <div class="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center">
        <h1 class="text-2x1 font-bold mb-4">Pantai Kejawanan</h1>
        <p class="text-gray-700 text-left">Alamat : Jl. Pelabuhan Perikanan, Pegambiran, Kec. Lemahwungkuk, Cirebon.</p>
        <p class="text-gray-700 text-left">Jam Buka : Rabu - Minggu  10.00 - 17.00 WIB</p>
        <p class="text-gray-700 text-left">Sosisal Media</p>

        <div class="bg-[#D5EDC7] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">Tiket</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Gratis</h3>
            </div>

            <ul class="list-disc list-inside">

            </ul>
        </div>
      </div>
    </div>
        </div>
        <div class="p-12">
            <div class="container mb-20 ml-kanan mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center">

            </div>
        </div>
        <br/>
            <Footer/>
        </div>
    )
}

export default DetailWisataCrb