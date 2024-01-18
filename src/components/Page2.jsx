import React from 'react';
import { usePageState, usePageDispatch } from './PageStateContext';
import Button from './Button';

const Page2 = () => {
  const currentPage = usePageState();
  const dispatch = usePageDispatch();

  return (
    <div className='flex flex-col gap-10 font-poppins items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold 
            max-md:text-xl'>Let's set up a home for all your work</h1>
        <h6 className='font-medium text-gray-500'>You can always create another workspace later.</h6>
      </div>
      <div className='flex flex-col font-semibold text-[14px] text-gray-600 gap-4 w-[25vw] 
        max-md:w-full'>
        <div className='flex flex-col gap-2'>
          <label>Workspace Name</label>
          <input placeholder='Eden' className='p-2 border-2 border-gray-100 focus:outline-none rounded-md font-thin'></input>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Workspace URL <span className='text-gray-300'>(optional)</span></label>
          <div className='flex border-2 
            max-sm:flex-col'>
            <h1 className='p-2 bg-gray-50 text-gray-400 font-thin'>www.eden.com/</h1>
            <input placeholder='Example' className='p-2 font-normal border-l-2 border-gray-100 focus:outline-none rounded-md'></input>
          </div>
        </div>
        <Button onClick={() => dispatch({ type: 'INCREMENT_PAGE', payload: 4 })} />
      </div>
    </div>
  );
};

export default Page2;
