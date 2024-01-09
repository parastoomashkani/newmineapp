'use client';
import { FC  } from 'react'   ;
import dynamic from "next/dynamic";
import Menu from './services/Menu';
interface pageProps{}

const DynamicMap = dynamic(() => import('./components/Map'), {
    ssr: false
  });
  
 const page :FC<pageProps> = ({}) => {

  return (
    <main>
    <div id="map"
   >
    <Menu />
    <DynamicMap />

    </div>
  </main>
  )
};

export default page ;
