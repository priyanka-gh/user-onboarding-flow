import React, { useState, useEffect } from 'react';
import Button from './Button';
import InputField from './InputField';
import { usePageState, usePageDispatch } from '../context/PageStateContext';

const WorkspaceSetupPage = () => {
  const dispatch = usePageDispatch();

  const {workname, workurl} = usePageState();
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceUrl, setWorkspaceUrl] = useState('')

  useEffect(() => {
    if (workname) {
      setWorkspaceName(workname)
    }
    if(workurl){
      setWorkspaceUrl(workurl)
    }
  }, [workname, workurl, dispatch]);


  const handleNameChange = (e) => {
    setWorkspaceName(e.target.value);
    dispatch({ type: 'SET_WORKSPACE_NAME', payload: e.target.value });
  };

  const handleUrlChange = (e) => {
    setWorkspaceUrl(e.target.value);
    dispatch({ type: 'SET_WORKSPACE_URL', payload: e.target.value });
  };

  const isButtonDisabled = workspaceName === '';

  return (
    <div className='flex flex-col gap-9 font-poppins items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-3xl font-bold  max-lg:text-xl'>Let's set up a home for all your work</h1>
        <h6 className='font-medium text-darkerGray'>You can always create another workspace later.</h6>
      </div>
      <div className='flex flex-col font-semibold text-[14px] text-darkerGraydarkestGray gap-4 w-[25vw] h-min max-lg:w-full'>
        <InputField
          label="Workspace Name"
          placeholder="Eden"
          onChange={handleNameChange}
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
              onChange={handleUrlChange}
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
