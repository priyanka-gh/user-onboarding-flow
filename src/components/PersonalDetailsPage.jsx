import React, { useEffect, useState } from 'react';
import { usePageDispatch, usePageState } from '../context/PageStateContext';
import Button from './Button';
import InputField from './InputField';

const PersonalDetailsPage = () => {
  const dispatch = usePageDispatch();
  const { name, userfullname} = usePageState();

  const [fullName, setFullName] = useState('');
  const [displayName, setDisplayName] = useState('');
  
  useEffect(() => {
    if (name) {
      setDisplayName(name)
    }
    if(userfullname){
      setFullName(userfullname)
    }
  }, [name, dispatch]);

  const handleNameChange = (e) => {
    setFullName(e.target.value);
    dispatch({ type: 'SET_FULL_NAME', payload: e.target.value });
  };

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
    dispatch({ type: 'SET_NAME', payload: e.target.value });
  };

  const isButtonDisabled = fullName === '' || displayName === '';

  return (
    <div className='flex flex-col gap-9 font-poppins items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-3xl text-center font-bold max-sm:text-xl'>Welcome! First things first...</h1>
        <h6 className='font-medium text-darkerGray'>You can always change them later.</h6>
      </div>
      <div className='flex flex-col font-semibold text-[14px] text-darkerGraydarkestGray gap-4 min-w-[25vw] max-lg:w-[45vw] max-sm:w-full'>
        <InputField label="Full Name" placeholder="Steve Jobs" onChange={handleNameChange} value={fullName}/>
        <InputField label="Display Name" placeholder="Steve" onChange={handleDisplayNameChange} value={displayName}/>
        <Button disabled={isButtonDisabled} />
      </div>
    </div>
  );
};

export default PersonalDetailsPage;