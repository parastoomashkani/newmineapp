"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaPhone, FaTelegramPlane } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import '../../../../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import { RiLinkedinFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";

import axios from 'axios';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import { MdMarkEmailUnread } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

interface EngineerProps {
    id: string;
    picture: {
        large: string;
        medium: string;
    };
    name: {
        first: string;
        last: string;
        titel: string;
    };
    location: {
        city: string;
        state: string;
    };
    email: string;
    phone: string;
    cell: string;
}

const Engineer: React.FC = () => {
    const [state, setState] = useState<EngineerProps[]>([]);

    async function getData() {
        const res = await fetch('https://randomuser.me/api/?results=19');
        const data = await res.json();
        setState(data.results);
        console.log(state);
    }

    console.log('i am:', state);

    useEffect(() => {
        getData();
    }, [])

    const [fullscreenXlModal, setFullscreenXlModal] = useState<boolean>(false);

    const toggleOpen = () => setFullscreenXlModal(!fullscreenXlModal);

    const [centredModal, setCentredModal] = useState<boolean>(false);

    const modalOpen = () => setCentredModal(!centredModal);

    return (
        <>
            {
                state.map((item: EngineerProps) => (
                    <div className="container" key={item.id}>
                        <div role="list" aria-label="Behind the scenes People " className="md:flex sm:flex flex-wrap md:justify-around sm:justify-around lg:justify-around ">
                            <div role="listitem" className="xl:w-80 sm:w-80 md:w-96 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 ">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <MDBModal tabIndex='-1' open={fullscreenXlModal} setOpen={setFullscreenXlModal} key={item.id}>
                                            <MDBModalDialog size="fullscreen">
                                                <MDBModalContent>
                                                    <MDBModalHeader>
                                                        <MDBModalTitle>پرفایل</MDBModalTitle>
                                                        <MDBBtn
                                                            type='button'
                                                            className='btn-close'
                                                            color='none'
                                                            onClick={toggleOpen}
                                                        ></MDBBtn>
                                                    </MDBModalHeader>
                                                    <MDBModalBody >
                                                        <div className="bg-gray-100">
                                                            <div className="container mx-auto py-8">
                                                                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                                                                    <div className="col-span-4 sm:col-span-3">
                                                                        <div className="bg-white shadow rounded-lg p-6">
                                                                            <div className="flex flex-col items-center">
                                                                                <Image
                                                                                    src={item.picture.large}
                                                                                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                                                                                    height={500}
                                                                                    width={500}
                                                                                    alt={item.name.first}
                                                                                />
                                                                                <h1 className="text-xl font-bold">{item.name.first} {item.name.last}</h1>
                                                                                <p className="text-gray-600">{item.name.titel}</p>
                                                                                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                                                                    <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                                                                                    <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</a>
                                                                                </div>
                                                                            </div>
                                                                            <hr className="my-6 border-t border-gray-300" />
                                                                            <div className="flex flex-col">
                                                                                <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">Skills</span>
                                                                                <ul>
                                                                                    <li className="mb-2">{item.email} </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-span-4 sm:col-span-9">
                                                                        <div className="bg-white shadow rounded-lg p-6">
                                                                            <h2 className="text-xl font-bold mb-4">درباره من </h2>
                                                                            <p className="text-gray-700">{item.location.city}
                                                                            </p>
                                                                            <h3 className="font-semibold text-center mt-3 -mb-2">
                                                                                راه های ارتباطی
                                                                            </h3>
                                                                            <div className="flex justify-center items-center gap-6 my-6">
                                                                                <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds LinkedIn" href=""
                                                                                    target="_blank">
                                                                                    <RiLinkedinFill size={30} />
                                                                                </a>
                                                                                <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href=""
                                                                                    target="_blank">
                                                                                    <FaInstagram size={30} />
                                                                                </a>
                                                                                <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Facebook" href=""
                                                                                    target="_blank">
                                                                                    <MdMarkEmailUnread size={30} />
                                                                                </a>
                                                                                <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Instagram" href=""
                                                                                    target="_blank">
                                                                                    <FaTelegramPlane size={30} />
                                                                                </a>
                                                                                <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Twitter" href=""
                                                                                    target="_blank"><svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                                        <path fill="currentColor"
                                                                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                                                                        </path>
                                                                                    </svg>
                                                                                </a>
                                                                            </div>
                                                                            <h2 className="text-xl font-bold mt-6 mb-4">تجربه های کاری </h2>
                                                                            <div className="mb-6">
                                                                                <div className="flex justify-between">
                                                                                    <span className="text-gray-600 font-bold">{item.location.state} </span>
                                                                                    <p>
                                                                                        <span className="text-gray-600 mr-2">{item.phone}  </span>
                                                                                        <span className="text-gray-600">2017 - 2019</span>
                                                                                    </p>
                                                                                </div>
                                                                                <p className="mt-2">
                                                                                    {item.cell}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </MDBModalBody>
                                                    <MDBModalFooter>
                                                        <MDBBtn type='button' color='secondary' onClick={toggleOpen}>
                                                            Close
                                                        </MDBBtn>
                                                    </MDBModalFooter>
                                                </MDBModalContent>
                                            </MDBModalDialog>
                                        </MDBModal>
                                        <MDBModal tabIndex='-1' open={centredModal} setOpen={setCentredModal}    color='none'>
                                            <MDBModalDialog centered   color='none' >
                                                <MDBModalContent>
                                                    <MDBModalHeader>
                                                        <MDBModalTitle> راه های ارتباطی </MDBModalTitle>
                                                        <MDBBtn className='btn-close' color='none' onClick={modalOpen}></MDBBtn>
                                                    </MDBModalHeader>
                                                    <MDBModalBody>
                                                        <div className='flex justify-between' >
                                                            <Image
                                                                src={item.picture.large}
                                                                className="w-22 h-22 bg-gray-300 rounded-full mb-4 shrink-0"
                                                                height={500}
                                                                width={500}
                                                                alt={item.name.first}
                                                            />
                                                            <h4 className="font-bold text-3xl text-center mb-1">
                                                                {item.name.first} {item.name.last}
                                                            </h4>
                                                        </div>
                                                        <ul className='flex flex-col'>
                                                            <i>
                                                                <div className='flex justify-between '>
                                                                    <div className='w-8 h-8  p-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500' >
                                                                        <TfiEmail size={20} />
                                                                    </div>
                                                                    <div> {item.email} </div>
                                                                </div>
                                                            </i>
                                                            <br />
                                                            <li>
                                                                <div className='flex justify-between'>
                                                                    <div className='w-8 h-8  p-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500' >
                                                                        <FaPhone size={20} />
                                                                    </div>
                                                                    <div>
                                                                        {item.cell}
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </MDBModalBody>
                                                    <MDBModalFooter>
                                                        <MDBBtn color='secondary' onClick={modalOpen}>
                                                            Close
                                                        </MDBBtn>
                                                        <MDBBtn>  ارسال پیامک </MDBBtn>
                                                    </MDBModalFooter>
                                                </MDBModalContent>
                                            </MDBModalDialog>
                                        </MDBModal>
                                        <div className="h-32 w-32 flex  justify-between ">
                                            <Image
                                                src={item.picture.medium}
                                                height={500}
                                                width={500}
                                                alt={item.name.first}
                                                className="rounded-full object-cover h-full w-full shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold text-3xl text-center mb-1">{item.name.first} {item.name.last}  </h1>
                                        <p className="text-gray-800 text-sm text-center"> تخصص:{""}{"age"}</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">{"gender"}</p>
                                        <ul className="w-full flex  justify-between  pt-5 pb-5">
                                            {/* <li className="font-bold mx-3 flex  justify-start">
                                       {item.email}
                                    </li> */}
                                            <li>
                                                <button onClick={modalOpen} className=" w-18 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  p-0.3 mx-4	 text-center font-semibold " type="button"  >
                                                    <IoIosContact size={30} />
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={toggleOpen} className=" w-24 h-8 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  p-0.3 mx-4	 text-center font-semibold text-white" type="button"  >
                                                    پرفایل
                                                </button>
                                            </li>
                                        </ul>

                                        <hr className='my-6 border-t border-gray-300 mt-0.5' />
                                        <div className="w-full flex justify-center pt-5 pb-5">

                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <FaPhone />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <AiTwotoneMail

                                                    />

                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <FaTelegramPlane />

                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </>
    );
}

export default Engineer;