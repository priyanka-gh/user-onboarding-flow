import React, { useState, useEffect } from 'react';
import { usePageState, usePageDispatch } from '../context/PageStateContext';
import Button from './Button';
import Option from './Option';
import { options } from '../utils/constants';

const PlanSelectionPage = () => {
  const dispatch = usePageDispatch();

  const {usertype} = usePageState();

  const [option, setOption] = useState(1);

  const changeOption = (currOption) => {
    dispatch({ type: 'SET_SELECTED_USER_TYPE', payload: currOption });
    setOption(currOption);
  };

  useEffect(() => {
    if (usertype) {
      setOption(usertype)
    }
  }, [usertype]);
  

  return (
    <div className='flex flex-col font-poppins items-center justify-center gap-6 '>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-3xl font-bold max-lg:text-xl max-sm:text-base'>How are you planning to use Eden?</h1>
        <h6 className='font-medium text-darkerGray  max-sm:text-sm'>
          We'll streamline your setup experience accordingly.
        </h6>
      </div>
      <div className='flex flex-col gap-4 w-[25vw] max-xl:w-full'>
        <div className='flex gap-8 max-xl:flex max-xl:flex-col cursor-pointer'>
          {options.map((opt) => (
            <Option
              key={opt.optionNumber}
              optionNumber={opt.optionNumber}
              selected={option === opt.optionNumber}
              onSelect={changeOption}
              title={opt.title}
              description={opt.description}
            />
          ))}
        </div>
        <Button />
      </div>
    </div>
  );
};

export default PlanSelectionPage;
