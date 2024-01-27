"use client"
import React,{useEffect,useState} from 'react'
import Store from './component/Store'
import { CPagination ,CPaginationItem } from '@coreui/react'
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "../../Louding"
const page = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 3300)
  }, [])
  if (loading) {
      return  <Loading />
    }
  return (
    <div>
       <h1 className="font-bold text-7xl text-center text-slate-600 p-8 .border-b-2 " >  آگهی ها  </h1>
< hr />
        <Store />
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
    </div>
  )
}

export default page