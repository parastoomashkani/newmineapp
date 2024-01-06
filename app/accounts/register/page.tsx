"use client"
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        name,
        mobile,
        password,
      });

      // Check the response from your API and handle accordingly
      console.log('Registration successful:', response.data);
    } catch (err) {
      // Handle registration error
      setError('Registration failed. Please try again.');
      console.error('Registration failed:', err);
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Mobile:</label>
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
