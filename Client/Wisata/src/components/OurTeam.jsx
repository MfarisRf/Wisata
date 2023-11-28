// eslint-disable-next-line no-unused-vars
import React from 'react'
import Faris from '../assets/images/Foto TeamFaris.png'
import Vani from '../assets/images/Foto TeamVani.png'
import Niken from '../assets/images/Foto TeamNiken.png'
import Andre from '../assets/images/Foto TeamAndre.png'
import Riki from '../assets/images/Foto TeamRiki.png'
import Ghandi from '../assets/images/Foto TeamGhandi.png'
import Arya from '../assets/images/Foto TeamArya.png'


import FotoTeamFaris from '../assets/images/FotoTeamFaris.png'

const OurTeam = () => {
  return (
        <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Mari bersama-sama menjelajahi, belajar, dan menciptakan kenangan seumur hidup. Selamat datang di tim kami, tempat di mana impian perjalanan Anda menjadi kenyataan.</p>
        </div>
        <div className="flex flex-wrap -m-2">
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Vani}/>
            <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Vani Julia Wulandari</h2>
                <p className="text-gray-500">UI Designer</p>
            </div>
            </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={FotoTeamFaris}/>

            <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Muhamad Faris Rafi</h2>
                <p className="text-gray-500">Project Manager</p>
            </div>
            </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Niken} />
            <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Niken Dwi Setianingsih</h2>
                <p className="text-gray-500">UI Designer</p>
            </div>
            </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Andre} />
            <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Andrean Maulana Artiatno</h2>
                <p className="text-gray-500">UI Designer</p>
            </div>
            </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Ghandi} />
            <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Muhammad Ghandi Azhari</h2>
                <p className="text-gray-500">Programmer</p>
            </div>
            </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Riki} />
            <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Riki Pajri</h2>
                <p className="text-gray-500">Programmer</p>
            </div>
            </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full align-middle">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Arya} />
            <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Arya Surya Pratama</h2>
                <p className="text-gray-500">Programmer</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default OurTeam