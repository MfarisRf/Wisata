// eslint-disable-next-line no-unused-vars
import React from 'react';
import foto from '../assets/images/logo nama bawah.png'

function AboutCiayu() {
 return (
    <div className="App">
      <div className="flex items-center gap-10 justify-center">
        <div>
        <img className="w-234 pt-11" src={foto} alt="logo nama bawah"/>
        </div>
        <div className="w-1/2">
        <h3 className="text-left text-2xl font-Libre font-['Baskerville'] text-[#29446F] pb-10 pt-28 font-bold">Explore Ciayumajakuning</h3>
        <p className="text-justify font-['Lato'] px-35 text-29446F">Explore Ciayumajakuning adalah platform online yang berguna untuk sarana promosi bagi para pelaku usaha pariwisata. tidak hanya itu, Explore Ciayumajakuning hadir sebagai panduan Anda sebelum memutuskan untuk berkunjung ke sebuah wisata, khususnya yang ada di daerah ciayumajakuning. Memastikan kemudahan Anda dalam merencanakan atau menyiapkan perjalanan berpetualang adalah tujuan kami.</p>
        </div>
      </div>
    </div>
 );
}

export default AboutCiayu;