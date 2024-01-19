import React from 'react';
import { usePageState, usePageDispatch } from '../context/PageStateContext';
import FormPage from '../components/FormPage';
import Stepper from '../components/Stepper';
import logo from "../assets/logo.png";

const Onboarding = () => {
  const totalPages = 4;
  const currentPage = usePageState();
  const dispatch = usePageDispatch();

  const nextPage = () => {
    dispatch({ type: 'INCREMENT_PAGE', payload: totalPages });
  };

  return (
    <div className="h-[100vh] grid place-items-center place-content-center">
      <div className='flex flex-col items-center justify-center gap-10 fixed top-20'>
        <div className='flex gap-2 items-center justify-center '>
          <img src={logo} alt="" />
          <h1 className='text-2xl font-bold font-poppins'>Eden</h1>
        </div>
        <Stepper currentPage={currentPage} totalPages={totalPages}/>
      </div>
      <div className="p-8 flex flex-col relative top-14">
        <FormPage nextPage={nextPage}/>
      </div>
    </div>
  );
};

export default Onboarding;
