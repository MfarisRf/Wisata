// eslint-disable-next-line no-unused-vars

import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
import background from "../assets/images/Backgroud_kwo.png";
import GambarExploreWisata from '../assets/images/ExploreWisata.png'
import { Link } from 'react-router-dom'
// Pencarian
import Card_Kuliner from "../components/Card_Kuliner"
import Pencarian from '../components/Pencarian'
import axios from 'axios'

function Kuliner() {
    const [category, setCategory] = useState([]);
    const [Kuliner, setKuliner] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
      getKuliner();
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
  
  const getKuliner = async () => {
       const response = await axios.get('http://localhost:5000/Kuliner');
       setKuliner(response.data);
  }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredKuliner = Kuliner.filter((record) =>
        record.name.toLowerCase().includes(searchTerm.toLowerCase())
      );



  return (
    <div  style={{backgroundImage: `url(${background}) `}}>
    <Navbar/>
    <img className="h-2/5 w-5/5 pt-20" src={GambarExploreWisata} alt="image description"></img>
    <br/>
    <h2 className="font-bold text-[#29446F] font-['Boogaloo'] text-[25px] pl-20 pb-5 tracking-[.1em]">Kuliner</h2>
    {/* Card */}

    {/* Card pennutup */}

  <div className="flex items-center justify-between w-full sm:w-96">
  <div className="relative w-full mr-2 pl-20">
      {/* <Pencarian/> */}
      <input type="search" 
  id="search-dropdown" 
  value={searchTerm}
  onChange={handleSearchChange}
  className="block p-2.5 w-72 z-20 text-sm text-gray-900 rounded-lg border-s-[#2D8C14] border-s-1 border border-[#2D8C14] focus:ring-[#2D8C14] focus:border-[#2D8C14] dark:bg-gray-700 dark:border-s-gray-700 dark:border-[#2D8C14] dark:placeholder-gray-400 dark:text-white" placeholder="Search" required />

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
        <div id="dropdown" className="z-10 hidden divide-y divide-white-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 bg-[#F1F1E8] " aria-labelledby="dropdown-button">
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cirebon</button>
                </li>
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Indramayu</button>
                </li>
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Majalengka</button>
                </li>
                <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kuningan</button>
                </li>
            </ul>
        </div>
    </div>
</form>
</div>
<br/>
<br/>
<div>
  <div className="grid px-12 grid-cols-1 gap-6 lg:grid-cols-4 ">
  {filteredKuliner.map((record) => (
            <div href="" className=" shadow-2xl relative">
                <div className="  h-full relative shadow-md rounded-lg shadow-black overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-[#2D8C14] transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full p-5 relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1 text-[#F1F1E8] ">{record.name}</h2>
                                <Link to={`/DetailKuliner/detailkuliner/${record.uuid}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F1F1E8]">
                                lihat selengkapnya
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img src={record.image} className="w-full h-48 object-fill example "></img>
                </div>
            </div>
            ))}
            </div>
        <br/>
        </div>


    <br/>
      <div>
        <Footer/>
      </div>
  </div>
  )
}

export default Kuliner
