import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField';

const WorkspaceSetupPage = () => {
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceUrl, setWorkspaceUrl] = useState('');

  const isButtonDisabled = workspaceName === '' || workspaceUrl === '';

  return (
    <div className='flex flex-col gap-10 font-poppins items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold max-md:text-xl'>Let's set up a home for all your work</h1>
        <h6 className='font-medium text-darkerGray'>You can always create another workspace later.</h6>
      </div>
      <div className='flex flex-col font-semibold text-[14px] text-darkerGraydarkestGray gap-4 w-[25vw] max-md:w-full'>
        <InputField
          label="Workspace Name"
          placeholder="Eden"
          onChange={(e) => setWorkspaceName(e.target.value)}
          value={workspaceName}
        />
        <div className='flex flex-col gap-2'>
          <label className='text-darkestGray'>
            Workspace URL <span className='text-lightGray'>(optional)</span>
          </label>
          <div className='flex border-2 border-gray rounded-md max-sm:flex-col'>
            <h1 className='p-2 bg-gray-50 text-darkGray font-thin'>www.eden.com/</h1>
            <input
              placeholder='Example'
              className='p-2 font-normal border-l-2 border-gray focus:outline-none rounded-r-md'
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

export default WorkspaceSetupPage;
