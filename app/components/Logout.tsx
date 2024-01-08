"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
const Logout = () => {
    const router = useRouter();
      const [mobile, setMobile] = useState('');
      const [password, setPassword] = useState('');
      const handleLogout = async () => {
      try {
   
        const loginResponse = await axios.post(process.env.BaseUrl +'/logout', {
          mobile,
          password,
        }
        
        );
        const token = loginResponse.data.token;
      const username= loginResponse.data.username;
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      const accountStatus = loginResponse.data.status;

      if (accountStatus === 200) {
      
      router.push('/');
    };

  return (
    <button onClick={handleLogout}>
      خروج
    </button>
  );
};

export default Logout;