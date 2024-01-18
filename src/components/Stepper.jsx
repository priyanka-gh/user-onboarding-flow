import React from 'react';
import { usePageState, usePageDispatch } from './PageStateContext';

const Stepper = () => {
  const {page} = usePageState();
  const totalPages = 4;

  const dispatch = usePageDispatch();
  return (
    <div>
        <ul className="flex items-center">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <React.Fragment key={pageNumber}>
                {pageNumber !== 1 && (
                <li className="flex-1">
                    <div
                    className={`w-[25px] h-[0.09rem] transition-all duration-500 
                        max-[330px]:w-[15px]
                        max-[230px]:w-[10px] ${
                        pageNumber <= page
                        ? 'bg-[#653fa1]'
                        : 'bg-gray-300'
                    }`}
                    ></div>
                </li>
                )}
                <li className="">
                    <div
                        className={`rounded-full w-8 h-8 flex items-center justify-center border ${
                        pageNumber === page ? 'bg-[#653fa1] text-white border-none' : 'border-gray-300 text-gray-600'
                        }`}
                        onClick={() => {
                            (pageNumber < page) && (
                                dispatch({ type: 'SET_PAGE', payload: pageNumber })
                            )
                        }}
                    >
                        {pageNumber}
                    </div>
                </li>
                {
                    pageNumber !== 4 && (
                        <li className="flex-1">
                            <div
                            className={`w-[25px] h-[0.09rem] transition-all duration-500 
                                max-[330px]:w-[15px]
                                max-[230px]:w-[10px] ${
                                pageNumber <= page
                                ? 'bg-[#653fa1]'
                                : 'bg-gray-300'
                            }`}
                            ></div>
                        </li>
                    )
                }
            </React.Fragment>
            ))}
        </ul>
    </div>
  );
};

export default Stepper;
