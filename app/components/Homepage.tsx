import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import bg1 from '../../public/images/blue-gravel-stone-texture-background.jpg'
import bg3 from '../../public/images/nick-nice-gPm8h3DS1s4-unsplash.jpg'
import bg4 from '../../public/images/beautiful-old-grunge-texture-concrete-rough-wall-gray-color-background-backdrop-horizontal-blue-colors.jpg'
import bg5 from '../../public/images/avinash-kumar-rEIDzqczN7s-unsplash.jpg'
import bg6 from '../../public/images/avinash-kumar-rEIDzqczN7s-unsplash.jpg'
// import bg7 from './blue-gravel-stone-texture-background.jpg'
import bg8 from '../../public/images/closeup-green-stones.jpg'
import bg9 from '../../public/images/plain-copy-space-sand-background.jpg'
import bg10 from '../../public/images/wrinkled-silver-textured-pattern-background.jpg'
import bg11 from '../../public/images/turquoise-black-gemstone-textured-background.jpg'
import bg12 from '../../public/images/watercolor-splash-background.jpg'
import icon2 from '../../public/images/icon 2.png';
import icon1 from '../../public/images/icon1.png';
import icon3 from '../../public/images/icon 3.png';
import icon4 from '../../public/images/icon 4.png';
import icon5 from '../../public/images/icon 5.png';
import icon6 from '../../public/images/icon 6.png';
import icon7 from '../../public/images/icon7.png';
import icon8 from '../../public/images/icon 8.png';
import icon9 from '../../public/images/icon 9.png';
import icon10 from '../../public/images/icon 10.png';
import icon11 from '../../public/images/icon 11.png';
import icon12 from '../../public/images/icon 12.png';
import Background from "../../public/images/background.jpg"
const Homepage = () => {
  return (
<main>
    <div className='bg-cyan-50 text-slate-50	 'style={{ backgroundImage: `url(${Background.src})`, backgroundSize: 'cover' }}>

      <div className='container py-8  '>
        <div className="p-5 sm:p-8">
          <div className="columns-1 gap-5 sm:columns-2 sm:gap-8  md:columns-3 lg:columns-3  [&>img:not(:first-child)]:mt-8">

            <div className="bg-orange-400	 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  " >
              <div className=" text-center p-8 sm:pb-0 text-slate-200 flex justify-center" >
                <Link href="/pages/Education" >
                  <span className=' text-6xl '>
                  آموزش
</span>
                </Link>
              </div>
              <Image
                src={icon3}
                width={100}
                height={100}
                alt='مهندس '
                 className= 'justify-center ml-24 max-w-screen-md mt-2.5'
              />
            </div>
            <div className="bg-rose-700		 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " >
              <div className=" text-7xl text-center p-8 sm:pb-0 text-slate-200	flex justify-center" >
                <Link href="/accounts/map.gis">
                  Web Gis

                </Link>
                <Image
                  src={icon8}
                  width={80}
                  height={80}
                  alt='web Gis'
                />
              </div>


            </div>

            <div className="bg-teal-500		 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " >
              <div className="  text-center p-8 mr-4  sm:pb-0 text-slate-200 flex justify-center	" >
                <a className=' ' >
                  <Link href="/accounts/engineer">
                    <span className=' text-4xl text-center '>
                    مهندس
                    معدن
                    </span>
                  </Link>
                </a>

              </div>
              <Image
                src={icon1}
                width={80}
                height={80}
                alt='مهندس '
                className='justify-center ml-28 '
              />
            </div>
            <div className="bg-rose-300	 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 col-span-2 " >
              <div className=" text-4xl text-center  pe-8  sm:pb-0 text-slate-200 flex justify-center	 "  >
                <Link href="/pages/mozayede">
                  <span className='text-4xl text-center '>
                  مزایده معدن
</span>
                </Link>
              </div>
              <Image
                src={icon2}
                width={100}
                height={100}
                alt='مهندس '
                className=' justify-center ml-20 mt-5'
              />

            </div>
            <div className="bg-cyan-400			 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" >
              <div className="text-6xl text-center p-8 sm:pb-0 text-slate-200 flex justify-center" >
                <Link href="/pages/dorsanji" >
                  دور سنجی

                </Link>
                <Image
                  src={icon10}
                  width={100}
                  height={100}
                  alt='پیمانکاران '
                />
              </div></div>
            <div className="bg-orange-300	 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" >
              <div className=" text-6xl text-center p-8 sm:pb-0 text-slate-200 flex justify-center	" >
                <Link href="/accounts/contractors"
                >پیمانکاران
                </Link>
                <Image
                  src={icon7}
                  width={100}
                  height={100}
                  alt='پیمانکاران '
                />
              </div></div>
            <div className="bg-yellow-500		 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 col-span-2">
              <div className=" text-4xl  p-8 flex flex-col sm:pb-0 text-slate-200  justify-center" >
                <Link href="/pages/Services" >
                  <span className='text-center ml-10 mt-0'>
                    خدمات فنی مهندسی
                  </span>

                </Link>

                <Image
                  src={icon4}
                  width={80}
                  height={80}
                  alt='خدمات فنی مهندسی'
                  className=' text-center justify-center ml-28 '
                />
              </div>
            </div>

            <div className="bg-stone-500	 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" >
              <div className=" text-4xl text-center p-8 sm:pb-0 text-slate-200 flex justify-center" >
                <Link href="/pages/mineservice">خدمات معدن


                </Link>
                <Image
                  src={icon11}
                  width={100}
                  height={100}
                  alt='خدمات معدن '
                />
              </div>
            </div>
            <div className="bg-red-800		 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300col-span-2">
              <div className=" text-6xl text-center p-8 sm:pb-0  text-slate-200 flex justify-center" >
                <Link href="/pages/article">
                  مقالات </Link>
                <Image
                  src={icon9}
                  width={100}
                  height={100}
                  alt='مقالات'
                />
              </div>
            </div>
            <div className="bg-yellow-300			 h-48  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 	" >
              <div className=" text-7xl text-center p-8 sm:pb-0 t text-slate-200 flex justify-center" >
                <Link href="/">استخدام
                </Link>
                <Image
                  src={icon12}
                  width={100}
                  height={100}
                  alt='استخدام '
                />

              </div></div>
            <div className="bg-violet-700		 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 col-span-2" >
              <div className=" text-4xl text-center p-8 sm:pb-0 text-slate-200 flex justify-center "  >
                <Link href="/pages/tools">
                  <span>
                  معرفی ابزارالات  حفاری
</span>
                </Link>
                <Image
                  src={icon6}
                  width={100}
                  height={100}
                  alt='ابزارالات حفاری '
                />
              </div></div>
            <div className="bg-orange-400 h-48 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" >
              <div className=" text-center p-8 sm:pb-0 text-slate-200	flex justify-center "  >
                <Link href="/pages/form">
                  <span className='text-5xl text-center '>
                  ثبت آگهی   
                  </span>
                </Link>
                <Image
                  src={icon5}
                  width={80}
                  height={80}
                  alt='آگهی '
                />
              </div></div>


          </div>
        </div>
      </div>
  
    </div></main>
  );
};

export default Homepage;