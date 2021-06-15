import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../Redux/hooks';
import { filterTecnologies } from '../../../Redux/actions';
// import type { RootState } from "src/Redux/store"

const Selector = () => {
    const arr: string[] = [];
    const [chips, setChips] = useState(arr);
    const [method, setMethod] = useState('');
    // const fitered = useSelector((state) => state.alumnosFiltrados);
    const dispatch = useDispatch();

    const handleOption = async (option: string) => {
        await setMethod('add');
        !chips.includes(option) && (await setChips([...chips, option]));
    };

    useEffect(() => {
        method === 'add' && dispatch(filterTecnologies(chips, 'add'));
        method === 'sub' && dispatch(filterTecnologies(chips, 'sub'));
    }, [chips, method]);

    const handleClose = async (value: any) => {
        await setMethod('sub');
        const aux = chips.filter((el) => el !== value);
        setChips(aux);
    };

    return (
        <div>
            {chips.length > 0
                ? chips.map((el, key) => {
                      return (
                          <div
                              className="flex justify-center w-min m-1 font-medium py-1 px-1 bg-white rounded-full text-yellow-100 bg-yellow-700 border border-yellow-700 "
                              key={key}>
                              <div className="text-sm font-normal leading-none max-w-20 flex-initial">
                                  {el}
                              </div>
                              <div className="flex flex-auto flex-row-reverse">
                                  <div
                                      data-value={el}
                                      onClick={(e) => {
                                          handleClose(
                                              e.currentTarget.getAttribute(
                                                  'data-value'
                                              )
                                          );
                                      }}
                                      onKeyPress={() =>
                                          console.log('modificar')
                                      }
                                      role="button"
                                      tabIndex={0}>
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="10%"
                                          height="10%"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-x cursor-pointer hover:text-yellow-400 rounded-full w-4 h-4 ml-2">
                                          <line
                                              x1="18"
                                              y1="6"
                                              x2="6"
                                              y2="18"></line>
                                          <line
                                              x1="6"
                                              y1="6"
                                              x2="18"
                                              y2="18"></line>
                                      </svg>
                                  </div>
                              </div>
                          </div>
                      );
                  })
                : null}

            <p className="selectorCategory">Posicion</p>
            <div
                className="selectorOption"
                onClick={() => handleOption('BackEnd')}
                onKeyPress={() => console.log('')}
                role="button"
                tabIndex={0}>
                BackEnd{' '}
            </div>
            <div
                className="selectorOption"
                onClick={() => handleOption('FrontEnd')}
                onKeyPress={() => console.log('')}
                role="button"
                tabIndex={0}>
                FrontEnd{' '}
            </div>
            <div
                className="selectorOption"
                onClick={() => handleOption('FullStack')}
                onKeyPress={() => console.log('')}
                role="button"
                tabIndex={0}>
                FullStack
            </div>
            {/* <div
                className="selectorOption"
                onClick={() => handleOption('javascript')}
                onKeyPress={() => console.log('')}
                role="button"
                tabIndex={0}>
                Javascript{' '}
            </div> */}
        </div>
    );
};

export default Selector;
