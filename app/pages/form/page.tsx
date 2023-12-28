import React from 'react'
import AdvertisingForm from './component/Form'
import Imgloading from "./component/Imgloading"
const page = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 p-36  place-items-center sm:place-items-start  ">
    <div className="row-span-3  ">
      <div className='flex flex-col  rounded-lg bg-slate-200	 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 	'>
<div >
   <Imgloading />
</div>
<div>

</div>
      </div>
      
       </div>
    <div className="col-span-2 rounded-lg bg-slate-200	 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 	 "> 
     
    <AdvertisingForm />
        </div>

</div>
  )
}

export default page