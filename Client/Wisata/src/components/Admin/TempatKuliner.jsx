import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TempatKuliner = () => {
  const [kuliner, setKuliner] = useState([]);

  useEffect(() => {
    getKuliner();
  }, []);

  const getKuliner = async () => {
    try {
      const response = await axios.get('http://localhost:5000/Kuliner');
      setKuliner(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteKuliner = async (kulinerId) => {
    try {
      await axios.delete(`http://localhost:5000/Kuliner/${kulinerId}`);
      getKuliner();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <h1>Daftar Kuliner</h1>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Detail Kuliner ID</th>
            {/* Add other table headers as needed */}
            <th>Edit</th>
            <th>Hapus</th>
          </tr>
        </thead>
        <tbody>
          {kuliner.map((item) => (
            <tr key={item.uuid} className="bg-[#F1F1E8] border-b dark:bg-gray-800 border-2 dark:border-[#206A5D] hover:bg-[#BFDCAE] dark:hover:bg-gray-600 text-center text-[#6FA385]">
              <td>{item.name}</td>
              <td>{item.detailkulinerid}</td>
              {/* Add other table cells as needed */}
              <td className="px-6 py-4 text-right">
                <Link to={`/Kuliner/edit/${item.uuid}`} className="button is-small is-info">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <svg className="w-6 h-6 text-[#0B56C8] dark:text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279" />
                    </svg>
                  </a>
                </Link>
              </td>
              <td className="px-6 py-4 text-right">
                <button onClick={() => deleteKuliner(item.uuid)} className="button is-small is-danger">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <svg className="w-6 h-6 text-[#FF0606] dark:text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                    </svg>
                  </a>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TempatKuliner;
