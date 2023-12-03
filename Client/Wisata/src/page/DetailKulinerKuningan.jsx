// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
// eslint-disable-next-line no-unused-vars
import GambarSopBuntutBakar from '../assets/images/SopBuntutBakar.png'
import GambarKuningan from '../assets/images/Kuningan.png'

function DetailKulinerKuningan() {
  return (
    <div className='bg-[#D5EDC7]'>
        <Navbar/>
        <img className="h-2/5 w-5/5 pt-20" src={GambarKuningan} alt="image description"></img>
        <br/>


      <div className="grid grid-cols-2 gap-8">
        <div> 
            <figure class="max-w-lg">
              <img class="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={GambarSopBuntutBakar} alt="image description"></img>
              <figcaption class="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F]-500 dark:text-[#29446F]-400">Sop Buntut Bakar</figcaption>
              <p class="ml-20 text-[#29446F]-700 text-left">Sop Buntut Bakar adalah hidangan khas dari Kuningan, Jawa Barat. Ini adalah sajian yang menggabungkan kelezatan sop buntut dengan sentuhan bakaran yang menghasilkan cita rasa yang kaya dan menggugah selera.  Sop Buntut Bakar Kuningan memiliki cara pengolahan yang berbeda dari sop buntut pada umumnya. Kuningan memiliki cara yang unik dengan aroma bakaran yang sangat khas. Buntut sapi yang telah diolah sebelumnya dengan kuah kaldu harus dibakar lebih dulu. Dalam proses pembakaran, daging buntut harus empuk dan berwarna kecoklatan. Sop Buntut Bakar Kuningan memiliki cita rasa serta rempah-rempah yang sangat kuat. Penggunaan bumbu yang kaya menghasilkan rasa yang gurih dan menggugah selera. Proses pemanggangan memberikan sentuhan khusus pada hidangan ini, sehingga menjadi favorit banyak orang yang mencicipinya. </p>
            </figure>
        </div>
      <div class="p-12">
    <div class="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-2 border-[#22B57F]">
        <h1 class="text-2xl font-bold mb-4">Rekomendasi Sop Buntut Bakar Kuningan</h1>
        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">RM. HDS Cibulan</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : Jl. Raya Maniskidul, Maniskidul, Kec. Jalaksana, Kuningan. </h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  08.00 - 21.00 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 25.000</h3>
            </div>
        </div>
        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">RM. Sadulur </h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : Jl. Raya Kramatmulya No.3, Kec. Kramatmulya, Kuningan. </h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  08.00 - 19.00 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 28.000</h3>
            </div>
        </div>

        <div class="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-2 text-left">GrWarung Sop Iga, Sop Buntut, Sop Kaki Sapi</h2>
            <div class="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 class="text-lg mb-2 text-left">Alamat : Jl. Syech Manglayang, Kec. Kadugede, Kuningan.</h3>
                <h3 class="text-lg mb-2 text-left">Jam Buka : Setiap hari pukul  09.00 - 21.00 WIB</h3>
                <h3 class="text-lg mb-2 text-left">Harga : Mulai dari Rp. 25.000</h3>
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

export default DetailKulinerKuningan