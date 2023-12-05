// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
// eslint-disable-next-line no-unused-vars
import GambarBIE from '../assets/images/BIE.png'
import Gambarindramayu from '../assets/images/indramayu.png'

function DetailOlehOlehIndramayu() {
  return (
    <div className='bg-[#D5EDC7]'>
        <Navbar/>
        <img className="h-2/5 w-5/5 pt-20" src={Gambarindramayu} alt="image description"></img>
        <br/>


      <div className="grid grid-cols-2 gap-8">
        <div> 
            <figure className="max-w-lg">
              <img className="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={GambarBIE} alt="image description"></img>
              <figcaption className="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F]-500 dark:text-[#29446F]-400">Batik Iwak Etong</figcaption>
              <p className="ml-20 text-[#29446F]-700 text-left">Batik Iwak Etong adalah salah satu motif batik khas Indramayu, sebuah daerah yang terletak di pesisir pantai utara Jawa. Batik Iwak Etong menggambarkan kondisi perikanan di wilayah Indramayu yang berlimpah. Motif ini menampilkan berbagai jenis ikan, termasuk ikan kecil dan besar, ubur-ubur, kepiting, dan cumi-cumi. Batik Iwak Etong memiliki pola ritmis dan dinamis yang menarik. Warna-warna yang digunakan mencerminkan kondisi alam sekitar. Ini adalah oleh-oleh yang tidak hanya indah, tetapi juga unik. </p>
            </figure>
        </div>
      <div className="p-12">
    <div className="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-2 border-[#22B57F]">
        <h1 className="text-2xl font-bold mb-4">Rekomendasi Batik Iwak Etong Indramayu</h1>
        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Batik Binar Indramayu</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left">Alamat : Jl. Kopral Yahya No.120, Paoman, Kec. Indramayu, Indramayu.</h3>
                <h3 className="text-lg mb-2 text-left">Jam Buka : Senin - Sabtu pukul  07.00 - 20.00 WIB</h3>
                <h3 className="text-lg mb-2 text-left">Harga : Mulai dari Rp. 85. 000 per meter</h3>
            </div>
        </div>
        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Batik Paoman Art </h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left">Alamat : Jalan Siliwangi No.9, Paoman, Kec. Indramayu, Indramayu.</h3>
                <h3 className="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  08.00 - 17.00 WIB</h3>
                <h3 className="text-lg mb-2 text-left">Harga : Mulai dari Rp. 85.000 permeter</h3>
            </div>
        </div>

        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Senang Hati Batik Indramayu</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left">Alamat : Jl. Yos Sudarso No. 9A, Margadadi, Kab. Indramayu.</h3>
                <h3 className="text-lg mb-2 text-left">Jam Buka : Senin - Sabtu pukul  08.00 - 17.00 WIB</h3>
                <h3 className="text-lg mb-2 text-left">Harga : Mulai dari Rp. 70.000 per meter</h3>
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

export default DetailOlehOlehIndramayu