import React from 'react'
import Indramayu1 from '../LP/wisata_indramayu1.png';
import Indramayu2 from '../LP/wisata_indramayu2.png';
import Indramayu3 from '../LP/wisata_indramayu3.png';
import Indramayu4 from '../LP/wisata_indramayu4.png';

const CardCirebon = () => {
  return (
    <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg shadow-2xl h-70 grid grid-cols-2 content-start absolute">
                <a href="#">
                    <img className="w-234" src={Indramayu1} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Indramayu2} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Indramayu3} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Indramayu4} alt="wisata indramayu" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo pb-7">
                    <a href="#">
                        <h5 className="mb-2 text-5 font-bold pl-20 mt-5">Oleh - Oleh Cirebon</h5>
                    </a>
                </div>
    </div>
  )
}

export default CardCirebon