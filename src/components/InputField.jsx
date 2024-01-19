import React from 'react';

const InputField = ({name, label, placeholder, onChange, value }) => {
  
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-darkestGray'>{label}</label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='p-2 border-2 border-gray focus:outline-none rounded-md font-thin'
      ></input>
    </div>
  );
};

export default InputField