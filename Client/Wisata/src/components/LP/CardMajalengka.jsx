/* eslint-disable no-unused-vars */
import React from 'react'
import Olmajalengka1 from '../LP/Ol_majalengka1.png';
import Olmajalengka2 from '../LP/Ol_majalengka2.png';
import Olmajalengka3 from '../LP/Ol_majalengka3.png';
import Olmajalengka4 from '../LP/Ol_majalengka4.png';

const CardCirebon = () => {
  return (
    <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg shadow-2xl h-70 grid grid-cols-2 content-start absolute">
                <a href="#">
                    <img className="w-234" src={Olmajalengka1} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Olmajalengka2} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Olmajalengka3} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Olmajalengka4} alt="wisata indramayu" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo pb-7">
                    <a href="#">
                        <h5 className="text-5 font-bold pl-20 mt-5">Oleh - Oleh Majalengka</h5>
                    </a>
                </div>
            </div>
  )
}

export default CardCirebon