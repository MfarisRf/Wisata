// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MapBox from '../components/MapBox'
import 'flowbite'
// eslint-disable-next-line no-unused-vars
import GambarTBC from '../assets/images/TBC.png'
import GambarKuningan from '../assets/images/Kuningan.png'

function DetailWisataKuningan() {
  return (
    <div className='bg-[#D5EDC7]'>
        <Navbar/>
        <img className="h-2/5 w-5/5 pt-20" src={GambarKuningan} alt="image description"></img>
        <br/>


      <div className="grid grid-cols-2 gap-8">
        <div> 
            <figure className="max-w-lg">
              <img className="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={GambarTBC} alt="image description"></img>
              <figcaption className="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F] dark:text-[#29446F] font-['libre_baskerville']">Telaga Biru Cirerem</figcaption>
              <p className="ml-20 text-[#29446F] text-justify">Telaga Biru Cirerem, sebuah surga tersembunyi, memukau pengunjung dengan keindahan alam yang luar biasa. Airnya yang begitu bening memberikan pandangan jernih ke dasar telaga, sementara sekelilingnya dihiasi oleh gemerlap hijau pepohonan yang menjadikan tempat ini seperti lukisan alam yang hidup. Pesona utama Telaga Biru Cirerem terletak pada perpaduan ajaib antara warna airnya yang bergradasi, menampilkan spektrum yang memikat antara biru dan hijau tosca. Keunikan ini menciptakan suasana yang begitu menawan dan memikat hati setiap pengunjungnya. </p>
            </figure>
        </div>
      <div className="p-12">
    <div className="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-2 border-[#22B57F]">
        <h1 className="text-2xl font-bold mb-4 font-['libre_baskerville'] text-[#091426]">Telaga Biru Cirerem</h1>
        <p className="flex text-[#091426] text-left font-semibold">Alamat<p className='ml-20'>: Kaduela, Kec. Pasawahan, Kabupaten Kuningan, Jawa Barat</p></p>
        <p className="flex text-[#091426] text-left font-semibold">Jam Operasional <p className='ml-2'>: Setiap hari  07.00 - 17.00 WIB</p></p>
        <p className="text-[#091426] text-left font-semibold">Sosial Media</p>

        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Tiket</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left font-semibold">Rp. 15.000</h3>
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

export default DetailWisataKuningan