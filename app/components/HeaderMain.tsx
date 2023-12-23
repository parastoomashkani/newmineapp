'use client'
import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../public/images/logoNew (1).png"
import Background from '../../public/images/header.png'
const HeaderMain = () => {

  
  return (

    <div className=" HeaderMain border-b border-gray-200 py-4 bg-cyan-500		" style={{backgroundImage:`url(${Background})`,backgroundSize: 'auto' }}>
   
    <div className="container sm:flex justify-between items-center">
      <div className="hidden lg:flex gap-4  text-[30px]  font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
   <Image
   src={Logo}
   height={50}
   width={50}
   alt='logo'
    />
      </div>

      <div className="w-full sm:w-[300px] md:w-[70%] relative">
        <input
          className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline
           outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-amber-600	 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          type="text"
          placeholder="Enter any product name..."
        />

        <BsSearch
          className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
          size={20}
        /> 
       
      </div>
      

      <div className="hidden lg:flex gap-4  text-gray-500 text-[30px]">
        <Link href="/pages/login" >
        <BiUser />
</Link>
        <div className="relative">
          <Link href="/">  <FaHome /></Link>
      
        </div>
      
      </div>

    </div>
  </div>
  );
};

export default HeaderMain;