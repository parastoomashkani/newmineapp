'use client';
import { FC ,useEffect,useState } from 'react'   ;
import dynamic from "next/dynamic";
import Menu from './services/Menu';
import Loading from "../../Louding";

interface pageProps{}

const DynamicMap = dynamic(() => import('./components/Map'), {
    ssr: false
  });
  
 const page :FC<pageProps> = ({}) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 3300)
  }, [])
  if (loading) {
      return  <Loading />
    }
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
