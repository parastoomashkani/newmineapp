import React from 'react'
import Contractors from './component/contractors'


const page = () => {
  return (
    <div className=' min-h-screen from-sky-50 via-purple-300 to-sky-50 bg-gradient-to-br '>
    <div className='flex items-center justify-center  '>
        <div className="grid grid-cols-1 gap-2 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3  lg:grid-col-3 xl:grid-cols-3  xl:gap-x-20 xl:gap-y-10 pt-6">
     
            <Contractors  />
         
      </div>
    </div>
    </div>
  )
}

export default page