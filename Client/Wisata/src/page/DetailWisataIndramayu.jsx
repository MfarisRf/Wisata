// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
// eslint-disable-next-line no-unused-vars
import GambarPD from '../assets/images/PD.png'
import Gambarindramayu from '../assets/images/indramayu.png'

function DetailWisataIndramayu() {
  return (
    <div className='bg-[#D5EDC7]'>
        <Navbar/>
        <img className="h-2/5 w-5/5 pt-20" src={Gambarindramayu} alt="image description"></img>
        <br/>


      <div className="grid grid-cols-2 gap-8">
        <div> 
            <figure className="max-w-lg">
              <img className="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={GambarPD} alt="image description"></img>
              <figcaption className="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F]-500 dark:text-[#29446F]-400">Pantai Dadap</figcaption>
              <p className="ml-20 text-[#29446F]-700 text-left">Pantai Dadap adalah sebuah pantai yang terletak di Desa Dadap, Kecamatan Juntinyuat, Kabupaten Indramayu, Jawa Barat, Indonesia. Pantai ini terkenal dengan pemandangan matahari terbenamnya yang indah. Pantai Dadap memiliki pemandangan yang menarik dan suasana yang tenang. Kebersihan yang terjaga di kawasan ini menjadi daya tarik tersendiri bagi para wisatawan yang ingin menikmati liburan di tepi pantai dengan suasana yang nyaman. Suasananya sejuk dengan hembusan angin yang segar. Biaya masuknya sangat terjangkau yaitu Rp2.000 per orang untuk jasa parkir motor. Pantai ini memang masih alami belum ada tangan investor yang mengembangkannya. Oleh karena itu fasilitas juga ala kadarnya. Meskipun demikian, ini dapat dikembangkan menjadi sebuah objek wisata menarik jika dikelola dengan baik.</p>
            </figure>
        </div>
      <div className="p-12">
    <div className="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-2 border-[#22B57F]">
        <h1 className="text-2xl font-bold mb-4">Pantai Dadap</h1>
        <p className="text-gray-700 text-left">Alamat : Kec. Juntinyuat, Kabupaten Indramayu.</p>
        <p className="text-gray-700 text-left">Jam Operasional : Setiap hari 07.00 - 17.00 WIB.</p>
        <p className="text-gray-700 text-left">Sosial Media</p>

        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Tiket</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left">Gratis</h3>
            </div>

            <ul className="list-disc list-inside">
                
            </ul>
        </div>
    </div>
</div>
{/* Map */}
<div className="p-12">
    <div className="container mb-20 ml-kanan mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center">
   
            </div>
            </div>
        <br/>
      </div>
        <Footer/>
    </div>
  )
}

export default DetailWisataIndramayu