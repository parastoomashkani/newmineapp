"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import defaultImage from '../../../../public/images/none.png';

interface Contractor {
  name: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  body: string;
  location: string;
}



const Contractors: React.FC = () => {
  const [apiData, setApiData] = useState<any>(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.BaseUrl + '/showJobs?page=');
        setApiData(response.data.data);
        console.log('Fetched data:', response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])



  return (
    <>
      {apiData && apiData.map((item:any) => (
        <div className='w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl'key={item.id}>
          <div className='flex flex-col md:flex-row -5/6 w-3/4 md:wspace-x-0 md:space-x-8'>
            <div className='w-full md:w-2/5 flex flex-col items-center justify-center'>
              <figure className='w-1/2 md:w-full  rounded-full overflow-hidden'>
              <img src={item.image1 || defaultImage} alt="Contractor" />
              </figure>
            </div>
            <div className='w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center'>
              <div className='flex flex-col justify-center'>
                <h1 className='text-center md:text-left text-2xl font-bold text-gray-900'>
                  {item.name} 
                </h1>
                <p className='inline text-gray-700 font-normal leading-6 w-full text-base'> ایمیل</p>
              </div>
              <ul className='space-y-4  md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center'>
                <li className='text-sm'>
                  <i className='iconoir-pin-alt mr-2'></i>
                  {/* {item.location} */}
                </li>
                <li className='text-sm'>
                  <i className='iconoir-calendar mr-2'></i>
                </li>
                <li className='text-sm'>
                  <i className='iconoir-calendar mr-2'></i>
                  {item.body}
                </li>
              </ul>

              <button className='transition-colors bg-purple-700 hover:bg-purple-800 p-2 rounded-sm w-full text-white text-hover shadow-md shadow-purple-900'>
                تماس
              </button>
            </div>
          </div>
        </div>
      ))}
      
    </>
  );
};
export default Contractors;