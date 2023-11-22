import React from 'react';
import Logo from '../assets/images/Explore Ciayumajakuning.png'

function AboutKami() {
 return (
    <div className="App">
      <div className="flex items-center gap-6 justify-center">
        <div className="w-1/2">
        <h3 className='text-left text-2xl font-Libre Baskerville text-[#2D8C14] pb-10 pt-28 font-bold'>Tentang Kami</h3>
        <p className='text-justify font-Lato px-35 text-45992E'>Selamat datang di Ciayumajakuning! Kami adalah tempat di mana petualangan dimulai dan kenangan tak terlupakan dibuat. Sejak diluncurkan pada tahun 2023, kami telah berkomitmen untuk menjadi teman setia perjalanan Anda, membantu Anda menjelajahi destinasi indah yang ada di CIAYUMAJAKUNING. </p>
        </div>
        <div>
          <img className='max-w-sm mt-20' src={Logo} alt="Explore Ciayumajakuning"/>
        </div>
      </div>
    </div>
 );
}

export default AboutKami;