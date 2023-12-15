/* eslint-disable no-unused-vars */
import React from 'react'
import Olkuningan from '../LP/Ol_Kuningan1.png';
import Olkuningan2 from '../LP/Ol_Kuningan2.png';
import Olkuningan3 from '../LP/Ol_Kuningan3.png';
import Olkuningan4 from '../LP/Ol_Kuningan4.png';

const CardCirebon = () => {
  return (
    <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg shadow-2xl h-70 grid grid-cols-2 content-start absolute">
                <a href="#">
                    <img className="w-234" src={Olkuningan} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Olkuningan2} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Olkuningan3} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Olkuningan4} alt="wisata indramayu" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo pb-7">
                    <a href="#">
                        <h5 className="text-5 font-bold pl-20 mt-5">Oleh - Oleh Kuningan</h5>
                    </a>
                </div>
            </div>
  )
}

export default CardCirebon