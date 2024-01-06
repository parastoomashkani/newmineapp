"use client"

import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
      phone,
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
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;