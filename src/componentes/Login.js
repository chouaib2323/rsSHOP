import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import axios from 'axios';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/userReducer';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const userlog = useSelector(state => state.user);
  const dispatch =useDispatch()
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('https://localhost:443/api_fin/login.php', formData);
        if (response.data.status === 'success') {
            // Login successful
            alert('Login successful');
            // Extract username from response and use it as needed
            const { user } = response.data;
            console.log('Logged in as:', user.username);
            dispatch(login({ name: user.username, email: user.email , loggedIn:true}));
            navigate('/'); // Navigate to home page
            // Redirect to dashboard or perform any other actions
        } else {
            // Login failed
            alert('Login failed: ' + response.data.message);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred while logging in. Please try again later.');
    }
};


  return (
    <>
  <Header/>
    <div className="max-w-md mx-auto mt-10 ">
      <h2 className="text-2xl font-bold mb-5">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input type="username" name="username" value={formData.email} onChange={handleChange} placeholder="username" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-400" />
        </div>
        <div>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-400" />
        </div>
        <button   type="submit" className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition duration-300">Login</button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? <Link to="/register" className="text-purple-500 hover:text-purple-600">Register</Link>
      </p>
    </div>
  
    </>
  );
}

export default LoginForm;