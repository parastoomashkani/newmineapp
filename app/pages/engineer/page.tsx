"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import Engineer from './component/Engineer';
import axios from 'axios';


const Page = () => {

  return (
    <main>
      <div>
        <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 pt-6">
       
            <Engineer  />
       
        </div>
      </div>
    </main>
  );
};

export default Page;
