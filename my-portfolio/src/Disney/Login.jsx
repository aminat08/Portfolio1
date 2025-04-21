import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Log = () => {
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
      const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('userEmail' , email);
        navigate('/dash');
    }
  return (
    <div style={{fontFamily:'cursive'}}>
        <div className='bg-white flex flex-col  ml-20 mt-5  px-10 py-10 w-[400px] h-[500px] shadow-xl'>
            <h2 className='capitalize text-center mb-5 text-2xl'>Login in</h2>
            <h5 className='text-center mb-5 '> Please, input ur info</h5>
            
            <form className=' space-y-4 ' onSubmit={handleLogin}>
                <input type="email" placeholder='Please enter your email' className='bg-pink-400 px-5 py-3  w-full font-medium  rounded-xl text-white placeholder:text-amber-50 focus:outline-0 shadow-md' onChange={(e)=> setEmail(e.target.value)} />
                <input type="password" placeholder='Please enter your password' className='bg-pink-400 px-5 py-3  w-full font-medium  rounded-xl text-white placeholder:text-amber-50 focus:outline-0 shadow-md' onChange={(e)=>setPassword(e.target.value)}  />
                <button type='submit' className='ml-15 shadow-md w-52 focus:outline-0'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Log