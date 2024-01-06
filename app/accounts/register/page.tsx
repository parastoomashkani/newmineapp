"use client"
import { useState } from 'react';
import axios from 'axios';
import Logo from "../../../public/images/logoNew (1).png"
import Image from 'next/image';
const Register = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [code, setCode] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        name,
        mobile,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', 'Bearer ' + token);
      setIsRegistered(true);
    } catch (err) {
      setError('.ثبت نام انجام نشد لطفا دوباره تلاش کنید');
      console.error('Registration failed:', err);
    }
  };

  const handleCodeChange = (event:any) => {
    setCode(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Assuming you have an API endpoint for code submission
      const response = await axios.post('http://127.0.0.1:8000/api/registerVerify', {
        code,
      },{
        headers: {
          'Content-Type': 'application/json', 
          'Accept': 'application/json', 
          'Authorization':localStorage.getItem('token')
    }});
  
      // Handle the response as needed
      console.log('Code submission successful:', response.data);
  
      // Save the token to localStorage after successful code submission
      const token = response.data.token;
      localStorage.setItem('token', 'Bearer ' + token);
      console.log('Token saved to localStorage:', 'Bearer ' + token);
    } catch (err) {
      setError ("کد درست نیست ");
      console.error('Code submission failed:', err);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
       <Image
   src={Logo}
   height={100}
   width={100}
   className="mx-auto h-10 w-auto"
   alt='logo'
    />
    
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        ایجاد حساب کاربری 
      </h1>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          نام 
        </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          موبایل 
        </label>
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
          رمز عبور
        </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleRegister}  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Register</button>

      {isRegistered && (
        <div>
          <input type="text" value={code} onChange={handleCodeChange} placeholder="Enter your code" />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default Register;


