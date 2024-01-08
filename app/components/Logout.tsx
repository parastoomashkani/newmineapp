"use client"
import { useRouter } from 'next/navigation';

const Logout = () => {
    const router = useRouter();

    const handleLogout = () => {
    
      localStorage.removeItem('token');
      localStorage.removeItem('name');
  
     
      router.push('/accounts/login');
    };
  return (
    <button onClick={handleLogout}>
      خروج
    </button>
  );
};

export default Logout;