// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'flowbite'
// eslint-disable-next-line no-unused-vars
import GambarEmpalGentong from '../assets/images/EmpalGentong.png'
import GambarCirebon from '../assets/images/Cirebon.png'

function DetailKuliner() {

const { id } = useParams();
  const [Kuliner, setKuliner] = useState(null);

  useEffect(() => {
    getKulinerById();
  }, [id]);

  const getKulinerById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/Kuliner/${id}`);
      setKuliner(response.data);
    } catch (error) {
      console.error('Error fetching Kuliner details:', error);
    }
  };

  return (
    <div className='bg-[#D5EDC7]'>
        <Navbar/>
        <img className="h-2/5 w-5/5 pt-20" src={GambarCirebon} alt="image description"></img>
        <br/>
      
      {Kuliner &&
        <div key={Kuliner.uuid} data={Kuliner}>
      <div className="grid grid-cols-2 gap-8">
        <div> 
            <figure className="max-w-lg">
              <img className="mt-14 min-w-full ml-20 mb-14 rounded-lg" src={Kuliner.image} alt="image description"></img>
              <figcaption className="mt-2 text-5xl ml-20 mb-14 text-left text-[#29446F] dark:text-[#29446F] font-['libre_baskerville']">{Kuliner.name}</figcaption>
              <p className="ml-20 w-full text-[#29446F] text-justify "> {Kuliner.description} </p>
            </figure>
        </div>
      <div className="p-12">
    <div className="container mx-auto bg-[#E6E6E6] p-6 rounded-lg shadow-md text-center border-2 border-[#22B57F]">
    <h1 className="text-2xl font-extrabold mb-4 text-[#091426] font-['libre_baskerville']">{Kuliner.name}</h1>
        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left text-[#091426] font-['libre_baskerville']">{Kuliner.nama_restoran}</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Alamat<p className='ml-8'>: {Kuliner.address}</p></h3>
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Jam Buka <p className='ml-4'>: {Kuliner.jam_buka}</p></h3>
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Harga <p className='ml-10'> : Rp.{Kuliner.price} </p> </h3>
            </div>
        {/* </div>
        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left text-[#091426] font-['libre_baskerville']">{Kuliner.name}</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Alamat <p className='ml-10'>: {Kuliner.address}</p></h3>
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Jam Buka <p className='ml-5'>: {Kuliner.jam_buka}</p></h3>
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Harga <p className='ml-11'>Rp. {Kuliner.price}</p></h3>
            </div>
        </div>

        <div className="bg-[#BFDCAE] p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-left text-[#091426] font-['libre_baskerville']">{Kuliner.name}</h2>
            <div className="bg-[#E6E6E6] p-4 mt-4 rounded-lg shadow-md">
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Alamat <p className='ml-8'>: {Kuliner.address}</p></h3>
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Jam Buka <p className='ml-4'> : {Kuliner.jam_buka}</p></h3>
                <h3 className="flex text-md mb-2 text-left text-[#091426] font-semibold">Harga <p className='ml-10'>Rp.{Kuliner.price}</p></h3>
            </div> */}

            <ul className="list-disc list-inside">
                
            </ul>
        </div>
    </div>
</div>
</div>
        <br/>
      </div>
}
        <Footer/>
    </div>
  )
}

export default DetailKuliner