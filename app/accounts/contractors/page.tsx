'use client'
import {useState,useEffect} from 'react'
import Contractors from './component/contractors'
import Loading from "../../Louding"
import { CPagination ,CPaginationItem } from '@coreui/react'
import '../../../node_modules/@coreui/coreui/dist/css/coreui.min.css'
const page = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 3300)
  }, [])
  if (loading) {
      return  <Loading />
    }
  return (
    <main>
    <div className=' min-h-screen from-sky-50 via-purple-300 to-sky-50 bg-gradient-to-br '>
    <div className='flex items-center justify-center  '>
        <div className="grid grid-cols-1 gap-2 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3  lg:grid-col-3 xl:grid-cols-3  xl:gap-x-20 xl:gap-y-10 pt-6">
     
            <Contractors  />
           
      </div>
      
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
  )
}

export default page