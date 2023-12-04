// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
// eslint-disable-next-line no-unused-vars
import GambarEmpalGentong from '../assets/images/EmpalGentong.png'
import GambarCirebon from '../assets/images/Cirebon.png'

function DetailKulinerCirebon() {
  return (
    <div className='bg-[#D5EDC7]'>
        <Navbar/>
        <img className="h-2/5 w-5/5 pt-20" src={GambarCirebon} alt="image description"></img>
        <br/>


      <div className="grid grid-cols-2 gap-8">
        <div> 
            <figure class="max-w-lg">
              <img class="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={GambarEmpalGentong} alt="image description"></img>
              <figcaption class="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F]-500 dark:text-[#29446F]-400">Empal Gentong</figcaption>
              <p class="ml-20 text-[#29446F]-700 text-left"> Empal gentong, kuliner khas Cirebon yang terdiri dari usus, babat, dan irisan daging sapi ini tampilannya mirip dengan gulai. Kuliner lezat ini dimasak dengan cara direbus dengan menggunakan kayu bakar di dalam gentong tanah liat selama 5 jam. Itulah mengapa masyarakat menyisipkan kata ‘gentong’ dalam nama panganan ini. Penggunaan gentong tanah liat sebagai alat memasak bukan tanpa alasan, yaitu supaya memperkuat rasa masakan melalui endapan bumbu di pori-pori gentong tanah liat tersebut. Demi memastikan keempukan daging, kayu bakar dari pohon asam dipilih sebagai bahan bakarnya. Dalam penyajiannya, empal gentong disajikan dengan sambal kucai dan sambal cabai kering giling. </p>
            </figure>
        </div>
      <div class="p-12">
    <div class="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-2 border-[#22B57F]">
        <h1 class="text-2xl font-bold mb-4">Rekomendasi Empal Gentong Cirebon</h1>
        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">Empal Gentong BU Darma</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : Jl. Slamet Riyadi No.1, Cirebon. </h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  07.00 - 21.00 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 26.000 </h3>
            </div>
        </div>
        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">Empal Gentong Hj. Dian</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : Jl. Raya Ir. H. Juanda No. 48, Tengah Tani, Cirebon. </h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  08.00 - 22.00 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 26.000</h3>
            </div>
        </div>

        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">Empal Gentong Hj. Apud</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : Jl. Tujuh Pahlawan Revolusi (Tuparev), Cirebon.</h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  09.00 - 21.00 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 22.000</h3>
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

export default DetailKulinerCirebon