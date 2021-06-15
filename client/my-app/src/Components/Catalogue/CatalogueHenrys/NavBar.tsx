import React from 'react';
import DropdownPerfil from './DropdownPerfil';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-yellow_henry shadow dark:bg-gray-800">
            <div className=" px-6 py-6 mx-auto">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-gray-700">
                            <h5 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                                Find Your Henry
                            </h5>
                        </div>
                    </div>
                    <div className="flex-1 md:flex md:items-center md:justify-between">
                        <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                            <p className="px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                                Join Slack
                            </p>
                            <p className="px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                                Browse Topics
                            </p>
                            <p className="px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                                Random Item
                            </p>
                            <p className="px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                                Experts
                            </p>
                        </div>
                        <SearchBar />
                        <div className="flex flex-row self-center justify-center mt-4 md:mt-0">
                            <Link to="/admin">
                                <button
                                    className="hidden mx-4 text-grayHenry md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                                    aria-label="show notifications">
                                    <svg
                                        width="28"
                                        height="34"
                                        viewBox="0 0 28 34"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.208 33.9166H10.458C9.10801 33.9166 7.75463 32.0216 6.62063 29.3165L2.02051 33.9166L0.333008 32.2291V25.4791L4.35432 21.4578C3.94426 19.2776 3.70801 17.1378 3.70801 15.3541C3.70801 8.60413 8.77051 0.166626 13.833 0.166626C18.8955 0.166626 23.958 8.60413 23.958 15.3541C23.958 17.1395 23.7218 19.2776 23.3117 21.4578L27.333 25.4791V32.2291L25.6455 33.9166L21.0454 29.3165C19.9114 32.0216 18.5597 33.9166 17.208 33.9166ZM13.833 30.5416H11.1077C11.0002 30.4066 10.8994 30.2663 10.8056 30.1214C10.2201 29.2237 9.59063 27.818 9.01857 26.1001C7.85082 22.5935 7.08301 18.3157 7.08301 15.3541C7.08301 9.9575 11.2073 3.54163 13.833 3.54163C16.4588 3.54163 20.583 9.9575 20.583 15.3541C20.583 18.3157 19.8152 22.5952 18.6474 26.1001C18.0737 27.818 17.4459 29.222 16.8587 30.1214C16.7655 30.2663 16.6652 30.4065 16.5583 30.5416H13.833ZM13.833 17.0416C14.7281 17.0416 15.5866 16.686 16.2195 16.0531C16.8524 15.4202 17.208 14.5617 17.208 13.6666C17.208 12.7715 16.8524 11.9131 16.2195 11.2801C15.5866 10.6472 14.7281 10.2916 13.833 10.2916C12.9379 10.2916 12.0795 10.6472 11.4465 11.2801C10.8136 11.9131 10.458 12.7715 10.458 13.6666C10.458 14.5617 10.8136 15.4202 11.4465 16.0531C12.0795 16.686 12.9379 17.0416 13.833 17.0416Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </button>
                            </Link>
                            <button
                                className="hidden mr-4 text-grayHenry md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                                aria-label="show notifications">
                                <div className="w-8 h-8 overflow-hidden">
                                    <svg
                                        className="w-10 h-10"
                                        viewBox="0 0 28 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </button>
                            <DropdownPerfil />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
