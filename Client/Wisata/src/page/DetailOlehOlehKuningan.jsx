// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
// eslint-disable-next-line no-unused-vars
import GambarBK from '../assets/images/BK.png'
import GambarKuningan from '../assets/images/Kuningan.png'

function DetailOlehOlehKuningan() {
  return (
    <div className='bg-[#D5EDC7]'>
        <Navbar/>
        <img className="h-2/5 w-5/5 pt-20" src={GambarKuningan} alt="image description"></img>
        <br/>


      <div className="grid grid-cols-2 gap-8">
        <div> 
            <figure className="max-w-lg">
              <img className="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={GambarBK} alt="image description"></img>
              <figcaption className="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F]-500 dark:text-[#29446F]-400">Batik Bokor</figcaption>
              <p className="ml-20 text-[#29446F]-700 text-left">Batik Bokor adalah salah satu motif batik khas dari daerah Kuningan, Jawa Barat. Bokor adalah wadah yang digunakan untuk menyimpan sesaji atau persembahan dalam upacara adat. Dalam motif batik ini, bokor melambangkan keberanian dan tekad para pemimpin Kuningan dalam memimpin dan memperjuangkan keberhasilan daerah mereka. Batik Bokor memiliki pola yang menggambarkan bokor dengan ornamen-ornamen lain seperti bunga, daun, dan desain lainnya. Warna-warna yang digunakan mencerminkan kekayaan alam sekitar dan menjadi ciri khas batik Kuningan. Batik Kuningan terkenal dengan kualitasnya yang baik. Anda dapat yakin bahwa oleh-oleh ini memiliki nilai yang tahan lama dan akan dihargai oleh penerima. </p>
            </figure>
        </div>
      <div className="p-12">
    <div className="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-2 border-[#22B57F]">
        <h1 className="text-2xl font-bold mb-4">Rekomendasi Batik Bokor Kuningan</h1>
        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Nisya Batik Kuningan</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left">Alamat : Blok Puhun, Cilaja, Kec. Kramatmulya, Kab. Kuningan</h3>
                <h3 className="text-lg mb-2 text-left">Jam Buka : Senin - Sabtu pukul  08.00 - 16.00 WIB</h3>
                <h3 className="text-lg mb-2 text-left">Harga : Mulai dari Rp. 85. 000 per meter</h3>
            </div>
        </div>
        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Batik Dakor Kuningan </h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left">Alamat : Jl. Raya Maniskidul No.10, Kec. Jalaksana, Kab. Kuningan.. </h3>
                <h3 className="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  07.30 - 17.00 WIB</h3>
                <h3 className="text-lg mb-2 text-left">Harga : Mulai dari Rp. 80.000</h3>
            </div>
        </div>

        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Batik Bojong Asri Kuningan</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left">Alamat : Jl. Raya Kuningan - Cirebon No. 1, Bojong Asri, Kec. Kuningan.</h3>
                <h3 className="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  08.00 - 17.00 WIB</h3>
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

export default DetailOlehOlehKuningan