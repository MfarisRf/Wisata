// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
// eslint-disable-next-line no-unused-vars
import GambarPE from '../assets/images/PE.png'
import Gambarindramayu from '../assets/images/indramayu.png'

function DetailKulinerIndramayu() {
  return (
    <div className='bg-[#D5EDC7]'>
        <Navbar/>
        <img className="h-2/5 w-5/5 pt-20" src={Gambarindramayu} alt="image description"></img>
        <br/>


      <div className="grid grid-cols-2 gap-8">
        <div> 
            <figure class="max-w-lg">
              <img class="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={GambarPE} alt="image description"></img>
              <figcaption class="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F]-500 dark:text-[#29446F]-400">Pedesan Entog</figcaption>
              <p class="ml-20 text-[#29446F]-700 text-left">Pedesan Entog merupakan salah satu makanan khas di Kabupaten Indramayu, Jawa Barat. Makanan ini berbahan utama daging entog, yakni bebek gemuk berleher pendek yang dimasak seperti gulai. Namun, ciri khas dari pedesan entog ini adalah cita rasa extra pedas, yang didapatkan dari bumbu cabai serta merica. Bumbu-bumbu yang digunakan dalam pedesan entog meliputi sereh, tomat, daun jeruk, kecap manis, garam, dan cabai merah. Meskipun daging entog yang digunakan memiliki tekstur yang mirip dengan bebek, namun pedesan entog memiliki karakteristik pedas yang khas dan kuah yang lebih sedikit. Bagi pecinta kuliner yang menyukai sensasi pedas, pedesan entog dari Indramayu bisa menjadi pilihan yang menggugah selera.</p>
            </figure>
        </div>
      <div class="p-12">
    <div class="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-2 border-[#22B57F]">
        <h1 class="text-2xl font-bold mb-4">Rekomendasi Pedesan Entog Indramayu</h1>
        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">Warung Pedesan Entog Khas Indramayu</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : jl. Mayor Dasuki, Jatibarang, Kec. Jatibarang, Kab. Indramayu. </h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  06.30 - 23.00 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 20.000</h3>
            </div>
        </div>
        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">Warung Pedesan Entog Citra Rasa</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : Jl. Raden Singalodra, No.76 Sindang, Kab. Indramayu. </h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  09.00 - 16.00 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 15.000 - 20.000</h3>
            </div>
        </div>

        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">Warung Pedesan Entog Mimi Artisem</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : Jl. larangan lelea, larangan, kec. Lohbener, Kab. Indramayu</h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  08.00 - 21.00 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 15.000 - 25.000</h3>
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

export default DetailKulinerIndramayu