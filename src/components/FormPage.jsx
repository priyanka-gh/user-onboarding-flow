import React from 'react';
import { usePageState } from '../context/PageStateContext';
import PersonalDetailsPage from './PersonalDetailsPage';
import WorkspaceSetupPage from './WorkspaceSetupPage';
import PlanSelectionPage from './PlanSelectionPage';
import ConfirmationPage from './ConfirmationPage';

const FormPage = () => {
  const {page} = usePageState();

  return (
    <div className=''>
        {page === 1 && <PersonalDetailsPage />}
        {page === 2 && <WorkspaceSetupPage />}
        {page === 3 && <PlanSelectionPage />}
        {page === 4 && <ConfirmationPage />}
    </div>
  );
};

export default FormPage;
