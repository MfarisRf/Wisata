// eslint-disable-next-line no-unused-vars

import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
import background from "../assets/images/Backgroud_kwo.png";
import GambarExploreWisata from '../assets/images/ExploreWisata.png'

// Pencarian
import Card_Kuliner from "../components/Card_Kuliner"
import Pencarian from '../components/Pencarian'
import axios from 'axios'

function Kuliner() {
  // Pencarian
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


    const [category, setCategory] = useState([]);
    const [Kuliner, setKuliner] = useState([]);
  
    useEffect(() => {
      // Pencarian
      // axios.get('http://localhost:5000/Kuliner')
      // .then((response) => {
      //   setData(response.data);
      //   setFilteredData(response.data);

      getKuliner();
      getCategory();
    })
  //   .catch((error) => {
  //     console.error('Error fetching data:', error);
  //   });
  //  },[]);

  //  Pencarian
  //  const handleSearch = (search) => {
  //   setSearchTerm(search);
  //   const filtered = data.filter((item) =>
  //     item.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setFilteredData(filtered);
  // };
  
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

{/* Card pembuka */}
       <div className='py-10'>
       {/* <Pencarian handleSearch={handleSearch} />
              {filteredData.map((kuliner) => ( */}
                  <Card_Kuliner key={Kuliner.uuid} data={Kuliner} />
                  {/* ))} */}
                    </div>
{/* Card penutup */}


        {/* <CardItem key={item.id} data={item} /> */}


    <br/>
      <div>
        <Footer/>
      </div>
  </div>
  )
}

export default Kuliner
