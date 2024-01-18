import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

const Option = ({ optionNumber, selected, onSelect, title, description }) => {
  return (
    <div
      className={`flex flex-col p-4 gap-4 rounded-md ${
        selected ? 'border border-[#653fa1]' : 'border-2'
      }`}
      onClick={() => onSelect(optionNumber)}
    >
      {optionNumber === 1 ? (
        <FontAwesomeIcon
          icon={faUser}
          className={`text-[20px] ${selected ? 'text-[#653fa1]' : 'text-gray-500'}`}
        />
      ) : (
        <FontAwesomeIcon
          icon={faUsers}
          className={`text-[20px] ${selected ? 'text-[#653fa1]' : 'text-gray-500'}`}
        />
      )}
      <h6 className='font-bold'>{title}</h6>
      <h6 className='text-gray-500'>{description}</h6>
    </div>
  );
};

export default Option;
