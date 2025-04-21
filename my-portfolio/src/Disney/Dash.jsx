import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dash = () => {
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (!storedEmail) {
      navigate("/log");
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    toast.success('👋 Logged out successfully');
    setTimeout(() => {
      navigate("/log");
    }, 2000);
  };

  useEffect(() => {
    const fetchDisney = async () => {
      try {
        const res = await axios.get("https://api.disneyapi.dev/character");
        setData(res.data.data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDisney();
  }, []);

  return (
    <div style={{ fontFamily: 'cursive' }}>
    
      <div className='bg-pink-400 shadow-md w-screen h-16 flex items-center justify-between px-20'>
        <p className="text-white text-xl capitalize">Home</p>
        <p className="text-white text-xl capitalize">Movies</p>
        <p className="text-white text-xl capitalize">Disney</p>
        <p className="text-white text-xl capitalize">Email: {email}</p>
      </div>

      
      <div>
        <p className='mt-10 ml-10 text-5xl capitalize'>Welcome to Disney</p>

        <div className="flex flex-wrap gap-4 mt-8">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-4 shadow-md w-[200px] rounded-lg">
              <p className="text-center font-semibold text-xl">{item.name}</p>
              <p className="text-center text-sm text-gray-500">{item.tvShows}</p>
               <img src={item.imageUrl} alt={item.name} className="w-full h-[150px] object-cover mt-2 rounded-lg" />
            </div>
          ))}
        </div>

     
        <button
          style={{ background: 'pink' }}
          className='mt-10 ml-10 shadow-md px-6 py-2 rounded-lg'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>


      <ToastContainer />
    </div>
  );
}

export default Dash;
