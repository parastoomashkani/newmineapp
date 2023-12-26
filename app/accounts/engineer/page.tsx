"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import Engineer from './component/Engineer';
import axios from 'axios';


const Page = () => {

  return (
    <main>
   
      <div className="w-full min-h-screen from-sky-50 via-purple-300 to-sky-50 bg-gradient-to-br px-10 pt-10">
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 pt-6">
       
            <Engineer  />
       
        </div>
      </div>
    </main>
  );
};

export default Page;
