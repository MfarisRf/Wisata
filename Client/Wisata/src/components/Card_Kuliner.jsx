// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import GambarTBC from '../assets/images/TBC.png'
import GambarPK from '../assets/images/PK.png'
import GambarPBi from '../assets/images/PBI.png'
import GambarPD from '../assets/images/PD.png'
import GambarTPA from '../assets/images/TPA.png'
import GambarSRG from '../assets/images/Sunyaragi.png'
import GambarSC from '../assets/images/SC.png'
import GambarMAC from '../assets/images/MAC.png'
import GambarTBC2 from '../assets/images/TBC2.png'


const Card_Kuliner = () => {
    const [category, setCategory] = useState([]);
   const [Kuliner, setKuliner] = useState([]);

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


  return (
    
<div>
  <div className="grid px-12 grid-cols-1 gap-6 lg:grid-cols-4 ">
  {Kuliner.map(Kuliner => (
            <div href="" className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-md rounded-lg shadow-black overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-[#2D8C14] transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full p-5 relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="mb-2 text-10 font-bold pl-3 pt-1 text-[#F1F1E8] ">{Kuliner.name}</h2>
                                <Link href={`/dashboard/editKuliner/${Kuliner.uuid}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F1F1E8]">
                                lihat selengkapnya
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img src={Kuliner.image} className="w-full z-0  h-full    object-fill example "></img>
                </div>
            </div>
            ))}
            </div>
        <br/>
        </div>
        
  )
}

export default Card_Kuliner