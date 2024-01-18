import React, {useState} from 'react';
import { usePageState, usePageDispatch } from './PageStateContext';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

const Page3 = () => {
  const currentPage = usePageState();
  const dispatch = usePageDispatch();

  const [option, setOption] = useState(1)

  const changeOption = (n) => {
    setOption(n)
  }

  return (
    <div className='flex flex-col gap-10 font-poppins items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold'>How are you planning to use Eden?</h1>
        <h6 className='font-medium text-gray-500'>We'll streamline your setup experience accordingly.</h6>
      </div>
      <div className='flex flex-col text-[14px] gap-8 w-[25vw] 
        max-lg:w-full'>
        <div className='flex gap-8 
            max-[400px]:flex max-[400px]:flex-col'>
          <div className={`flex flex-col p-4 gap-4 rounded-md ${option === 1 ? 'border border-[#653fa1]' : 'border-2'}`} onClick={() => changeOption(1)}>
            <FontAwesomeIcon icon={faUser} className={`text-[20px] ${option === 1 ? 'text-[#653fa1]' : "text-gray-500"}`}/>
            <h6 className='font-bold'>For myself</h6>
            <h6 className='text-gray-500'>Write better. Think more clearly. Stay organized.</h6>
          </div>
          <div className={`flex flex-col p-4 gap-4 rounded-md ${option === 2 ? 'border border-[#653fa1]' : 'border-2'}`} onClick={() => changeOption(2)}>
            <FontAwesomeIcon icon={faUsers} className={`text-[20px] ${option === 2 ? 'text-[#653fa1]' : "text-gray-500"}`}/>
            <h6 className='font-bold'>With my team</h6>
            <h6 className='text-gray-500'>Wikis, docs, tasks & projects, all in one place.</h6>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Page3;
