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
            <figure className="max-w-lg">
              <img className="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={GambarEmpalGentong} alt="image description"></img>
              <figcaption className="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F] dark:text-[#29446F]"></figcaption>
              <p className="ml-20 w-full text-[#29446F] text-justify "> Empal gentong, kuliner khas Cirebon yang terdiri dari usus, babat, dan irisan daging sapi ini tampilannya mirip dengan gulai. Kuliner lezat ini dimasak dengan cara direbus dengan menggunakan kayu bakar di dalam gentong tanah liat selama 5 jam. Itulah mengapa masyarakat menyisipkan kata ‘gentong’ dalam nama panganan ini. Penggunaan gentong tanah liat sebagai alat memasak bukan tanpa alasan, yaitu supaya memperkuat rasa masakan melalui endapan bumbu di pori-pori gentong tanah liat tersebut. Demi memastikan keempukan daging, kayu bakar dari pohon asam dipilih sebagai bahan bakarnya. Dalam penyajiannya, empal gentong disajikan dengan sambal kucai dan sambal cabai kering giling. </p>
            </figure>
        </div>
      <div className="p-12">
    <div className="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-2 border-[#22B57F]">
        <h1 className="text-2xl font-bold mb-4 text-[#091426] font-['libre_baskerville']">Rekomendasi Empal Gentong Cirebon</h1>
        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left text-[#091426] font-['libre_baskerville']">Empal Gentong BU Darma</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Alamat<p className='ml-8'>: Jl. Slamet Riyadi No.1, Cirebon.</p></h3>
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Jam Buka <p className='ml-4'>: Setiap hari pukul  07.00 - 21.00 WIB</p></h3>
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Harga <p className='ml-10'>: Mulai dari Rp. 26.000 </p> </h3>
            </div>
        </div>
        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left text-[#091426] font-['libre_baskerville']">Empal Gentong Hj. Dian</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Alamat <p className='ml-10'>: Jl. Raya Ir. H. Juanda No. 48, Tengah Tani, Cirebon. </p></h3>
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Jam Buka <p className='ml-5'>: Setiap hari pukul  08.00 - 22.00 WIB</p></h3>
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Harga <p className='ml-11'>: Mulai dari Rp. 26.000</p></h3>
            </div>
        </div>

        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left text-[#091426] font-['libre_baskerville']">Empal Gentong Hj. Apud</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Alamat <p className='ml-8'>: Jl. Tujuh Pahlawan Revolusi (Tuparev), Cirebon.</p></h3>
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Jam Buka <p className='ml-4'> : Setiap hari pukul  09.00 - 21.00 WIB</p></h3>
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Harga <p className='ml-10'>: Mulai dari Rp. 22.000</p></h3>
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

export default DetailKulinerCirebon