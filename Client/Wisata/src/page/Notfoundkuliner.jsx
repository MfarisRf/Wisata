// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import 'flowbite'
import Gambarnfk from '../assets/images/NFK - 1920x689.png'

function Notfoundkuliner() {
  return (
    <div>
    <Navbar/>
    <img class="h-2/5 w-5/5" src={Gambarnfk} alt="image description"></img>

    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404 - Not Found</h1>
        <p className="mt-4 text-lg text-gray-600">The page you are looking for might not exist.</p>
      </div>
    </div>


    </div>
  )
}

export default Notfoundkuliner