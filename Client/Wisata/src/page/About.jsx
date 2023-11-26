// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import AboutKami from '../components/aboutkami'
import AboutCiayu from '../components/AboutCiayu'
import OurTeam from '../components/OurTeam'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>  
        <Navbar/>
        <div>
            <AboutKami/>
            <AboutCiayu/>
            <br/>
            <br/>
            <br/>
            <div className="flex items-center gap-6 justify-center">
                <div className="w1/2">
                  <h3 className='text-right text-2x1 text-Libre Baskerville sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900'>MISI</h3>
                  <p className='text-justify text-left px-10 font-Lato px-20 text-29446F'>Memberikan pengalaman perjalanan yang tak terlupakan. Kami percaya bahwa setiap perjalanan adalah kesempatan untuk belajar, tumbuh, dan menghargai keindahan keberagaman dunia. 
                  Kami berkomitmen untuk memberikan layanan terbaik, mempromosikan keberlanjutan, dan mendukung komunitas lokal di destinasi wisata.</p>
                  <OurTeam/>
                  <Footer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
