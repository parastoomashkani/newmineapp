import React from 'react'
import Chats from './Chat'

const page = () => {
  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
    {/* <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200"> */}
       <div className="relative flex items-center space-x-8  h-full">
    
    
       <Chats />
    </div>
    {/* </div> */}
    </div>
  )
}

export default page