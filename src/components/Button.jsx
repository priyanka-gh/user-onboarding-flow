import React from 'react';
import { usePageState, usePageDispatch } from './PageStateContext';

const Button = () => {
  const {page, name} = usePageState();
  const dispatch = usePageDispatch();
  
  return (
    <div>
      <button
      type='submit'
        className='bg-[#653fa1] p-3 w-full text-white rounded-md'
        onClick={() => {
            page !== 4 ? (
                dispatch({ type: 'INCREMENT_PAGE', payload: 4 })
            ) : (
                dispatch({ type: 'SET_PAGE', payload: 1})
            )
        }}
      >
        {page === 4 ? "Launch Eden" : "Create Workspace"}
      </button>
    </div>
  );
};

export default Button;
