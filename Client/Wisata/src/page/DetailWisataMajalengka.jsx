// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
// eslint-disable-next-line no-unused-vars
import GambarSC from '../assets/images/SC.png'
import Gambarmajalengka from '../assets/images/majalengka.png'

function DetailWisataMajalengka() {
  return (
    <div className='bg-[#D5EDC7]'>
        <Navbar/>
        <img className="h-2/5 w-5/5 pt-20" src={Gambarmajalengka} alt="image description"></img>
        <br/>


      <div className="grid grid-cols-2 gap-8">
        <div> 
            <figure class="max-w-lg">
              <img class="mt-14 max-w-full ml-20 mb-14 rounded-lg" src={GambarSC} alt="image description"></img>
              <figcaption class="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F]-500 dark:text-[#29446F]-400">Situ Cipaten</figcaption>
              <p class="ml-20 text-[#29446F]-700 text-left">Situ Cipanten adalah sebuah danau yang terletak di kawasan Cipanten, Desa Sukasari, Kecamatan Cikijing, Kabupaten Majalengka, Jawa Barat, Indonesia. Danau ini memiliki luas sekitar 1,2 hektar dan dan dikelilingi oleh perbukitan yang hijau dan indah. Situ Cipanten dikenal sebagai salah satu wisata alam yang menarik di kunjungi di Kabupaten Majalengka, Jawa Barat. Memiliki air berwarna hijau tosca yang jauh dari kata keruh. Wisatawan yang datang dapat berenang sembari bermain dengan kawanan ikan yang menghuni danau cantik ini.</p>
            </figure>
        </div>
      <div class="p-12">
    <div class="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center">
        <h1 class="text-2xl font-bold mb-4">Situ Cipaten</h1>
        <p class="text-gray-700 text-left">Alamat : Jl. Gn. Kuning - Sindang, Kec. Sindang, Kabupaten Majalengka.</p>
        <p class="text-gray-700 text-left">Jam Operasional : Setiap hari 07.00 - 17.00 WIB.</p>
        <p class="text-gray-700 text-left">Sosial Media</p>

        <div class="bg-[#D5EDC7] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">Tiket</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Rp. 5.000-Rp. 25.000</h3>
            </div>

            <ul class="list-disc list-inside">
                
            </ul>
        </div>
    </div>
</div>
<div class="p-12">
    <div class="container mb-20 ml-kanan mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center">
   
            </div>
            </div>
        <br/>
      </div>
        <Footer/>
    </div>
  )
}

export default DetailWisataMajalengka