"use client"

import React,{useState ,useCallback} from 'react'
import AdvertisingForm from './component/Form'
import Imgloading from "./component/Imgloading"
import dynamic from "next/dynamic";
import notify from 'devextreme/ui/notify';

const DynamicMap = dynamic(() => import('./component/map/map'), {
  ssr: false
});


const page = () => {
  const onClick = useCallback(() => {
    notify('Uncomment the line to enable sending a form to the server.');
    // formElement.current.submit();
  }, []);
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 p-36  place-items-center sm:place-items-start  ">
    <div className="row-span-3  ">
      <div className='flex flex-col  	'>
<div className='bg-slate-200	rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 p-4 ' >
   <Imgloading />
</div>

<div className='bg-slate-200 mt-8 justify-items-center	 rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 p-4'>
<DynamicMap />
</div>
      </div>
      
       </div>
    <div className="col-span-2 rounded-lg bg-slate-200	 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 	 "> 
     
    <AdvertisingForm />
        </div>
        <div className="row-span-2 col-span-2  mt-11 justify-items-center">
<div >
<button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
لغو
            </button>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
onClick={onClick}            >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
             ثبت آگهی 
                </span>
            </button>
</div>

        </div>

</div>
  )
}

export default page