"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Buttons from './Buttons';

interface Service { 
    gender:{
titel:string;
    },
    name: {
      first: string;
      last: string;
     :string;
    };
    email: string;
    location: {
      city: string;
      state: string;
    };
    phone: string;
    picture: {
      large: string;
    };
  }
  

const Service:React.FC= () => {
    const [state, setState] = useState< Service[]>([]);
const menuItems=[...new Set(getData.map( (item) => item.gender.titel))]
const filterItems=(gen)=>{
    const newItem = state.filter((newitem)=>newitem.gender.titel=== gen)
setState(newItems)
}
    async function getData() {
      const res = await fetch('https://randomuser.me/api/?results=40');
      const data = await res.json();
      setState(data.results);
      console.log(state);
    }
  
    console.log('i am:', state);
  
    useEffect(() => {
      getData();
    }, []);
  
  return (
    <>
    <Buttons 
       menuItems={ menuItem}
      filterItems={filterItems}
      setState={setItems}
    />
    {state.map((item) => (
    
   <div className='w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl'>
 
   <div className='flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8'>
     <div className='w-full md:w-2/5 flex flex-col items-center justify-center'>
       <figure className='w-1/2 md:w-full  rounded-full overflow-hidden'>
         <Image src={item.picture.large} height={500} width={500} alt={item.name.first} />
       </figure>
     </div>
     <div className='w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center'>
       <div className='flex flex-col justify-center'>
         <h1 className='text-center md:text-left text-2xl font-bold text-gray-900'>
           {item.name.first} {item.name.last}
         </h1>
         <p className='inline text-gray-700 font-normal leading-6 w-full text-base'>{item.email}</p>
       </div>
       <ul className='space-y-4  md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center'>
         <li className='text-sm'>
           <i className='iconoir-pin-alt mr-2'></i>
           {item.location.city}
         </li>
         <li className='text-sm'>
           <i className='iconoir-calendar mr-2'></i>
           {item.location.state}
         </li>
         <li className='text-sm'>
           <i className='iconoir-calendar mr-2'></i>
           {item.phone}
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
  )
}

export default Service;