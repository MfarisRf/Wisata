/* eslint-disable no-unused-vars */
import React from 'react'
import Olcirebon1 from '../LP/Ol_cirebon1.png';
import Olcirebon2 from '../LP/Ol_cirebon2.png';
import Olcirebon3 from '../LP/Ol_cirebon3.png';
import Olcirebon4 from '../LP/Ol_cirebon4.png';

const CardCirebon = () => {
    const [detailoleh, setDetailoleh] = React.useState([]);

  return (
    <div className="max-w-sm w-468 bg-f1f1e8 border border-gray-200 rounded-lg shadow-2xl h-70 grid grid-cols-2 content-start absolute">
                <a href="#">
                    <img className="w-234" src={Olcirebon1} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Olcirebon2} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Olcirebon3} alt="wisata indramayu" />
                </a>
                <a href="#">
                    <img className="w-234" src={Olcirebon4} alt="wisata indramayu" />
                </a>
                <div className="text-[#29446F] w-80 font-Boogaloo pb-7">
                    <a href="#">
                        <h5 className="text-base font-bold pl-20 mt-5">Oleh - Oleh Cirebon</h5>
                    </a>
                </div>
    </div>
  )
}

export default CardCirebon