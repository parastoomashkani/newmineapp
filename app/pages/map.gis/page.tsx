'use client';
import { FC  } from 'react'   ;
import dynamic from "next/dynamic";
import Menu from './services/Menu';
import proj4 from "proj4";

interface pageProps{}

const DynamicMap = dynamic(() => import('./components/Map'), {
    ssr: false
  });
  
 const page :FC<pageProps> = ({}) => {

     console.log('ssssssssss');
     const source = new proj4.Proj('EPSG:4326'); // WGS84
     const dest = new proj4.Proj('EPSG:3857');  // Web Mercator
     const minPoint = proj4(source, dest, { x: 37.171398, y: 56.253031 });
     const maxPoint = proj4(source, dest, { x: 35.480124,  y: 58.959550 });

     console.log('Min Point (Latitude, Longitude):', minPoint);
     console.log('Max Point (Latitude, Longitude):', maxPoint);


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
