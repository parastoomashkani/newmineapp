"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../../public/images/logoNew (1).png";
const page= () => {
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
  
    const handleForgotPassword = async () => {
      try {
        // Send a request to your API for password recovery
        const response = await axios.post(process.env.BaseUrl + '/forgot-password', {
          phone,
        });
  
        setMessage(response.data.message);
        setError('');
      } catch (err) {
        setMessage('');
        setError('.پیام بازیابی رمز عبور ارسال نشد. لطفا دوباره تلاش کنید ');
        console.error('Forgot password failed:', err);
      }
    };
  
    return (
      <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            src={Logo}
            height={100}
            width={100}
            className="mx-auto h-10 w-auto"
            alt='logo'
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          رمز عبور را فراموش کرده اید
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
          شماره موبایل :
            </label>
            <div className="mt-2">
              <input
                type=" text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  
          {message && <p style={{ color: 'green' }}>{message}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
  
          <div className="mb-12 pb-1 pt-1 text-center">
            <button
              onClick={handleForgotPassword}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
           ارسال پیام  بازیابی رمز عبور
            </button>
          </div>
  
          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2">
              <Link href="/accounts/login">
                <p className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                بازگشت به صفحه ورود
                </p>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default page;
