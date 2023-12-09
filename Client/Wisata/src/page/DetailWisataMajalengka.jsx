// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MapBox from '../components/MapBox'
import 'flowbite'
// eslint-disable-next-line no-unused-vars
import GambarSC from '../assets/images/SC.png'
import GambarMajalengka2 from '../assets/images/Majalengka2.jpeg'

function DetailWisataMajalengka() {
  return (
    <div className='bg-[#D5EDC7]'>
        <Navbar/>
        <img className="h-2/5 w-5/5 pt-20" src={GambarMajalengka2} alt="image description"></img>
        <br/>


      <div className="grid grid-cols-2 gap-8">
        <div> 
            <figure className="max-w-lg">
              <img className="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={GambarSC} alt="image description"></img>
              <figcaption className="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F] dark:text-[#29446F] font-['libre_baskerville']">Situ Cipaten</figcaption>
              <p className="mt-14 ml-20 text-[#29446F] text-justify ">Situ Cipanten adalah sebuah danau yang terletak di kawasan Cipanten, Desa Sukasari, Kecamatan Cikijing, Kabupaten Majalengka, Jawa Barat, Indonesia. Danau ini memiliki luas sekitar 1,2 hektar dan dan dikelilingi oleh perbukitan yang hijau dan indah. Situ Cipanten dikenal sebagai salah satu wisata alam yang menarik di kunjungi di Kabupaten Majalengka, Jawa Barat. Memiliki air berwarna hijau tosca yang jauh dari kata keruh. Wisatawan yang datang dapat berenang sembari bermain dengan kawanan ikan yang menghuni danau cantik ini.</p>
            </figure>
        </div>
      <div className="p-12">
    <div className="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-2 border-[#22B57F]">
        <h1 className="text-2xl font-bold mb-4 font-['libre_baskerville'] text-[#091426] ">Situ Cipaten</h1>
        <p className="flex text-[#091426] text-left font-semibold">Alamat <p className='ml-20'>: Jl. Gn. Kuning - Sindang, Kec. Sindang, Kabupaten Majalengka.</p></p>
        <p className="flex text-[#091426] text-left font-semibold">Jam Operasional <p className='ml-2'>: Setiap hari 07.00 - 17.00 WIB.</p></p>
        <p className="flex text-[#091426] text-left font-semibold">Sosial Media</p>

        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Tiket</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left">Rp. 5.000-Rp. 25.000</h3>
            </div>

            <ul className="list-disc list-inside">
                
            </ul>
        </div>
    </div>
    {/* Map */}
      <div className="p-12 z-[0] m-[10]">
        <div className="box-container p-1 m-[10] bg-gray-200 z-[0] rounded-md shadow-md border-2 border-[#22B57F]">
            <MapBox />
        </div>
      </div>
</div>
<br/>
        <br/>
      </div>
        <Footer/>
    </div>
  )
}

export default DetailWisataMajalengka