import React from 'react';

const InputField = ({ label, placeholder, onChange }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-darkestGray'>{label}</label>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className='p-2 border-2 border-gray focus:outline-none rounded-md font-thin'
      ></input>
    </div>
  );
};

export default InputField