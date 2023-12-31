"use client"

import React from 'react'
import AdvertisingForm from './component/Form'



const page = () => {
 
  return (
    <div className="container mx-auto ">
    <div className="flex flex-col md:flex-row justify-between items-center py-10">    
    <div className="col-span-2 rounded-lg bg-slate-200	 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 	 "> 
     
    <AdvertisingForm />
        </div>
        </div>
</div>
  )
}

export default page