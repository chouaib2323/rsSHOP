import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('https://localhost:443/api_fin/register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            console.log("data sent");
           alert("you have been registered")
        } else {
            console.log("already registered");
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};
  return (
    <>
    <Header/>
    <div className="max-w-md mx-auto mt-10 ">
      
      <h2 className="text-2xl font-bold mb-5">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-400" />
        </div>
        <div>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-400" />
        </div>
        <div>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-400" />
        </div>
        <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition duration-300">Register</button>
      </form>
      <p className="mt-4 text-center">
        back to login ? <Link to="/Login" className="text-purple-500 hover:text-purple-600">Login</Link>
      </p>
    </div>
   
    </>
  );
}

export default RegistrationForm;
