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
            <img className="h-auto max-w-full px-8" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""></img>
        </div>
      <div className="bg-black-200 p-12">
    <div className="container mx-auto bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Situ Cipaten</h1>
        <p className="text-gray-700 text-left">Alamat: Jl. Gn. Kuning - Sindang, Kec. Sindang, Kabupaten Majalengka.</p>
        <p className="text-gray-700 text-left">Jam Operasional: Setiap hari 07.00 - 17.00 WIB.</p>
        <p className="text-gray-700 text-left">Sosial Media</p>

        <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Tiket</h2>
            <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left">Rp. 5.000-Rp. 25.000</h3>
            </div>

            <ul className="list-disc list-inside">
                
            </ul>
        </div>
    </div>

              </div>
              <div className="ml-auto">
        <img className="h-auto max-w-full px-8" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""></img>
    </div>
        <br/>
      </div>
        <Footer/>
    </div>
  )
}

export default DetailWisataMajalengka