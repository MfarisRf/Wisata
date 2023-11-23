// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import AboutKami from '../components/aboutkami'
import AboutCiayu from '../components/AboutCiayu'
import OurTeam from '../components/OurTeam'

const About = () => {
  return (
    <div>  
        <Navbar />
        <div>
            <AboutKami/>
            <AboutCiayu/>
            <br/>
            <br/>
            <br/>
            <h3 className='text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>MISI</h3>
            <p className='text-center font-Lato px-25 text-456761'>Memberikan pengalaman perjalanan yang tak terlupakan. Kami percaya bahwa setiap perjalanan adalah kesempatan untuk belajar, tumbuh, dan menghargai keindahan keberagaman dunia. Kami berkomitmen untuk memberikan layanan terbaik, mempromosikan keberlanjutan, dan mendukung komunitas lokal di destinasi wisata.</p>
            <OurTeam/>
        </div>
    </div>
  )
}

export default About
