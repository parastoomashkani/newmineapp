import React from 'react'
import Image from 'next/image'
import img from '../../../../public/images/Annotation 2023-12-03 214500.png';
import { ImPriceTags } from "react-icons/im";
function Store() {
  return (
    <div className='flex items-center justify-center  '>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  place-items-center sm:place-items-startlg:grid-col-3  lg:grid-col-3 xl:grid-cols-3  xl:gap-x-16 xl:gap-y-8 pt-4"></div>
    <div className='w-full max-w-lg py-8 flex flex-row items-center border border-gray-400  justify-center mx-auto rounded-sm bg-[#FFFBFB]   shadow-md'>
    <div className='flex flex-col md:flex-row  w-3/4 md:w-5/6 space-x-0 md:space-x-8'>
      <div className='w-full md:w-2/5 flex flex-col items-center justify-center'>
      <figure className='w-2/5 md:w-full  overflow-hidden'>
                <Image src={img} height={500} width={500} alt='img'/>
              </figure>
        </div>
        <div className='w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center'>
              <div className='flex flex-col justify-center'>
                <h1 className='text-center md:text-left text-2xl font-bold text-gray-900'>
              بیل میکانیکی 
                </h1>
                <hr />
                <p className='inline text-gray-700 font-normal leading-6 w-full text-base'>
           مشهد    
                </p>
              </div>
              <ul className='space-y-4   md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center '>
                <li className='text-sm'>
                  <i className='iconoir-pin-alt mr-2'> 25000</i>
            قیمت 
                </li>
                <li className='text-sm'>
                  <i className='iconoir-calendar mr-1'>  <ImPriceTags /></i>
                
                </li>
                
              </ul>
              <ul className='space-y-4  md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center'>
        
              <li className='text-sm'>
                  <i className='iconoir-calendar mr-2'></i>
                 phone
                </li>
                </ul>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Store
