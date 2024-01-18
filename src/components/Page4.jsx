import React from 'react';
import { usePageState, usePageDispatch } from './PageStateContext';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Page4 = () => {
  const { name } = usePageState();

  const dispatch = usePageDispatch();

  return (
    <div className='flex flex-col gap-10 font-poppins items-center justify-center'>
      <div className='bg-[#653fa1] w-10 h-10 rounded-[100%] p-8 flex items-center justify-center text-white'><FontAwesomeIcon icon={faCheck} /></div>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-3xl font-bold
            max-md:text-xl'>Congratulations, {name}!</h1>
        <h6 className='font-medium text-gray-500'>You have compleed onboarding, you can star using the Eden!</h6>
      </div>
      <Button onClick={() => dispatch({ type: 'INCREMENT_PAGE', payload: 4 })} />
    </div>
  );
};

export default Page4;
