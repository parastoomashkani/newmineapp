'use client'
import React, { useState,useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi"
import { FaHome } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../public/images/logoNew (1).png"
import HeadedrImg from '../../public/images/Website-Frontpage-Header-02.jpg'
import { MdOutlineDashboard } from "react-icons/md";
import debounce from 'lodash.debounce';





const HeaderMain = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(process.env.BaseUrl + `/search?q=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data || []);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const debouncedFetchSearchResults = debounce(fetchSearchResults, 300);

  const handleInputChange = (event:any) => {
    setSearchQuery(event.target.value);
    debouncedFetchSearchResults();
    setIsDropdownVisible(true);
  };

  const handleEnterKey = (event:any) => {
    if (event.key === 'Enter') {
      setIsDropdownVisible(false);
    }
  };

  const handleOutsideClick = (event:any) => {
    if (event.target.closest('.search-container') === null) {
      setIsDropdownVisible(false);
    }
  };

  const handleResultClick = (result:any) => {
    setSelectedResult(result);
    setIsDropdownVisible(false);
    // Do any other action on result click
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (

    <div className=" HeaderMain border-b border-gray-200 py-4 bg-cyan-500	text-slate-50		" style={{ backgroundImage: `url(${HeadedrImg.src})`, backgroundSize: 'cover' }}>

      <div className="container sm:flex justify-between items-center">
        <div className="hidden lg:flex gap-4  text-[30px]  font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          <Image
            src={Logo}
            height={50}
            width={50}
            alt='logo'
          />
        </div>

        <div className="w-full justify-start sm:justify-end sm:w-[20%]  bg-white text-black md:w-[70%] relative">
          <input
            className="peer h-full w-full bg-sky-100 border-b  border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-black font-sans text-sm font-normal text-blue-gray-700 outline
           outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-amber-600	 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            type="text"
            placeholder="Enter any product name..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
          />
       {isDropdownVisible && searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border border-blue-gray-200 shadow-md">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className={`result-item ${selectedResult === result ? 'selected' : ''}`}
                  onClick={() => handleResultClick(result)}
                >
                  {result.name}{result.title}
                </div>
              ))}
            </div>
          )}

        </div>


        <div className="hidden lg:flex gap-4  text-gray-500 text-[30px]">
          <Link href="/accounts/login" >
            <BiUser />
          </Link>

          <div className="relative">
            <Link href="/">  <FaHome /></Link>

          </div>
          <div className="relative">
            <Link href="/dashboard">
              <MdOutlineDashboard />
            </Link></div>
        </div>

      </div>
    </div>
  );
};

export default HeaderMain;