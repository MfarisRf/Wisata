// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect} from 'react'
import Navbar_admin from '../../../components/Navbar_admin '
import Gambar from '../../../assets/images/Ghandi.jpg'
import FooterAdmin from '../../../components/FooterAdmin'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Editwisata = () => {

   const [ name, setName] = useState("")
   const [ jam_buka, setJam_buka]= useState("")
   const [ description, setDescription]= useState("")
   const [ jam_tutup, setJam_tutup]= useState("")
   const [ price, setPrice]= useState("")
   const [ location, setLocation]= useState("")
   const [ categoryId, setCategoryId]= useState("")
   const [ address, setAddress]= useState("")
   const navigate = useNavigate();

   const saveWisata = async(e) => {
      e.preventDefault();
      try {
         await axios.post("http://localhost:3000/wisata", {
            name,
            jam_buka,
            description,
            jam_tutup,
            price,
            location,
            categoryId,
            address,
         });
         navigate("/Dashboard");
      } catch (error) {
         if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
         }
      }
   };

  return (
    <div>
   <Navbar_admin/>

   
<button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 pt-24" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-[#BFDCAE] dark:bg-gray-800 ml-2 rounded-lg">
      <ul className="space-y-2 font-medium">
           {/*Profile */}
         <div className="flex items-center gap-4 pt-10 pb-5">
            <img className="w-15 h-14 rounded-full" src={Gambar} alt=""/>
            <div className="font-medium dark:text-white">
            <div>Ghandi</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">ghandi@gmail.com</div>
         </div>
      </div>
      {/* Penutup */}
         <li>
            <a href="/Dashboard" className="flex items-center p-2 text-[#29446F] font-bold rounded-lg dark:text-white hover:bg-[#F1F1E8] dark:hover:bg-gray-700 group">
            <svg className="w-6 h-6 text-[#6FA385] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
               <span className="ms-3">Home</span>
            </a>
         </li>
         <li>
            <button type="button" className="flex items-center w-full p-2 text-base text-[#29446F] font-bold transition duration-75 rounded-lg group hover:bg-[#F1F1E8] dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg className="w-6 h-6 text-[#6FA385] font-bold dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10ZM17 13h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z"/>
                  </svg>
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Tambah</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li className='pl-5'>
                     <a href="/TambahWisata" className="flex items-center p-2 text-[#29446F] font-bold rounded-lg dark:text-white hover:bg-[#F1F1E8] dark:hover:bg-gray-700 group">
                     <svg className="w-[23px] h-[23px] text-[#6FA385] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                     </svg>
                     <span className="ms-3">Tambah Wisata</span>
                     </a>
                  </li>
                  <li className='pl-5'>
                     <a href="/TambahKuliner" className="flex items-center p-2 text-[#29446F] font-bold rounded-lg dark:text-white hover:bg-[#F1F1E8] dark:hover:bg-gray-700 group">
                     <svg className="w-[23px] h-[23px] text-[#6FA385] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                     </svg>
                     <span className="ms-3">Tambah Kuliner</span>
                     </a>
                  </li>
                  <li className='pl-5'>
                     <a href="/TambahOleh" className="flex items-center p-2 text-[#29446F] font-bold rounded-lg dark:text-white hover:bg-[#F1F1E8] dark:hover:bg-gray-700 group">
                     <svg className="w-[23px] h-[23px] text-[#6FA385] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                     </svg>
                     <span className="ms-3">Tambah Oleh-oleh</span>
                     </a>
                  </li>
            </ul>
         </li>
         <li>
            <a href="/ProfileAdmin" className="flex items-center p-2 text-[#29446F] rounded-lg dark:text-white hover:bg-[#F1F1E8] dark:hover:bg-gray-700 group font-bold">
            <svg className="w-[23px] h-[23px] text-[#6FA385] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"/>
            </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Edit Profile</span>
            </a>
         </li>
         <li>
         <button type="Logout" className="mt-[25%] text-[#29446F] bg-[#BFDCAE] font-bold rounded-lg text-sm text-center ml-[25%] w-28 h-9 border border-[#DC4848]"><a href="/Login">LogOut</a></button>
         </li>
      </ul>
   </div>
</aside>


<div className="p-4 sm:ml-64 pt-atas h-auto w-auto">
   <div className="p-52 border-2 border-gray-200 rounded-lg dark:border-gray-700 bg-[#BFDCAE] pt-10 px-20 pb-52 pr-[4%]">
   <div className='flex ml-10 pb-10'>
      <p className='font-bold text-2xl mr text-[#29446F]'>Edit Wisata</p>
      </div>

   

<form className="max-w-md mx-auto mr-[48%]">
<div className="mb-5">
    <label htmlFor="name"className="block mb-2 text-[15px] font-medium text-[#29446F] dark:text-white">Nama Wisata</label>
    <input type="name" 
    id="name" 
    value= "{name}" 
    onChange={(e) => setName(e.target.value)}
    className="shadow-lg bg-gray-50 border-2 border-[#206A5D] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
   placeholder="" required />
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="mb-5">
    <label htmlFor="time" className="block mb-2 text-[15px] font-medium text-[#29446F] dark:text-white">Jam Buka</label>
    <input type="text" id="time" 
    value= "{jam_buka}" 
    onChange={(e) => setJam_buka(e.target.value)}
    className="shadow-lg bg-gray-50 border-2 border-[#206A5D] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
   </div>
   <form className="max-w-sm mx-auto w-[100%]">
      <label htmlFor="message" className="block mb-2 text-[15px] font-medium text-[#29446F] dark:text-white">Deskripsi</label>
      <textarea id="message" 
      rows="4" 
      value= "{description}" 
      onChange={(e) => setDescription(e.target.value)}
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-[#206A5D] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
   </form>
    </div>
   <div className="mb-5">
      <label htmlFor="time" className="block mb-2 text-[15px] font-medium text-[#29446F] dark:text-white">Jam Tutup</label>
      <input type="text" 
      id="time" 
      value= "{jam_tutup}" 
      onChange={(e) => setJam_tutup(e.target.value)}
      className="shadow-lg bg-gray-50 border-2 border-[#206A5D] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
   </div>
  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="mb-5">
    <label htmlFor="price" className="block mb-2 text-[15px] font-medium text-[#29446F] dark:text-white">Harga Tiket</label>
    <input type="price" 
    id="price" 
    value= "{price}" 
    onChange={(e) => setPrice(e.target.value)}
    className="shadow-lg bg-gray-50 border-2 border-[#206A5D] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
   </div>
  <form className="max-w-sm mx-auto w-[100%] shadow-lg">
     <label htmlFor="message" className="block mb-2 text-[15px] font-medium text-[#29446F] dark:text-white">Maps / Lokasi Wisata</label>
     <textarea id="message" 
     rows="4" 
     value= "{location}" 
    onChange={(e) => setLocation(e.target.value)}
     className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-[#206A5D] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
  </form>
  </div>

   {/* <div className='py-2 mr-14 mb-4 '> */}
   {/* <form className="max-w-sm mx-auto shadow-lg">
      <label htmlFor="countries" className="block mb-2 w-[500%] text-[15px] font-medium text-[#29446F]">Kategori</label>
      <select id="countries" 
      value= "{categoryId}" 
      onChange={(e) => setCategoryId(e.target.value)}
      className="bg-gray-50 border-2 border-[#206A5D] text-gray-900 text-sm rounded-lg block w-[115%] p-2.5 dark:bg-[#6FA385] dark:border-[#6FA385] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#6FA385] dark:focus:border-[#6FA385]">

         <option></option>
         <option>{categoryId}</option>
         <option>{categoryId}</option>
         <option>{categoryId}</option>
      </select>
   </form>
   </div> */}

  <div className="grid md:gap-6">
   <div className="mb-5">
     <label htmlFor="address" className="block mb-2 text-[15px] font-medium text-[#29446F] dark:text-white">Alamat</label>
     <input type="address" 
     id="address" 
     value= "{address}" 
    onChange={(e) => setAddress(e.target.value)}
     className="shadow-lg bg-gray-50 border-2 border-[#206A5D] text-gray-900 text-sm rounded-lg focus:ring-[#6FA385] focus:border-[#6FA385] block w-full p-2.5 dark:bg-[#6FA385] dark:border-[#6FA385] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
    </div>
  </div>
  <div className="grid md:gap-6 pb-5 mr-52 mb-4">
      <form className="max-w-lg mx-auto w-[187%] shadow-lg">
         <label className=" block mb-2 text-[15px] font-medium text-[#29446F] dark:text-[#29446F]" htmlFor="image">Upload file</label>
            <input className="block w-full text-sm text-red-900 border-2 border-[#206A5D] rounded-lg cursor-pointer bg-gray-50 dark:text-[#C7E8B4] focus:outline-none dark:bg-[#C7E8B4] dark:border-[#C7E8B4] dark:placeholder-gray-400" aria-describedby="image" id="image" type="file" placeholder='No file chosen'/>
      </form>
  </div>
  <div className='ml-[90%] pt-10'>
      <button type="submit" className="text-[#222D3F] bg-[#6FA385] hover:bg-[#6FA385]focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[200%] px-5 py-2.5 text-center text-bold shadow-lg">Simpan</button>
  </div>
</form>

   </div>
   </div>

   <div className='relative'>
      <FooterAdmin/>
   </div>

    </div>
  )
}

export default Editwisata