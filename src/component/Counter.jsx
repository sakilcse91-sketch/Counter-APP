import React, { useState } from 'react'
const Counter = () => {
  const [count,setCount]=useState(0);
  const Increment=()=>{
    setCount(count+1);
  }
    const Decrement=()=>{
      if(count>0){
      setCount(count-1);
      } 
  }
    const Reset=()=>{
    setCount(0);
  }
  return (
    <div className='bg-black flex justify-center items-center min-h-screen'>
      <div className='text-center bg-white p-7 shadow-md rounded-2xl'>
        <h2 className='text-3xl'>This is Counter App</h2>
        <p className='text-2xl text-gray-600 mb-5'>Count:{count}</p>

        <div className='flex space-x-4'>
          <button onClick={Increment} className='px-5 py-3 bg-green-400 rounded-2xl hover:bg-green-600'>Increase</button>
          <button onClick={Decrement} className='px-5 py-3 bg-red-400 rounded-2xl hover:bg-red-600'>Decrease</button>
           <button onClick={Reset} className='px-5 py-3 bg-gray-400 rounded-2xl hover:bg-gray-600'>Reser</button>
        </div>
        <p className='text-black-400 py-5 text-center mt-4'>Made By MD.SAKIL</p>
      </div>
    </div>
  )
}

export default Counter