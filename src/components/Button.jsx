import React from 'react';
import { usePageState, usePageDispatch } from './PageStateContext';

const Button = () => {
  const {page} = usePageState();
  const dispatch = usePageDispatch();

  return (
    <div>
      <button
        className='bg-[#653fa1] p-3 w-full text-white rounded-md'
        onClick={() => dispatch({ type: 'INCREMENT_PAGE', payload: 4 })}
      >
        {page === 4 ? "Launch Eden" : "Create Workspace"}
      </button>
    </div>
  );
};

export default Button;
