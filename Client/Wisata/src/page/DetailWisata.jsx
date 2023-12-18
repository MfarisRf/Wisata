// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MapBox from '../components/MapBox'
import 'flowbite'

// import background from "../assets/images/Teksturs.png";
import GambarDetwisCrb from '../assets/images/HeaderWisata.png'


function DetailWisata() {
  const { id } = useParams();
  const [wisata, setWisata] = useState(null);

  useEffect(() => {
    getWisataById();
  }, [id]);

  const getWisataById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/Wisata/${id}`);
      setWisata(response.data);
    } catch (error) {
      console.error('Error fetching Wisata details:', error);
    }
  };



    return (
        <div className='bg-[#D5EDC7]'>
            <Navbar/>
            <img className="h-2/5 w-5/5 pt-20" src={GambarDetwisCrb} alt="image description"></img>
            <br/>

            {wisata &&
              <div key={wisata.uuid} data={wisata}> 
        <div className="grid grid-cols-2 gap-8">
            <div>
                <figure className="max-w-lg">
                    <img className="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={wisata.image} alt="image description"></img>
                    <figcaption className="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F] dark:text-[#29446F] font-['libre_baskerville']">{wisata.name}</figcaption>
                    <p className="ml-20 w-full text-[#29446F] text-justify ">{wisata.description}</p>
                </figure>
            </div>
        <div className="p-12">
      <div className="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-[#22B57F] border-2">
        <h1 className="text-2xl font-extrabold mb-4 text-[#091426] font-['libre_baskerville']">{wisata.name}</h1>
        <br />
        <p className="flex text-[#091426] text-left font-semibold">Alamat<p className='ml-10'> : {wisata.address}</p></p>
        <br />
        <p className="flex text-[#091426] text-left font-semibold">Jam Buka <p className='ml-5'>: {wisata.jam_buka}</p> </p>
        <br />
        <p className="flex text-[#091426] text-left font-semibold">Jam Tutup <p className='ml-5'>: {wisata.jam_tutup}</p> </p>

        <div className="bg-[#D5EDC7] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left">Tiket</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="text-lg mb-2 text-left font-semibold"> Rp.{wisata.price},00</h3>
            </div>

            <ul className="list-disc list-inside">

            </ul>
        </div>
      </div>
      <div className="relative w-[100%] z-10 mt-10 p-1 bg-white rounded-md shadow-md border-2 border-[#22B57F]">
            <MapBox coordinates={wisata.location}/>
        </div>
    </div>
    <br/>
        </div>
        </div>
        }
            <br/>
            <Footer/>
    </div>
    )
}

export default DetailWisata