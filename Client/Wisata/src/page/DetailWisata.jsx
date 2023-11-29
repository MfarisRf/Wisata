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
            <div className='bg-cover' style={{backgroundImage: `url(${background}) `}}></div>
            <img className="h-2/5 w-5/5 pt-20" src={DetwisCrb} alt="image description"></img>
            <Navbar/>
        </div>
    )
}

export default DetailWisata