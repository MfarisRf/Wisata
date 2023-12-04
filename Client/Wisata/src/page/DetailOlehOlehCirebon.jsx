// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
// eslint-disable-next-line no-unused-vars
import GambarBMM from '../assets/images/BMM.png'
import GambarCirebon from '../assets/images/Cirebon.png'

function DetailOlehOlehCirebon() {
  return (
    <div className='bg-[#D5EDC7]'>
        <Navbar/>
        <img className="h-2/5 w-5/5 pt-20" src={GambarCirebon} alt="image description"></img>
        <br/>


      <div className="grid grid-cols-2 gap-8">
        <div> 
            <figure class="max-w-lg">
              <img class="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={GambarBMM} alt="image description"></img>
              <figcaption class="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F]-500 dark:text-[#29446F]-400">Batik Mega Mendung</figcaption>
              <p class="ml-20 text-[#29446F]-700 text-left">Batik Mega Mendung adalah motif batik yang berasal dari Cirebon, Jawa Barat. Motif ini merupakan salah satu yang paling populer di tanah air. Filosofi di balik motif ini mengajarkan bahwa setiap manusia seharusnya pandai dalam membendung afeksinya dalam keadaan dan suasana apapun. Motif Mega Mendung memiliki desain yang elegan dan khas. Warna biru dan gradasi yang halus membuatnya menarik dan cocok untuk berbagai kesempatan. Kualitas batik Cirebon juga terkenal baik, sehingga Anda dapat yakin bahwa oleh-oleh ini memiliki nilai yang tahan lama. Memberikan oleh-oleh berupa batik Mega Mendung adalah cara yang indah untuk memperkenalkan budaya Indonesia kepada orang lain.</p>
            </figure>
        </div>
      <div class="p-12">
    <div class="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-2 border-[#22B57F]">
        <h1 class="text-2xl font-bold mb-4">Rekomendasi Batik Mega Mendung Cirebon</h1>
        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">Kampung Batik Trusmi</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : Jl. Syekh Datul Kahfi, Weru Kidul, Cirebon. </h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  00.00 - 24.00 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 20. 000 - Rp. 1.000.000</h3>
            </div>
        </div>
        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">Pasar Kanoman</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : Jl. Kanoman (Lemahwungkuk), Kec. Lemahwungkuk, Cirebon </h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  05.00 - 17.00 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 15.000 - 75.000 permeter</h3>
            </div>
        </div>

        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">Batik Salma</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : Jl. Trusmi Kulon No. 187,  Trusmi Kulon, Plered, Cirebon.</h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  08.00 - 17.00 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 200.000</h3>
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

export default DetailOlehOlehCirebon