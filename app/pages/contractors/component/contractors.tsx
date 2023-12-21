import Image from 'next/image';
import React from 'react'
interface propsType {
    img: string;
    name: string;
    desc: string;
    desc1: string;
    expertise: string;
    price: string;
    email: string;
    phone: number;
    skils: string;
    Company: string;
    city:string;
}
const Contractors: React.FC<propsType> = ({
    img,
    name,
    desc,
    desc1,
    expertise,
    price,
    email,
    phone,
    skils,
    Company,
    city
}) => {
  return (
    <div>



    <div className='w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl'>
        <div className="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
            <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
                <figure className="w-1/2 md:w-full  rounded-full overflow-hidden">
<Image 
src={img}
height={500}
width={500}
alt={name}
/>
                </figure>
            </div>
            <div className="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-center md:text-left text-2xl font-bold text-gray-900">{name}</h1>
                    <p className="inline text-gray-700 font-normal leading-6 w-full text-base">
                        {desc}
                    </p>
                </div>
                <ul className="space-y-4  md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center">
                    <li className="text-sm"><i className="iconoir-pin-alt mr-2"></i>{city}</li>
                    <li className="text-sm"><i className="iconoir-calendar mr-2"></i>{skils} </li>
                </ul>

            
                <button className="transition-colors bg-purple-700 hover:bg-purple-800 p-2 rounded-sm w-full text-white text-hover shadow-md shadow-purple-900">
        تماس 
                </button>
            </div>
        </div>
    </div>
</div>

  )
}

export default Contractors