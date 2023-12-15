// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carosel from '../components/Carosel'
import 'flowbite'


import background from "../assets/images/Teksturs.png";

import Slide_layer from '../components/Slide_layer'
import Layer_lp from '../components/Layer_lp'
import CardCirebon from '../components/LP/CardCirebon'
import CardIndramayu from '../components/LP/CardIndramayu'
import CardMajalengka from '../components/LP/CardMajalengka'
import CardKuningan from '../components/LP/CardKuningan'
import Recomendasi_wisata_lp from '../components/LP/Recomendasi_wisata_lp'

const Landingpage = () => {
  return (
    <div>
        <>
        <Navbar />
        <Carosel />
        <Recomendasi_wisata_lp/>
        <Slide_layer />
        <div className='pt-10 bg-cover' style={{backgroundImage: `url(${background}) `}} >
            <div >
            <h2 className="font-bold text-xl pb-10 text-center text-[#2D8C14] font-['Boogaloo']">Rekomendasi Oleh-oleh</h2>
                <div className='ml-64 pb-11'>
                    <CardCirebon /> 
                </div>
                {/* content1 */}
                <div>
                    <div className='ml-96 w-Lebar h-64 bg-[#D5EDC7] p-5'>
                    <p className="ml-48 text-[#29446F]">
                        Oleh-oleh Cirebon merupakan bagian dari potensi wisata yang dipengaruhi kehadirannya di Pesisir Barat Jawa. Terdapat berbagai jenis oleh-oleh khas Cirebon yang bisa anda pilih dan sesuaikan dengan kebutuhan anda. Mulai dari makanan hingga kain tradisional seperti batik dan kain lainnya. Sebab kota Cirebon mempunyai sumber daya alam yang kaya dan melimpah yang bisa dijadikan oleh-oleh. Banyak juga makanan kecil dengan cita rasa yang berbeda, kerupuk, minuman, hingga kenang-kenangan berupa aksesoris maupun pernak-pernik hiasan tertentu.
                    </p>
                    </div>
                </div>
            </div>

            <br /><br />

            {/* content 2 */}
            <div className='ml-kanan pb-11'>
                    <CardIndramayu /> 
            </div>
{/* batas Card Indramayu*/}
            <div>
                <div className='ml-96 w-Lebar h-64 bg-[#D5EDC7] p-5'>
                    <p className='ml-5 pr-64 text-justify text-[#29446F]'>
                    Indramayu merupakan salah satu daerah di Jawa Barat yang dijuluki sebagai kota Mangga dan terkenal dengan jutaan tempat wisata menarik dan mengesankan. Selain menjadi salah satu kota penghasil mangga Cengkir terbesar, tempat ini juga banyak mempunyai oleh-oleh khas yang berbahan dasar buah tersebut. Selain mangga, ternyata masih banyak oleh-oleh lain yang layak dibeli, dibawa pulang, dan dibagikan kepada orang tersayang. Seperti batik Indramayu, kue koci, dan masih banyak lainnya. 
                    </p>
                </div>
            </div>
{/* batas Card Indramayu*/}

            <br /><br />

            {/* content 3 */}
            <div className='ml-64 pb-10'>
                    <CardMajalengka /> 
            </div>
{/* batas */}
            <div>
                <div className='ml-96 w-Lebar h-64 bg-[#D5EDC7] p-5'>
                    <p className='ml-48 text-[#29446F]'>
                    Majalengka dikenal dengan sebutan Kota Angin, dengan daya tarik wisata alam yang menarik, masakan khas dan kerajinan tangan yang unik. Menampilkan beragam pesona alam dengan cita rasa jajanan khas, menjadikan Majalengka sebagai tempat liburan idaman banyak orang. Musim libur panjang bisa menjadi  waktu lain untuk mencapai hal tersebut. Tak lengkap rasanya jika berlibur tanpa membawa oleh-oleh khas. Banyak oleh-oleh khas Majalengka yang digemari wisatawan seperti batik Majalengka, kecap asli Majalengka, Kalua jeruk, gula cakar dan oleh-oleh lainnya. 
                    </p>
                </div>
            </div>
{/* batas */}

            <br /><br />

            {/* content 4 */}
            <div className='ml-kanan pb-10'>
                    <CardKuningan /> 
            </div>
{/* batas */}
<div>
                <div className='ml-96 w-Lebar h-64 bg-[#D5EDC7] p-4'>
                    <p className='ml-5 pr-64 text-justify text-[#29446F]'>
                    Kuningan merupakan salah satu kota di Jawa Barat yang terkenal dengan keindahan alamnya. Tanahnya yang indah menarik wisatawan untuk berkunjung secara rutin. Anda juga bisa mencicipi berbagai  makanan yang sangat lezat dan kaya akan rempah-rempah. Tidak hanya keindahan alamnya, Kuningan juga memikat wisatawan dengan banyaknya oleh-oleh terkenal. Banyak oleh-oleh khas kota ini yang bisa Anda bawa pulang setelah mengunjungi tempat wisata terkenal di Kuningan. Mulai dari jajanan hingga kerajinan tangan yang siap dijadikan souvenir menarik anda selama liburan seperti batik Kuningan, lepet, tahu susu, minuman jeniper dan masih banyak lagi lainnya. 
                    </p>
                </div>
            </div>
{/* batas */}

            <br></br><br />

            <Layer_lp />
        </div>
        <Footer />
        </>
    </div>
  )
}

export default Landingpage