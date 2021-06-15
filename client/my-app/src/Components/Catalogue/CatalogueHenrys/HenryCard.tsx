import React, { useState } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
interface Props {
    name: string;
    surname: string;
    Birthdate: string;
    picture: string;
    habilities: any;
    country: string;
    id: any;
}

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const HenryCard: React.FC<Props> = (props) => {
    const {
        name,
        surname,
        habilities,
        picture,
        country,
        Birthdate,
        id
    } = props;
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <div>
            <div className="max-w-min px-8 py-4 mx-auto bg-yellow_henry rounded-lg shadow-lg dark:bg-gray-800">
                <div
                    className="flex justify-center -mt-16 md:justify-center relative overflow-hidden transition duration-300 transform rounded-full shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
                    onClick={() => setShowModal(true)}
                    onKeyPress={() => console.log('')}
                    role="button"
                    tabIndex={0}>
                    <img
                        className="object-cover w-30 h-30 border-2 border-black rounded-full dark:border-indigo-400 hover:opacity-25"
                        alt="Testimonial avatar"
                        src={picture}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-grayHenry bg-opacity-75 opacity-0 hover:opacity-100">
                        <div className="flex items-center justify-center space-x-3">
                            <svg
                                width="64"
                                height="76"
                                viewBox="0 0 28 34"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M17.208 33.9166H10.458C9.10801 33.9166 7.75463 32.0216 6.62063 29.3165L2.02051 33.9166L0.333008 32.2291V25.4791L4.35432 21.4578C3.94426 19.2776 3.70801 17.1378 3.70801 15.3541C3.70801 8.60413 8.77051 0.166626 13.833 0.166626C18.8955 0.166626 23.958 8.60413 23.958 15.3541C23.958 17.1395 23.7218 19.2776 23.3117 21.4578L27.333 25.4791V32.2291L25.6455 33.9166L21.0454 29.3165C19.9114 32.0216 18.5597 33.9166 17.208 33.9166ZM13.833 30.5416H11.1077C11.0002 30.4066 10.8994 30.2663 10.8056 30.1214C10.2201 29.2237 9.59063 27.818 9.01857 26.1001C7.85082 22.5935 7.08301 18.3157 7.08301 15.3541C7.08301 9.9575 11.2073 3.54163 13.833 3.54163C16.4588 3.54163 20.583 9.9575 20.583 15.3541C20.583 18.3157 19.8152 22.5952 18.6474 26.1001C18.0737 27.818 17.4459 29.222 16.8587 30.1214C16.7655 30.2663 16.6652 30.4065 16.5583 30.5416H13.833ZM13.833 17.0416C14.7281 17.0416 15.5866 16.686 16.2195 16.0531C16.8524 15.4202 17.208 14.5617 17.208 13.6666C17.208 12.7715 16.8524 11.9131 16.2195 11.2801C15.5866 10.6472 14.7281 10.2916 13.833 10.2916C12.9379 10.2916 12.0795 10.6472 11.4465 11.2801C10.8136 11.9131 10.458 12.7715 10.458 13.6666C10.458 14.5617 10.8136 15.4202 11.4465 16.0531C12.0795 16.686 12.9379 17.0416 13.833 17.0416Z"
                                    fill="#F7DF1E"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <h2 className="text-lg font-semibold text-center text-gray-800 dark:text-white md:text-lg">
                    {name + ' ' + surname}
                </h2>
                <div className="flex justify-center ">
                    <div className="text-md font-medium text-gray-600 dark:text-indigo-300">
                        Full Stack Dev
                    </div>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-200">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'auto auto'
                        }}>
                        <ul
                            style={{
                                gridColumnStart: '1',
                                gridColumnEnd: '2',
                                marginRight: '10px'
                            }}>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Node</li>
                        </ul>
                        <ul style={{ gridColumnStart: '2' }}>
                            <li>Express</li>
                            <li>Postgres</li>
                            <li>Sequelize</li>
                        </ul>
                    </div>
                </p>
                <div className="flex flex-col justify-center">
                    <Link to={`/profileAlumn/${id}`}>
                        <button className="px-4 py-2 mt-2 mb-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-grayHenry rounded-md dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700">
                            Profile
                        </button>
                    </Link>
                    <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-grayHenry rounded-md dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700">
                        Send Propose
                    </button>
                </div>
            </div>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="text-2xl font-semibold">
                                        Modal Title
                                    </h3>
                                    <button
                                        className=" ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <Select
                                        defaultValue={options[1]}
                                        isMulti
                                        name="colors"
                                        options={options}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                    <button
                                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        style={{ transition: 'all .15s ease' }}
                                        onClick={() => setShowModal(false)}>
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
};

export default HenryCard;
