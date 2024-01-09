'use client';
import { FC  } from 'react'   ;
import dynamic from "next/dynamic";
import Menu from './services/Menu';
import Button from './components/Button';
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
<Button />
    <DynamicMap />

    </div>
  </main>
  )
};

export default page ;
