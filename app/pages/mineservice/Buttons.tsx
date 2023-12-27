import React from 'react'
import getData from './service'
const Buttons = ({menuItem,filterItems,setItems}) => {
  return (
    <div className='d-flex justify-content-center '>
{
    menuItem.map(item =>(

        <button onClick={()=>filterItems(item)}>
            {item}
        </button>
    ))
}
<button onClick={()=>setItems(getData)}>
       all 
        </button>
    </div>
  )
}

export default Buttons