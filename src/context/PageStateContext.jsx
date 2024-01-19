import React, { createContext, useReducer, useContext } from 'react';

const PageStateContext = createContext();
const PageDispatchContext = createContext();

const pageReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'INCREMENT_PAGE':
      return { ...state, page: state.page < action.payload ? state.page + 1 : state.page };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_FULL_NAME':
      return { ...state, userfullname: action.payload };
    case 'SET_WORKSPACE_NAME':
      return { ...state, workname: action.payload };
    case 'SET_WORKSPACE_URL':
      return { ...state, workurl: action.payload };
    case 'SET_SELECTED_USER_TYPE':
      return { ...state, usertype: action.payload };
    default:
      return state;
  }
};

export const PageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pageReducer, { page: 1, name: '', userfullname: '', workname: '', workurl: '', option: 1 });

  return (
    <PageStateContext.Provider value={state}>
      <PageDispatchContext.Provider value={dispatch}>
        {children}
      </PageDispatchContext.Provider>
    </PageStateContext.Provider>
  );
};

export const usePageState = () => useContext(PageStateContext);
export const usePageDispatch = () => useContext(PageDispatchContext);
