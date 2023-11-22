import React from 'react'
<<<<<<< HEAD
import Faris from '../assets/images/Foto TeamFaris.png'
import Vani from '../assets/images/Foto TeamVani.png'
import Niken from '../assets/images/Foto TeamNiken.png'
import Andre from '../assets/images/Foto TeamAndre.png'
import Riki from '../assets/images/Foto TeamRiki.png'
import Ghandi from '../assets/images/Foto TeamGhandi.png'
import Arya from '../assets/images/Foto TeamArya.png'

=======
import FotoTeamFaris from '../assets/images/FotoTeamFaris.png'
>>>>>>> b2e16dac5a83e8a2fb729308339251d4b509c54e
const OurTeam = () => {
  return (
        <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto ">
        <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div class="flex flex-wrap -m-2">
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="Foto TeamVani.png"/>
            <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Vani Julia Wulandari</h2>
                <p class="text-gray-500">UI Designer</p>
            </div>
            </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
<<<<<<< HEAD
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="Foto TeamFaris.png"/>
=======
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={FotoTeamFaris}/>
>>>>>>> b2e16dac5a83e8a2fb729308339251d4b509c54e
            <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Muhamad Faris Rafi</h2>
                <p class="text-gray-500">Project Manager</p>
            </div>
            </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="Foto TeamNiken.png" />
            <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Niken Dwi Setianingsih</h2>
                <p class="text-gray-500">UI Designer</p>
            </div>
            </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="Foto TeamAndre.png" />
            <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Andrean Maulana Artiatno</h2>
                <p class="text-gray-500">UI Designer</p>
            </div>
            </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="Foto TeamGhandi.png" />
            <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Muhammad Ghandi Azhari</h2>
                <p class="text-gray-500">Programmer</p>
            </div>
            </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="Foto TeamRiki.png" />
            <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Riki Pajri</h2>
                <p class="text-gray-500">Programmer</p>
            </div>
            </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full align-middle">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="Foto TeamArya.png" />
            <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Arya Surya Pratama</h2>
                <p class="text-gray-500">Programmer</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default OurTeam