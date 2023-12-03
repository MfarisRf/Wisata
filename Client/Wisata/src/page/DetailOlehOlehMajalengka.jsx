// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
// eslint-disable-next-line no-unused-vars
import GambarBGG from '../assets/images/BGG.png'
import Gambarmajalengka from '../assets/images/majalengka.png'

function DetailOleh2Majalengka() {
  return (
    <div className='bg-[#D5EDC7]'>
        <Navbar/>
        <img className="h-2/5 w-5/5 pt-20" src={Gambarmajalengka} alt="image description"></img>
        <br/>


      <div className="grid grid-cols-2 gap-8">
        <div> 
            <figure class="max-w-lg">
              <img class="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={GambarBGG} alt="image description"></img>
              <figcaption class="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F]-500 dark:text-[#29446F]-400">Batik Gedong Gincu</figcaption>
              <p class="ml-20 text-[#29446F]-700 text-left">Batik Gedong Gincu adalah bagian dari warisan budaya Majalengka, Jawa Barat. Batik Gedong Gincu berasal dari melimpahnya buah mangga gedong gincu di daerah Majalengka. Motif batik ini menggambarkan buah mangga gedong gincu dengan garis lingkaran tiga buah. Selain itu, terdapat gambar (motif) yang berbentuk sayap, ukel, akar, dan garis kotak (empat persegi panjang). Warna batik ini juga beragam, mencerminkan kekayaan warna alam sekitar dan menjadi ciri khas batik pesisiran, ini lah yang menambah daya tarik dan keunikan batik. Motif Gedong Gincu memiliki gambar buah mangga dan simbol-simbol lain yang mencerminkan tekad dan semangat masyarakat Majalengka. Ini adalah oleh-oleh yang tidak hanya indah, tetapi juga memiliki makna mendalam.</p>
            </figure>
        </div>
      <div class="p-12">
    <div class="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-2 border-[#22B57F]">
        <h1 class="text-2xl font-bold mb-4">Rekomendasi Batik Gedong Gincu Majalengka</h1>
        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">Hertyelit Batik Majalengka</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : Jl. Siliwangi, Karyamukti, Kec. Panyingkiran, Majalengka. </h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  07.00 - 18.00 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 20. 000 - Rp. 1.000.000</h3>
            </div>
        </div>
        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">Batik Miranti Majalengka</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : Jl. K.H.Abdul Halim, Munjul, Kec. Majalengka, Majalengka. </h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  07.30 - 17.30 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 30.000</h3>
            </div>
        </div>

        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">Griya Batik Sang Surya</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : Jl. Raya Timur No.4, Depan Pasar, Kec. Rajagaluh, Majalengka.</h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  07.00 - 21.00 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 60.000</h3>
            </div>

            <ul class="list-disc list-inside">
                
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

export default DetailOleh2Majalengka