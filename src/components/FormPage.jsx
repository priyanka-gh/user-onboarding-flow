import React from 'react';
import { usePageState } from './PageStateContext';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

const FormPage = () => {
  const {page} = usePageState();

  return (
    <div>
      <form>
        {page === 1 && <Page1 />}
        {page === 2 && <Page2 />}
        {page === 3 && <Page3 />}
        {page === 4 && <Page4 />}
      </form>
    </div>
  );
};

export default FormPage;
