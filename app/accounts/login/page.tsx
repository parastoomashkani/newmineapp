"use client"

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
const Login = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        mobile,
        password,
      });

      // Check the response from your API and handle accordingly
      console.log('Login successful:', response.data);
    } catch (err) {
      // Handle login error
      setError('Invalid credentials. Please try again.');
      console.error('Login failed:', err);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <label>Mobile:</label>
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
      <div>
        <Link href="/accounts/register" >
        <h3>
          register
        </h3></Link>
      </div>
    </div>
  );
};

export default Login;