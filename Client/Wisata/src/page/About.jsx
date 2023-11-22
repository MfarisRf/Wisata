// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Logo from '../assets/images/Explore Ciayumajakuning.png'
import foto from '../assets/images/logo nama bawah.png'
import AboutKami from '../components/aboutkami'
import AboutCiayu from '../components/AboutCiayu'

const About = () => {
  return (
    <>
    <div>  
        <Navbar />
        <div>
            <AboutKami/>
            <AboutCiayu/>
            {/* <div> */}
                {/* <h3 className='text-center text-2x1 font-Libre Baskerville text-456761 pb-10 pt-28 font-bold'>EXPLORE CIAYUMAJAKUUNING</h3>
                <p className='text-center font-Lato px-25 text-456761'>Explore Ciayumajakuning adalah platform online yang berguna untuk sarana promosi bagi para pelaku usaha pariwisata. tidak hanya itu, Explore Ciayumajakuning hadir sebagai panduan Anda sebelum memutuskan untuk berkunjung ke sebuah wisata, khususnya yang ada di daerah ciayumajakuning. Memastikan kemudahan Anda dalam merencanakan atau menyiapkan perjalanan berpetualang adalah tujuan kami.</p>
                <a href="">
                    <img className="w-234" src={foto} alt="logo nama bawah"/>
                </a>
            </div>  */}
        </div>
    </div>
    </>
  )
}

export default About
