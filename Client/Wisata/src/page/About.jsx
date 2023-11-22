// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Logo from '../assets/images/Explore Ciayumajakuning.png'
import foto from '../assets/images/logo nama bawah.png'

const About = () => {
  return (
    <>
    <div>  
        <Navbar />
        |<div> 
            <h3 className='text-center text-2xl font-Libre Baskerville text-456761 pb-10 pt-28 font-bold'>Tentang Kami</h3>
            <p className='text-center font-Lato px-25 text-456761'>Selamat datang di Ciayumajakuning! Kami adalah tempat di mana petualangan dimulai dan kenangan tak terlupakan dibuat. Sejak diluncurkan pada tahun 2023, kami telah berkomitmen untuk menjadi teman setia perjalanan Anda, membantu Anda menjelajahi destinasi indah yang ada di CIAYUMAJAKUNING. </p>
            <a href="#test">
                <img className="w-234" src={Logo} alt="Explore Ciayumajakuning"/>
            </a>
            <div>
                <h3 className='text-center text-2x1 font-Libre Baskerville text-456761 pb-10 pt-28 font-bold'>EXPLORE CIAYUMAJAKUUNING</h3>
                <p className='text-center font-Lato px-25 text-456761'>Explore Ciayumajakuning adalah platform online yang berguna untuk sarana promosi bagi para pelaku usaha pariwisata. tidak hanya itu, Explore Ciayumajakuning hadir sebagai panduan Anda sebelum memutuskan untuk berkunjung ke sebuah wisata, khususnya yang ada di daerah ciayumajakuning. Memastikan kemudahan Anda dalam merencanakan atau menyiapkan perjalanan berpetualang adalah tujuan kami.</p>
                <a href="">
                    <img className="w-234" src={foto} alt="logo nama bawah"/>
                </a>
            </div> 
        </div>
    </div>
    </>
  )
}

export default About
