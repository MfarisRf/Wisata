import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TempatOleh from '../../../../../Server/controllers/TempatOleh';

const ListOleh = () => {
  const [ Oleh, setOleh] = useState([]);

  useEffect(() => {
    getOleh();
  }, []);

  const getOleh = async () => {
    try {
      const response = await axios.get('http://localhost:5000/TempatOleh');
      setOleh(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteTempatOleh = async (OlehId) => {
    try {
      await axios.delete(`http://localhost:5000/Kuliner/${OlehId}`);
      getOleh();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <table>
        <tbody>
            {TempatOleh.map((TempatOleh, index) => (
               <tr key={TempatOleh.uuid} className="bg-[#F1F1E8] border-b dark:bg-gray-800 border-2 dark:border-[#206A5D] hover:bg-[#BFDCAE] dark:hover:bg-gray-600 text-center text-[#6FA385]">
                  <td>{TempatOleh.detailOleh.name}</td>
                  <td>{TempatOleh.jam_buka}</td>
                  <td>{TempatOleh.price}</td>
                  <td>{TempatOleh.categoryId}</td>
                  <td className="px-6 py-4 text-right">
                  <svg className="w-6 h-6 text-[#0B56C8] dark:text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                  <Link to={'/TempatKuliner/edit/${TempatKuliner.uuid}'} className="button is-small is-info"></Link>
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"/>
                  </svg>
                </td>
                  <td className="px-6 py-4 text-right">
                  <Link to={'/TempatKuliner/edit/${TempatKuliner.uuid}'} className="button is-small is-info"></Link>
                  <button onClick={()=> deleteTempatOleh(TempatOleh.uuid)}className="button is-small is-danger">Delete</button>
                  </td>
               </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOleh