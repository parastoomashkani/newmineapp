"use client"
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Logo from "../../../public/images/logoNew (1).png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const sendVerificationCode = async () => {
    try {
      console.log('Sending verification code...');
    } catch (err) {
      console.error('Failed to send verification code:', err);
    }
  };

  const handleLogin = async () => {
    try {
      const loginResponse = await axios.post(process.env.BaseUrl +'/login', {
        mobile,
        password,
      });

      const accountStatus = loginResponse.data.status;

      if (accountStatus === 200) {
        await sendVerificationCode();
      } else if (accountStatus === 220) {
        const loginResponse = await axios.post(process.env.BaseUrl +'/login', {
          mobile,
          password,
        }); 

        const token = loginResponse.data.token;

        localStorage.setItem('Token', 'Bearer ' + token);

        console.log(loginResponse.data.token.status);

        // Redirect to the dashboard after successful login
        router.push('/dashboard');
      } else {
        router.push('/accounts/register');
      }
    } catch (err) {
      setError('Invalid credentials. Please try again.');
      console.error('Login failed:', err);
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
          به حساب خود وارد شوید
        </h2>
        </div>
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <label  className="block text-sm font-medium leading-6 text-gray-900">
          موبایل :
        </label>
        <div className="mt-2">
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
      </div>

      <div>
      <div className="flex items-center justify-between">
        <label  className="block text-sm font-medium leading-6 text-gray-900">
        رمز عبور :
        </label>
        </div>
        <div className="mt-2">
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
     </div> </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="mb-12 pb-1 pt-1 text-center">
      <button onClick={handleLogin} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Login
        </button>
        </div>
        <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
        <Link href="/accounts/register"   className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
        <button
                      type="button"
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                      data-te-ripple-color="light">
          register
          </button>
     </Link>
      </div>
    </div>
    </div>
  );
};

export default Login;
