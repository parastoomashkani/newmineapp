'use client'
// import React, { useState,useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi"
import { FaHome } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../public/images/logoNew (1).png"
import HeadedrImg from '../../public/images/Website-Frontpage-Header-02.jpg'
import { MdOutlineDashboard } from "react-icons/md";
import React, { useCallback, useState,useEffect } from 'react';
import List, { ListTypes } from 'devextreme-react/list';
import '../../node_modules/devextreme/dist/css/dx.carmine.compact.css';

function ItemTemplate(data:any) {
  const handleItemClick = async () => {
     
    try {
      const response = await fetch(`${process.env.BaseUrl}/ad?id=${data.id}`);
      const additionalData = await response.json();
   
      console.log("Additional data:", additionalData);
    } catch (error) {
      console.error('Error fetching additional data:', error);
    }
  };

  return  <div onClick={handleItemClick } >{data.Name} {data.title}</div> ;
}

const HeaderMain = () => {


  const [products, setProducts] = useState([]);
  const [searchMode, setSearchMode] = useState('contains');
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);

  const onSearchModeChange = useCallback((args:any) => {
    setSearchMode(args.value);
  }, [setSearchMode]);

  const fetchData = async (searchText:any) => {
    try {
      const response = await fetch(`${process.env.BaseUrl}/search?text=${searchText}`);
      const data = await response.json();
      setProducts(data);
      setSearchResultsVisible(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (value:any ) => {
    if (value.length > 0) {
      fetchData(value);
    } else {
      setSearchResultsVisible(false);
    }
  };

  const handleInputBlur = () => {
    setSearchResultsVisible(false);
  };


  return (

    <div className=" HeaderMain border-b border-gray-200 py-4 bg-cyan-500	text-slate-50	z-20	" style={{ backgroundImage: `url(${HeadedrImg.src})`, backgroundSize: 'cover' }}>

      <div className="container sm:flex justify-between items-center">
        <div className="hidden lg:flex gap-4  text-[30px]  font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          <Image
            src={Logo}
            height={50}
            width={50}
            alt='logo'
          />
        </div>

   
  <React.Fragment>
  <div className="w-full justify-start sm:justify-end sm:w-[20%] rounded-r-lg bg-white text-black md:w-[70%] relative">
      <div className="search-bar">  
        <input
          className="text-black peer h-full w-full bg-sky-100 border-b rounded-br-lg border-blue-gray-200 bg-transparent pt-4 pb-1.5  font-sans text-sm font-normal text-blue-gray-700 outline
          outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-amber-600	 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-5 "
          placeholder="Type to search..."
          onChange={(e) => handleInputChange(e.target.value)}
          onBlur={handleInputBlur}
        />  
   
      </div>
      {searchResultsVisible && (
        <div className="search-results absolute bg-white z-30  ">
          <List
            dataSource={products}
            height={200}
            itemRender={ItemTemplate}
            searchExpr="Name, title"
            // searchEnabled={true}
            // searchMode={searchMode}
          />
        </div>
      )}
      </div>
    </React.Fragment>

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