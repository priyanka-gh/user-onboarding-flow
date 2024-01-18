import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField';

const Page2 = () => {
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceUrl, setWorkspaceUrl] = useState('');

  const isButtonDisabled = workspaceName === '' || workspaceUrl === '';

  return (
    <div className='flex flex-col gap-10 font-poppins items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold max-md:text-xl'>Let's set up a home for all your work</h1>
        <h6 className='font-medium text-gray-500'>You can always create another workspace later.</h6>
      </div>
      <div className='flex flex-col font-semibold text-[14px] text-gray-600 gap-4 w-[25vw] max-md:w-full'>
        <InputField
          label="Workspace Name"
          placeholder="Eden"
          onChange={(e) => setWorkspaceName(e.target.value)}
          value={workspaceName}
        />
        <div className='flex flex-col gap-2'>
          <label>
            Workspace URL <span className='text-gray-300'>(optional)</span>
          </label>
          <div className='flex border-2 max-sm:flex-col'>
            <h1 className='p-2 bg-gray-50 text-gray-400 font-thin'>www.eden.com/</h1>
            <input
              placeholder='Example'
              className='p-2 font-normal border-l-2 border-gray-100 focus:outline-none rounded-r-md'
              onChange={(e) => setWorkspaceUrl(e.target.value)}
              value={workspaceUrl}
            />
          </div>
        </div>
        <Button disabled={isButtonDisabled} />
      </div>
    </div>
  );
};

export default Page2;
