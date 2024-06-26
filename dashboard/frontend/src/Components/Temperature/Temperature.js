import React, { useState, useEffect } from 'react';
import Rtd from './Rtd';
import TC from './TC';
import Loader from '../Loading/Loader'; 
import './Temperature.css'


function Temperature() {
  const [loading, setLoading] = useState(true);
  const [rtdData, setRtdData] = useState({});
  const [tcData, setTcData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          fetchRtdData(),
          fetchTcData()
        ]);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  const fetchRtdData = async () => {
    try {
      const response = await fetch('https://cmti-edge.online/smddc/AMSINDIA.php');
      if (!response.ok) {
        throw new Error('Failed to fetch RTD data');
      }
      const data = await response.json();
      setRtdData(data); // Store the RTD data in state
    } catch (error) {
      console.error('Error fetching RTD data:', error);
      throw error;
    }
  };

  const fetchTcData = async () => {
    try {
      const response = await fetch('https://cmti-edge.online/smddc/AMSINDIA.php');
      if (!response.ok) {
        throw new Error('Failed to fetch TC data');
      }
      const data = await response.json();
      setTcData(data); // Store the TC data in state
    } catch (error) {
      console.error('Error fetching TC data:', error);
      throw error;
    }
  };

  return (
    <div className='w-100'>
      {loading ? (
        <Loader /> 
      ) : (
        <>
        <div className='temp_texts d-flex ps-3 mt-2 fs-3  ms-4 bg-[#03045e] h-16 justify-center items-center text-white rounded-[20px] md:justify-center md:ms-0'>
    <p className='temp_text p-3 text-center'>Temperature</p>
</div>
        <div className=' ps-4 mt-3 flex'>
          <p className='fs-3 fw-bolder '>PT 100 RTD  </p>
        </div>
          <div>
            <Rtd data={rtdData} />
          </div>
          <div className=' ps-4 mt-4 flex'>
          <p className='fs-3 fw-bolder '>Thermo Couple  </p>
        </div>
          <div>
            <TC data={tcData} />
          </div>
        </>
      )}
    </div>
  );
}

export default Temperature;
