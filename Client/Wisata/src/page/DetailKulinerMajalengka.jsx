// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
// eslint-disable-next-line no-unused-vars
import GambarLotek from '../assets/images/Lotek.png'
import Gambarmajalengka from '../assets/images/majalengka.png'

function DetailKulinerMajalengka() {
  return (
    <div className='bg-[#D5EDC7]'>
        <Navbar/>
        <img className="h-2/5 w-5/5 pt-20" src={Gambarmajalengka} alt="image description"></img>
        <br/>


      <div className="grid grid-cols-2 gap-8">
        <div> 
            <figure className="max-w-lg">
              <img className="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={GambarLotek} alt="image description"></img>
              <figcaption className="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F]-500 dark:text-[#29446F]-400">Lotek</figcaption>
              <p className="ml-20 text-[#29446F]-700 text-left">Lotek merupakan salah satu makanan khas di Kota Majalengka, Jawa Barat. Makanan ini sangat digemari oleh warga lokal maupun wisatawan yang datang dari luar kota. Lotek adalah sajian yang terbuat dari sayur-mayur segar, seperti kacang panjang, tauge, kentang, dan daun singkong. Sayuran-sayuran tersebut disiram dengan sambal kacang yang khas, memberikan cita rasa gurih dan pedas. Lontong sering menjadi pendamping dalam menyantap lotek. Lotek memiliki nilai gizi yang baik karena mengandung banyak serat dan vitamin dari sayuran, rasanya yang unik dan segar menjadikan lotek sebagai hidangan yang cocok untuk dinikmati di cuaca tropis. Jadi, jika Anda berkunjung ke Kota Majalengka, jangan lupa mencicipi lotek yang lezat ini. 
</p>
            </figure>
        </div>
      <div className="p-12">
    <div className="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-2 border-[#22B57F]">
        <h1 className="text-2xl font-bold mb-4">Rekomendasi Lotek Majalengka</h1>
        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Lotek Ceu Enok</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left">Alamat : Jl. Siti Armilah No.47, Majalengka Kulon, Kab. Majalengka. </h3>
                <h3 className="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  10.00 - 15.00 WIB</h3>
                <h3 className="text-lg mb-2 text-left">Harga : Mulai dari Rp. 15.000 - 20.000</h3>
            </div>
        </div>
        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Lotek Ema</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left">Alamat : Jl. Pemuda, Majalengka Kulon, Kec. Majalengka, Majalengka. </h3>
                <h3 className="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  06.00 - 17.00 WIB</h3>
                <h3 className="text-lg mb-2 text-left">Harga : Mulai dari Rp. 15.000</h3>
            </div>
        </div>

        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Griya Batik Sang Surya</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left">Alamat : Jl. Mutiara No.34, Rajagaluh Lor, Kec. Rajagaluh, Majalengka</h3>
                <h3 className="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  09.00 - 14.15 WIB</h3>
                <h3 className="text-lg mb-2 text-left">Harga : Mulai dari Rp. 15.000</h3>
            </div>

            <ul className="list-disc list-inside">
                
            </ul>
        </div>
    </div>
</div>
        <br/>
      </div>
        <Footer/>
    </div>
  )
}

export default DetailKulinerMajalengka