// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'

function NotFound() {
  return (
    <div>
    <Navbar/>
    
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404 - Not Found</h1>
        <p className="mt-4 text-lg text-gray-600">The page you are looking for might not exist.</p>
      </div>
    </div>


    </div>
  )
}

export default NotFound