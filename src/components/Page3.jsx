import React, { useState } from 'react';
import { usePageState, usePageDispatch } from './PageStateContext';
import Button from './Button';
import Option from './Option';

const Page3 = () => {

  const [option, setOption] = useState(1);

  const changeOption = (n) => {
    setOption(n);
  };

  const options = [
    {
      optionNumber: 1,
      title: 'For myself',
      description: 'Write better. Think more clearly. Stay organized.',
    },
    {
      optionNumber: 2,
      title: 'With my team',
      description: 'Wikis, docs, tasks & projects, all in one place.',
    },
  ];

  return (
    <div className='flex flex-col gap-10 font-poppins items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold'>How are you planning to use Eden?</h1>
        <h6 className='font-medium text-gray-500'>
          We'll streamline your setup experience accordingly.
        </h6>
      </div>
      <div className='flex flex-col text-[14px] gap-8 w-[25vw] max-lg:w-full'>
        <div className='flex gap-8 max-[400px]:flex max-[400px]:flex-col'>
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

export default Page3;
