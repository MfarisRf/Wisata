// eslint-disable-next-line no-unused-vars
import React from 'react'

const Editwisata = () => {
  return (
    <div className='p-20'>
        <form className="max-w-md mx-auto mr-[48%]">
        <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-[15px] font-medium text-[#29446F] dark:text-white">Nama Wisata</label>
            <input type="name" id="name" className="shadow-lg bg-gray-50 border-2 border-[#206A5D] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mb-5">
            <label htmlFor="time" className="block mb-2 text-[15px] font-medium text-[#29446F] dark:text-white">Jam Buka</label>
            <input type="time" id="time" className="shadow-lg bg-gray-50 border-2 border-[#206A5D] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
        </div>
        <form className="max-w-sm mx-auto w-[100%]">
            <label htmlFor="message" className="block mb-2 text-[15px] font-medium text-[#29446F] dark:text-white">Deskripsi</label>
            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-[#206A5D] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
        </form>
            </div>
        <div className="mb-5">
            <label htmlFor="time" className="block mb-2 text-[15px] font-medium text-[#29446F] dark:text-white">Jam Tutup</label>
            <input type="time" id="time" className="shadow-lg bg-gray-50 border-2 border-[#206A5D] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mb-5">
            <label htmlFor="price" className="block mb-2 text-[15px] font-medium text-[#29446F] dark:text-white">Harga Tiket</label>
            <input type="price" id="price" className="shadow-lg bg-gray-50 border-2 border-[#206A5D] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
        </div>
        <form className="max-w-sm mx-auto w-[100%] shadow-lg">
            <label htmlFor="message" className="block mb-2 text-[15px] font-medium text-[#29446F] dark:text-white">Maps / Lokasi Wisata</label>
            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-[#206A5D] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
        </form>
        </div>

        <div className='py-2 mr-14 mb-4 '>
        <form className="max-w-sm mx-auto shadow-lg">
            <label htmlFor="countries" className="block mb-2 w-[500%] text-[15px] font-medium text-[#29446F]">Kategori</label>
            <select id="countries" className="bg-gray-50 border-2 border-[#206A5D] text-gray-900 text-sm rounded-lg block w-[115%] p-2.5 dark:bg-[#6FA385] dark:border-[#6FA385] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#6FA385] dark:focus:border-[#6FA385]">
                <option></option>
                <option>Cirebon</option>
                <option>Indramayu</option>
                <option>Kuninggan</option>
            </select>
        </form>
        </div>

        <div className="grid md:gap-6">
        <div className="mb-5">
            <label htmlFor="address" className="block mb-2 text-[15px] font-medium text-[#29446F] dark:text-white">Alamat</label>
            <input type="address" id="address" className="shadow-lg bg-gray-50 border-2 border-[#206A5D] text-gray-900 text-sm rounded-lg focus:ring-[#6FA385] focus:border-[#6FA385] block w-full p-2.5 dark:bg-[#6FA385] dark:border-[#6FA385] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
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
  )
}

export default Editwisata