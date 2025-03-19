import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Endpoint = () => {
    const [Data , setData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get ("https://jsonplaceholder.typicode.com/users")
            setData(response.data);
            console.log(response.data)
        }
        catch (error){
            console.log(error)
        }
        
    }
    useEffect (()=>{
        fetchData()
    }, []);
  return (
    <div>
        <div  className='flex flex-row flex-wrap   justify-center bg-amber-200  ' >
           
        {Data.map((item)=>(
         <div key={item.id}  className='flex  flex-col items-center m-3 px-4 py-1 justify-center bg-white h-[300px] w-[200px]  '>
            <h2 > {item.name}</h2>
            <h2 > {item.email}</h2>
            <p > {item.username}</p>
            <p > {item.username}</p>
            <p > {item.company.name}</p>
         </div>
        ))}
        </div>
    </div>
  )
}

export default Endpoint