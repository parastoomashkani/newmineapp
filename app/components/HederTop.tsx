"use client"
import Link from 'next/link';
import React, { useState ,useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';
import { MdOutlinePhoneEnabled } from 'react-icons/md';
import Logout from './Logout';

const HederTop = () => {
    const [user, setUser] = useState(null);  

const name =  localStorage.getItem('name');
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fetch(process.env.BaseUrl +'/'); // Replace with your actual user API endpoint
          const userData = await response.json();
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchUserData();
    }, []);
 
 
  return (
    <div className="border-b bg-cyan-600 hidden sm:block">
      <div className="container py-1">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
                 <div className='pr-4 justify-end '   >
              <Logout/>  
             </div>
          <div  className='pr-4'>
                {name}
                </div>
          
            <div className="header-dropdown ">
              <select
                className="text-[13px] w-[180px] block py-0 px-0 bg-teal-50 border-gray-300 text-orange-950 text-sm rounded-lg focus:ring-blue-500
                                focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                "
                name="currency"
                id="currency"
              >
                <option value="فارسی">فارسی </option>
                <option value="انگلیسی">انگلیسی </option>
              </select>
          
            </div>
            <div className="header_top__icon_wrapper">
              <FaFacebookF />
            </div>
            <div className="header_top__icon_wrapper">
              <FaTwitter />
            </div>
            <div className="header_top__icon_wrapper">
              <FaInstagram />
            </div>
            <div className="header_top__icon_wrapper">
              <FaPinterestP />
            </div>
          </div>
          <div className="flex gap-4 text-[12px] text-teal-50">
            تلفن تماس :0930....8978
            <MdOutlinePhoneEnabled className="text-[17px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HederTop;
