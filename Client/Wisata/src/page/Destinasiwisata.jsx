// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import 'flowbite'
import background from "../assets/images/Teksturs.png";
import Gambarnfdw from '../assets/images/NFDW 1920x689.png'

function Destinasiwisata() {
  return (
    <div>
    <Navbar/>
    <img class="h-2/5 w-5/5" src={Gambarnfdw} alt="image description"></img>
    <br/>
    <h1>Destinasi Wisata</h1>
    <div class="flex items-center justify-between w-full sm:w-96">
    
    <div class="relative w-full mr-2">
  <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" required />

  <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-gray-900 bg-white bg-opacity-80 rounded-e-lg border border-gray-300 hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:border-s-gray-700 dark:border-gray-700 dark:text-white dark:focus:border-blue-500 dark:hover:bg-gray-900 dark:focus:ring-blue-800">
    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    </svg>
    <span class="sr-only">Search</span>
  </button>
</div>


<form>
    <div class="relative flex-shrink-0 z-10 inline-flex items-center">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg></button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cirebon</button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Indramayu</button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Majalengka</button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kuningan</button>
                </li>
            </ul>
        </div>
    </div>
</form>
</div>
<div>

    </div>
    <br/>
      <div>
        <Footer/>
      </div>
  </div>
  )
}

export default Destinasiwisata
