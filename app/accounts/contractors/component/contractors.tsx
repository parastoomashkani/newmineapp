"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import defaultImage from '../../../../public/images/none.png';
import { FaPhone} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
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

  const [centredModal, setCentredModal] = useState<boolean>(false);

  const modalOpen = () => setCentredModal(!centredModal);

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
            <div className='w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center p-4'>
              <div className='flex flex-col justify-center'>
                <h1 className='text-center md:text-left text-2xl font-bold text-gray-900'>
                  {item.name} 
                </h1>
              </div>
              <br />
             
              <ul className='space-y-4  md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center'>
                <li className='text-sm'>
                  <i className='iconoir-pin-alt mr-2'></i>
                  {/* {item.location} */}
                </li>
                <li className='text-sm'>
                  <i className='iconoir-calendar mr-2'>
                   متخصص حفاری 
                  </i>
                </li>                 
              </ul>
 <div className='mt-20 p-2'>
                <p className='text-sm text-gray-500'>
              {item.body }
              </p>
              </div>
              <button onClick={modalOpen} className='transition-colors bg-purple-700 hover:bg-purple-800 p-2 rounded-sm w-full text-white text-hover shadow-md shadow-purple-900'>
                تماس
              </button>
              <MDBModal tabIndex='-1' open={centredModal} setOpen={setCentredModal}    color='none'>
                                            <MDBModalDialog centered   color='none' >
                                                <MDBModalContent>
                                                    <MDBModalHeader>
                                                        <MDBModalTitle> راه های ارتباطی </MDBModalTitle>
                                                        <MDBBtn className='btn-close' color='none' onClick={modalOpen}></MDBBtn>
                                                    </MDBModalHeader>
                                                    <MDBModalBody>
                                                        <div className='flex justify-between' >
                                                       
                                                                   <img src={item.image1 || defaultImage} alt="Contractor"    className="w-22 h-22 bg-gray-300 rounded-full mb-4 shrink-0"/>
                                                            <h4 className="font-bold text-3xl text-center mb-1">
                                                                {item.name} 
                                                            </h4>
                                                        </div>
                                                        <ul className='flex flex-col'>
                                                            <i>
                                                                <div className='flex justify-between '>
                                                                    <div className='w-8 h-8  p-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500' >
                                                                        <TfiEmail size={20} />
                                                                    </div>
                                                                    <div> ایمیل </div>
                                                                </div>
                                                            </i>
                                                            <br />
                                                            <li>
                                                                <div className='flex justify-between'>
                                                                    <div className='w-8 h-8  p-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500' >
                                                                        <FaPhone size={20} />
                                                                    </div>
                                                                    <div>
                                                                  تلفن
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </MDBModalBody>
                                                    <MDBModalFooter>
                                                        <MDBBtn>  ارسال پیامک </MDBBtn>
                                                    </MDBModalFooter>
                                                </MDBModalContent>
                                            </MDBModalDialog>
                                        </MDBModal>
            </div>
          </div>
        </div>
      ))}
      
    </>
  );
};
export default Contractors;