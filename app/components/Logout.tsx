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
      const logoutResponse = await axios.post(process.env.BaseUrl + '/logout', {
      
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      }
      );
      const accountStatus = logoutResponse.data.status;
      if (accountStatus === 200) {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        router.push('/');
      }


    }catch (err) {
      console.error('Logout failed:', err);
    }
  }
  return (
      <button onClick={handleLogout}>
        خروج
      </button>
    );
  };

  export default Logout;