'use client';
import { document } from 'postcss';
import React, { Fragment, useRef, useState } from 'react'
import { FaArrowAltCircleDown } from "react-icons/fa";

const PDF_FILE_URL='http://localhost:3000/pages/article/mine-article.pdf'

interface propsType {
   title:string;
   name: string;
   doc: string;
  
}

const Aticle: React.FC<propsType> = ({
  title,
   name,
   doc,
   
}) =>  {
    const downloadFileAtURL=(url:any)=>{
        fetch(url).then(response=>response.blob()).then(blob=>{
            const blobURL=window.URL.createObjectURL(new Blob([blob]))
            const fileName= url.split("/").pop();
            const aTag = document.createElement('a');
aTag.href=blobURL;
aTag.setAttribute('download',fileName);
document.body.appendChild(aTag);
aTag.click();
aTag.remove();
      })
    };
  return (
 
          <div className="flex p-3 border-l-8  border-gray-500 border">
             <div className="space-y-1 border-r-2 pr-3">
             <FaArrowAltCircleDown size={40} className="justify-center mt-" />

             </div>
             <div className="flex-1">
                <div className="ml-3 space-y-1 border-r-2 pr-3">
                   <div className="text-base leading-6 font-normal">{title}</div>
                   <div className="text-sm leading-4 font-normal"><span className="text-xs leading-4 font-normal text-gray-500">  {name} </span>  {""}: نام نویسنده  </div>
                   <div className="text-sm leading-4 font-normal"><span className="text-xs leading-4 font-normal text-gray-500">  {title} </span> {""}:  موضوع   </div>
                </div>
             </div>
             <div className="border-r-2 pr-3">
                <div >
                   <div className="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                      <div className="uppercase text-xs leading-4 font-medium">PDF</div>
                      <div className="text-center text-sm leading-4 font-semibold text-gray-800">1</div>
                   </div>
                </div>
             </div>
             <div>
                <div className="ml-3 my-5 bg-yellow-600 p-1 w-20">
                   <div onClick={()=>{downloadFileAtURL( PDF_FILE_URL)}} className="uppercase text-xs leading-4 font-semibold text-center text-yellow-100">Download</div>
                </div>
             </div>
             <div>
                <button className="text-gray-100 rounded-sm my-5 ml-2 focus:outline-none bg-gray-500">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                   </svg>
                </button>
             </div>
          </div>
      
      
    

  )
}

export default Aticle;