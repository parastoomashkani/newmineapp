import React from 'react'
import {RxHamburgerMenu } from 'react-icons/rx';
import {BsChatSquareText } from 'react-icons/bs';
import {CiSaveDown2 } from 'react-icons/ci';
import {AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';
// import {useState} from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { BiUser } from "react-icons/bi"

const MobNavbar = () => {



  return (
    <div className='lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8'>
    <div className='flex justify-between text-[28px] py-2'>
    <AiOutlineHome />
    <div className='relative'>
    <Link href="/dashboard">
        <MdOutlineDashboard />
        </Link>
    <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[15px] h-[15px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>0</div>
    </div>
    <div className='relative'>
    <Link href="/accounts/login" >
        <BiUser />
</Link>
        
    <div    className='bg-red-600 rounded-full absolute top-0 right-0 w-[15px] h-[15px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>0</div>
    </div>
    </div>
   </div> 
  )
}

export default MobNavbar;