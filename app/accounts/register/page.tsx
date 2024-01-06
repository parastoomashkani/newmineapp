"use client"
import { useState } from 'react';
import axios from 'axios';

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
      setError('Registration failed. Please try again.');
      console.error('Registration failed:', err);
    }
  };

  const handleCodeChange = (event:any) => {
    setCode(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Assuming you have an API endpoint for code submission
      const response = await axios.post('http://127.0.0.1:8000/api/submit-code', {
        code,
      });
  
      // Handle the response as needed
      console.log('Code submission successful:', response.data);
  
      // Save the token to localStorage after successful code submission
      const token = response.data.token;
      localStorage.setItem('token', 'Bearer ' + token);
      console.log('Token saved to localStorage:', 'Bearer ' + token);
    } catch (err) {
      console.error('Code submission failed:', err);
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

      {isRegistered && (
        <div>
          <input type="text" value={code} onChange={handleCodeChange} placeholder="Enter your code" />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Register;


