import React, { useState } from 'react';
import { usePageDispatch } from './PageStateContext';
import Button from './Button';
import InputField from './InputField';

const Page1 = () => {
  const dispatch = usePageDispatch();
  const [fullName, setFullName] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleNameChange = (e) => {
    setFullName(e.target.value);
    dispatch({ type: 'SET_NAME', payload: e.target.value });
  };

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const isButtonDisabled = fullName === '' || displayName === '';

  return (
    <div className='flex flex-col gap-10 font-poppins items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold max-md:text-xl'>Welcome! First things first...</h1>
        <h6 className='font-medium text-gray-500'>You can always change them later.</h6>
      </div>
      <div className='flex flex-col font-semibold text-[14px] text-gray-600 gap-4 w-[25vw] max-md:w-full'>
        <InputField label="Full Name" placeholder="Steve Jobs" onChange={handleNameChange} value={fullName} />
        <InputField label="Display Name" placeholder="Steve" onChange={handleDisplayNameChange} value={displayName} />
        <Button disabled={isButtonDisabled} />
      </div>
    </div>
  );
};

export default Page1;
