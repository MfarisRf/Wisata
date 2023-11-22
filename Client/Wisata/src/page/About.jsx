// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Logo from '../assets/images/Explore Ciayumajakuning.png'
import foto from '../assets/images/logo nama bawah.png'
import AboutKami from '../components/aboutkami'
import AboutCiayu from '../components/AboutCiayu'
import OurTeam from '../components/OurTeam'

const About = () => {
  return (
    <>
    <div>  
        <Navbar />
        <div>
            <AboutKami/>
            <AboutCiayu/>
            <OurTeam/>
        </div>
    </div>
    </>
  )
}

export default About
