/* eslint-disable no-unused-vars */
import React from 'react'
import Olindramayu from '../LP/Ol_indramayu1.png';
import Olindramayu2 from '../LP/Ol_indramayu2.png';
import Olindramayu3 from '../LP/Ol_indramayu3.png';
import Olindramayu4 from '../LP/Ol_indramayu4.png';

const CardCirebon = () => {
  return (
    <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg shadow-2xl h-70 grid grid-cols-2 content-start absolute">
                <a href="#">
                    <img className="w-234" src={Olindramayu} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Olindramayu2} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Olindramayu3} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Olindramayu4} alt="wisata indramayu" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo pb-7">
                    <a href="#">
                        <h5 className="text-5 font-bold pl-20 mt-5">Oleh - Oleh Indramayu</h5>
                    </a>
                </div>
            </div>
  )
}

export default CardCirebon