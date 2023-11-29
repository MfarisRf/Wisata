// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import AboutKami from '../components/aboutkami'
import AboutCiayu from '../components/AboutCiayu'
import OurTeam from '../components/OurTeam'
import Footer from '../components/Footer'
import background2 from "../assets/images/Teksturs3.png";
import background0 from "../assets/images/Backgroud_about.png";

const About = () => {
  return (
    <div className='bg-cover bg-[#F1F1E8]' >
        <Navbar/>
        <div>
            <AboutKami/>
            <AboutCiayu/>
            <br/>
            <br/>
            <br/>
            <div className="flex items-center gap-6 justify-center">
                <div className="w1/" style={{backgroundImage: `url(${background2}) `}}>
                  <p className="font-Lato text-justify text-29446F px-96 pl-56 mr-20 w-full h-72 p-14 font-['Lato'] " style={{backgroundImage: `url(${background0}) `}}>
                  <h3 className=" flex card text-2x1 text-justify Baskerville sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 font-['Baskerville']">MISI</h3>
                    Memberikan pengalaman perjalanan yang tak terlupakan. Kami percaya bahwa setiap perjalanan adalah kesempatan untuk belajar, tumbuh, dan menghargai keindahan keberagaman dunia.Kami berkomitmen untuk memberikan layanan terbaik, mempromosikan keberlanjutan, dan mendukung komunitas lokal di destinasi wisata.</p>
                  <OurTeam/>
                  <Footer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About

