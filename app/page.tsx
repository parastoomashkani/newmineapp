"use client"
import { useEffect, useState } from "react";
import Homepage from './components/Homepage';
import Loading from "./Louding";

export default function Home() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return  <Loading />
      }
  return (
    <main   >
     
       <Homepage />
   
  </main>
  )
}



