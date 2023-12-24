// eslint-disable-next-line no-unused-vars

import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
import background from "../assets/images/Backgroud_kwo.png"
import Card_wisata from '../components/Card_wisata'

// import background from "../assets/images/Teksturs.png";
import GambarExploreWisata from '../assets/images/ExplorWisata.png'
// import Cardwisata from '../components/Card_wisata

function Destinasiwisata() {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // Tambahkan state untuk menyimpan categoryId yang dipilih
  const [Wisata, setWisata] = useState([]);

  useEffect(() => {
    getWisata();
    getCategory();
 },[]);

 const getCategory = async () => {
  try {
    const response = await axios.get('http://localhost:5000/category');
    setCategory(response.data);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

const getWisata = async () => {
     const response = await axios.get('http://localhost:5000/Wisata');
     setWisata(response.data);
}
const handleSearch = (event) => {
  const searchTerm = event.target.value.toLowerCase();
  setSearchTerm(searchTerm);

  const filteredWisata = Wisata.filter((wisata) =>
    wisata.nama.toLowerCase().includes(searchTerm)
  );
  setSearchResults(filteredWisata);
};

const handleCategoryFilter = (categoryId) => {
  setSelectedCategoryId(categoryId);

  // Filter data Wisata berdasarkan categoryId
  const filteredWisata = Wisata.filter((wisata) =>
    categoryId ? wisata.categoryId === categoryId : true
  );
  setSearchResults(filteredWisata);
};


  return (
    <div className='bg-cover' style={{backgroundImage: `url(${background}) `}}>
    <Navbar/>
    <img className="h-2/5 w-5/5 pt-20" src={GambarExploreWisata} alt="image description"></img>
    <br/>
    <h2 className="font-bold  text-[#29446F] font-['Boogaloo'] text-[25px] pl-20 pb-5 tracking-[.1em]">Destinasi Wisata</h2>
    {/* Card */}

    {/* Card pennutup */}

  <div className="flex items-center justify-between w-full sm:w-96">
  <div className="relative w-full mr-2 pl-20">
  <input type="search" id="search-dropdown" className="block p-2.5 w-72 z-20 text-sm text-gray-900 rounded-lg border-s-[#2D8C14] border-s-1 border border-[#2D8C14] focus:ring-[#2D8C14] focus:border-[#2D8C14] dark:bg-gray-700 dark:border-s-gray-700 dark:border-[#2D8C14] dark:placeholder-gray-400 dark:text-white" placeholder="Search" required />

  <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-gray-900 bg-[#D5EDC7] bg-opacity-80 rounded-lg border border-[#2D8C14] hover:bg-opacity-90 focus:ring-1 focus:outline-none focus:ring-[#2D8C14] dark:bg-gray-800 dark:border-s-gray-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900">
    <svg className="w-10 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    </svg>
    <span className="sr-only">Search</span>
  </button>
</div>


<form>
    <div className="relative flex-shrink-0 z-10 inline-flex items-center">
        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-[#B3B3B3] sr-only dark:text-[#B3B3B3]">Cari</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="ml-32 w-48 flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-[#B3B3B3] bg-[#F1F1E8] border border-[#2D8C14] rounded-lg hover:bg-[#F1F1E8] dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-[#B3B3B3] dark:border-gray-600" type="button">All <svg className="w-2.5 h-2.5 ms-32" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg></button>
        <div id="dropdown" className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 bg-[#F1F1E8]" aria-labelledby="dropdown-button">
                <li>
                    <button type="button" onClick={() => handleCategoryFilter(null)}  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"></button>
                </li>
                {category.map((categoryItem) => (
                <li>
                    <button type="button" onClick={() => handleCategoryFilter(categoryItem.id)} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"></button>
                </li>
               ))}
            </ul>
        </div>
    </div>
</form>
</div>
<br/>
<br/>
{/* ini awal card */}
<div>
    <Card_wisata key={Wisata.uuid} data={Wisata} />
    </div>
{/* ini akhir card */}
        <br/>
      <div>
        <Footer/>
      </div>
  </div>
  )
}

export default Destinasiwisata
