'use client';
import Image from "next/image";
import {useEffect} from "react";
import Link from "next/link";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { CiLocationOn } from "react-icons/ci";
import dynamic from "next/dynamic";
import HederTop from "../../../../components/HederTop";
import Calendar from 'react-calendar';
import axios from "axios";
import Loading from "@/app/Louding";
interface propsType {
  img: string;
  title: string;
  desc: string;
  desc1: string;
  rating: number;
  price: string;
}
const DynamicMap = dynamic(() => import('../simpel/map'), {
  ssr: false
});
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Mozayede: React.FC<propsType> = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [value, onChange] = useState<Value>(new Date());
  const [apiData, setApiData] = useState<any>(null); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.BaseUrl + '/moz');
        setApiData(response.data); 
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };
  
    fetchData();
  }, []);
 
  return (


    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px] text-right 	">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10 " initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"

          >
            <div className="fixed inset-0 bg-slate-300		 bg-opacity-75 transition-opacity" />

          </Transition.Child>

          <div className=" fixed inset-0 z-10 w-screen overflow-y-auto flex min-h-full items-end justify-center p-8 text-center sm:items-center sm:p-0 ">

            <div className="">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200 "
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="bg-slate-50">
                  <HederTop />

                  <div className="md:flex items-start justify-center py-20 2xl:px-3 md:px-20 px-20  ">
                    <div className="sm:flex sm:items-start">
                      <div className=" w-80 ">
                        <Image
                          className="w-80	h-64"
                          src={img1}
                          width={500}
                          height={500}
                          alt={title}
                        />

                        <div className=" mt-20  w-1/4 grid grid-col bg-white text-center gap-4 p-4 rounded-lg"> <Calendar onChange={onChange} value={value} /></div>


                      </div>

                      <div className="mt-8 text-center sm:ml-10 sm:mt-0 ">
                        <Dialog.Title as="h3" className="text-gray-900 text-3xl title-font font-medium mb-1">
                          {title}
                        </Dialog.Title>
                        <div className=" border-b border-gray-200 flex items-center justify-between  ">
                          <ul>
                            <li>
                              <CiLocationOn className=" inset-y-0 right-40 h-8 w-8" />
                            </li>
                          </ul>
                        </div>

                        <div className="mt-20">

                          <p className="text-sm text-gray-500">
                            {about1}
                          </p>
                        </div>
                        <div className="mt-20">
                          <h2>اطلاعات بیشتر </h2>
                          <p className="text-sm text-gray-500">
                            { body}
                          </p>
                        </div>

                        <div id="map"  className="mt-20 justify-center">

                          <DynamicMap />

                        </div>
                        <div className=" justify-center">
                          <Link href="/pages/map.gis">
                            <button className="  w-64 justify-self-center rounded-md bg-blue-600 p-2 text-center font-semibold text-white" type="button" >
                              دیدن نقشه
                            </button>
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="  bg-gray-50 px-10 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      شرکت در مزایده
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      لغو
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div>
        <Image
          className="w-full h-40"
          src={img1}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className="space-y-2 ">
        <h2 className="text-accent font-medium uppercase text-center p-2">{title}</h2>
        <ul className='space-y-4   md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center '>
                <li className='text-sm'>
                  <i className='iconoir-pin-alt mr-2'>  سبزوار </i>
                  </li>
                  <li className='text-sm'>
                  <i className='iconoir-calendar mr-1'> مشهد  </i>
                
                </li>
                  </ul>
        <p className="text-gray-500  text-center">{body}</p>

       



        <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white" type="button" onClick={showProductDetails}>
          شرکت در مزایده
        </button>

        <div className="font-bold flex gap-4"> ${date}
       
        </div>
      </div>
    </div>

  );
};

export default Mozayede;