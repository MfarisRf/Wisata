// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../assets/images/Logo_navbar.png'

const TentangKami = () => {
    return (
        <div>
            <nav className="bg-f1f1e8 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-f1f1e8 dark:border-f1f1e8">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                <img src={logo} className="img-fluid logo h-12 w-50 ml-20" alt="brand"/>
                </a>
                <div>
                    
                </div>
                </div>
            </nav>
        </div>
    )
}

export default TentangKami