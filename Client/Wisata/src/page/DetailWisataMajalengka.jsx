import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
import GambarSC from '../assets/images/SC.png'
import Gambarmajalengka from '../assets/images/majalengka.png'

function DetailWisataMajalengka() {
  return (
    <div>
        <Navbar/>
        <img className="h-2/5 w-5/5 pt-20" src={Gambarmajalengka} alt="image description"></img>
        <br/>


<div class="grid grid-cols-2 gap-8">
        <div>
            <img class="h-auto max-w-full px-8" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full px-8" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""></img>
        </div>
        <div>
        </div>
        <div>
            <img class="h-auto max-w-full px-8" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""></img>
        </div>
        <br/>
      </div>
        <Footer/>
    </div>
  )
}

export default DetailWisataMajalengka