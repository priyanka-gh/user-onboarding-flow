import React from 'react';
import { usePageState } from '../context/PageStateContext';
import PersonalDetails from './PersonalDetails';
import WorkspaceSetupPage from './WorkspaceSetupPage';
import PlanSelection from './PlanSelection';
import ConfirmationPage from './ConfirmationPage';

const FormPage = () => {
  const {page} = usePageState();

  return (
    <div>
        {page === 1 && <PersonalDetails />}
        {page === 2 && <WorkspaceSetupPage />}
        {page === 3 && <PlanSelection />}
        {page === 4 && <ConfirmationPage />}
    </div>
  );
};

export default FormPage;
