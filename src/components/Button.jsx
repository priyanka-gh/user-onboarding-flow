import React from 'react';
import { usePageState, usePageDispatch } from './PageStateContext';

const Button = ({ disabled }) => {
  const { page, name } = usePageState();
  const dispatch = usePageDispatch();

  return (
    <div>
      <button
        className={`bg-[#653fa1] p-3 w-full text-white rounded-md ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => {
          if (!disabled) {
            page !== 4 ? (
              dispatch({ type: 'INCREMENT_PAGE', payload: 4 })
            ) : (
              dispatch({ type: 'SET_PAGE', payload: 1 })
            );
          }
        }}
        disabled={disabled}
      >
        {page === 4 ? 'Launch Eden' : 'Create Workspace'}
      </button>
    </div>
  );
};

export default Button;
