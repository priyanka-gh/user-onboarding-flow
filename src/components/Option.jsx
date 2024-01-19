import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

const Option = ({ optionNumber, selected, onSelect, title, description }) => {
  return (
    <div
      className={`flex flex-col p-4 gap-4 rounded-md ${
        selected ? 'border border-colorPurple' : 'border-2 border-gray'
      }`}
      onClick={() => onSelect(optionNumber)}
    >
      {optionNumber === 1 ? (
        <FontAwesomeIcon
          icon={faUser}
          className={`text-[20px] ${selected ? 'text-colorPurple' : 'text-darkestGray'}`}
        />
      ) : (
        <FontAwesomeIcon
          icon={faUsers}
          className={`text-[20px] ${selected ? 'text-colorPurple' : 'text-darkestGray'}`}
        />
      )}
      <h6 className='font-bold text-darkestGray'>{title}</h6>
      <h6 className='text-darkerGray'>{description}</h6>
    </div>
  );
};

export default Option;
