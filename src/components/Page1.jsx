import React, {useState} from 'react';
import { usePageState, usePageDispatch } from './PageStateContext';
import Button from './Button';

const Page1 = () => {

  const dispatch = usePageDispatch();

  const handleNameChange = (e) => {
    dispatch({ type: 'SET_NAME', payload: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className='flex flex-col gap-10 font-poppins items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold 
            max-md:text-xl'>Welcome! First things first...</h1>
        <h6 className='font-medium text-gray-500'>You can always change them later.</h6>
      </div>
        <div className='flex flex-col font-semibold text-[14px] text-gray-600 gap-4 w-[25vw] 
            max-md:w-full'>
            <div className='flex flex-col gap-2'>
            <label>Full Name</label>
            <input placeholder='Steve Jobs' className='p-2 border-2 border-gray-100 focus:outline-none rounded-md font-thin required'></input>
            </div>
            <div className='flex flex-col gap-2'>
            <label>Display Name</label>
            <input onChange={handleNameChange} placeholder='Steve' className='p-2 border-2 border-gray-100 focus:outline-none rounded-md  font-thin' ></input>
            </div>
            <Button/>
            </div>
    </div>
  );
};

export default Page1;
