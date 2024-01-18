"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import Engineer from './component/Engineer';
import axios from 'axios';

import Loading from "../../Louding"
import { CPagination ,CPaginationItem } from '@coreui/react'
import "bootstrap/dist/css/bootstrap.min.css";
const Page = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 3300)
  }, [])
  if (loading) {
      return  <Loading />
    }
  return (
    <main>
   
      <div className="w-full min-h-screen from-sky-50 via-purple-300 to-sky-50 bg-gradient-to-br px-10 pt-10">
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 pt-6">
       
            <Engineer  />
       
        </div>
      </div>
      <div className='flex items-center justify-center px'>
     <CPagination aria-label="Page navigation example">
  <CPaginationItem aria-label="Previous" disabled>
    <span aria-hidden="true">&laquo;</span>
  </CPaginationItem>
  <CPaginationItem active>1</CPaginationItem>
  <CPaginationItem>2</CPaginationItem>
  <CPaginationItem>3</CPaginationItem>
  <CPaginationItem aria-label="Next">
    <span aria-hidden="true">&raquo;</span>
  </CPaginationItem>
</CPagination>
</div>
    </main>
  );
};

export default Page;
