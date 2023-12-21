import { FC  } from 'react'   ;
import { Profile } from './component/Profile';

interface pageProps{}
const page :FC<pageProps> = ({}) => {
  return (
    <div>
       <Profile /> 
    </div>
  )
}

export default page