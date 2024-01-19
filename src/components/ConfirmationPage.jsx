import React from 'react';
import { usePageState, usePageDispatch } from '../context/PageStateContext';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ConfirmationPage = () => {
  const { name } = usePageState();

  return (
    <div className='flex flex-col gap-10 font-poppins items-center justify-center'>
      <div className='bg-colorPurple w-10 h-10 rounded-[100%] p-8 flex items-center justify-center text-white'><FontAwesomeIcon icon={faCheck} /></div>
      <div className='grid gap-8'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-3xl  text-center font-bold max-sm:text-xl'>Congratulations, {name}!</h1>
          <h6 className='font-medium text-darkerGray'>You have completed onboarding, you can start using the Eden!</h6>
        </div>
        <Button/>
      </div>
    </div>
  );
};

export default ConfirmationPage;
