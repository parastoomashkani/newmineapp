'use client';
import { FC  } from 'react'   ;
import dynamic from "next/dynamic";
interface pageProps{}

const DynamicMap = dynamic(() => import('./components/Map'), {
    ssr: false
  });
  
 const page :FC<pageProps> = ({}) => {

  return (
    <main>
    <div id="map"
   >
    <DynamicMap />

    </div>
  </main>
  )
};

export default page ;
