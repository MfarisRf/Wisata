// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'

// import background from "../assets/images/Teksturs.png";
import GambarDetwisCrb from '../assets/images/DetwisCrb.png'


function DetailWisata() {
    return (
        <div>
            <Navbar/>
            <img className="h-2/5 w-5/5 pt-20" src={GambarDetwisCrb} alt="image description"></img>
            <Footer/>
        </div>
    )
}

export default DetailWisata