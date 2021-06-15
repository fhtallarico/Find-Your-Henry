import { gql, useQuery } from '@apollo/client';
import React from 'react';
import JobOffer from './JobOffer';

interface PropsSection {
    ofertas: [];
}
const SectionJobOffer: React.FC<PropsSection> = ({ ofertas }) => {
    return (
        <div className=" bg-yellow_henry sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5 rounded-lg mt-20">
            <div className="border-b border-grayHenry mb-5">
                <h2 className="pb-3 text-center max-w-lg font-sans text-xl font-bold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto">
                    {`Company's`} Name Job Offer
                </h2>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {/* {ofertas.map((oferta) => {
                    <JobOffer
                        posicion={oferta.posicion}
                        tecnologias={oferta.tecnologias}
                        descripcion={oferta.descripcion}
                        picture={oferta.picture}
                    />;
                })} */}
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <div className="object-cover bg-grayHenry w-full h-52 md:h-64 xl:h-72">
                            <p className="pt-6 text-center text-lg font-bold text-gray-100">
                                Position
                            </p>
                            <p className="pt-3 text-center text-lg font-bold text-gray-100">
                                Tecnologies
                            </p>
                            <svg
                                className="w-2/3 h-48 md:h-56 xl:h-60 m-auto opacity-25"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 26V8M30 8H2V26H30V8ZM20 8C20 8 20 4 16 4C12 4 12 8 12 8H20ZM8 26V8V26Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-5 text-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="text-lg font-regular text-black">
                                descripcion
                            </p>
                            <p className="text-xl font-bold text-black">
                                Leer mas
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <div className="object-cover bg-grayHenry w-full h-52 md:h-64 xl:h-72">
                            <p className="pt-6 text-center text-lg font-bold text-gray-100">
                                Position
                            </p>
                            <p className="pt-3 text-center text-lg font-bold text-gray-100">
                                Tecnologies
                            </p>
                            <svg
                                className="w-2/3 h-48 md:h-56 xl:h-60 m-auto opacity-25"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 26V8M30 8H2V26H30V8ZM20 8C20 8 20 4 16 4C12 4 12 8 12 8H20ZM8 26V8V26Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-5 text-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="text-lg font-regular text-black">
                                descripcion
                            </p>
                            <p className="text-xl font-bold text-black">
                                Leer mas
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <div className="object-cover bg-grayHenry w-full h-52 md:h-64 xl:h-72">
                            <p className="pt-6 text-center text-lg font-bold text-gray-100">
                                Position
                            </p>
                            <p className="pt-3 text-center text-lg font-bold text-gray-100">
                                Tecnologies
                            </p>
                            <svg
                                className="w-2/3 h-48 md:h-56 xl:h-60 m-auto opacity-25"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 26V8M30 8H2V26H30V8ZM20 8C20 8 20 4 16 4C12 4 12 8 12 8H20ZM8 26V8V26Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-5 text-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="text-lg font-regular text-black">
                                descripcion
                            </p>
                            <p className="text-xl font-bold text-black">
                                Leer mas
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <div className="object-cover bg-grayHenry w-full h-52 md:h-64 xl:h-72">
                            <p className="pt-6 text-center text-lg font-bold text-gray-100">
                                Position
                            </p>
                            <p className="pt-3 text-center text-lg font-bold text-gray-100">
                                Tecnologies
                            </p>
                            <svg
                                className="w-2/3 h-48 md:h-56 xl:h-60 m-auto opacity-25"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 26V8M30 8H2V26H30V8ZM20 8C20 8 20 4 16 4C12 4 12 8 12 8H20ZM8 26V8V26Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-5 text-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="text-lg font-regular text-black">
                                descripcion
                            </p>
                            <p className="text-xl font-bold text-black">
                                Leer mas
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <div className="object-cover bg-grayHenry w-full h-52 md:h-64 xl:h-72">
                            <p className="pt-6 text-center text-lg font-bold text-gray-100">
                                Position
                            </p>
                            <p className="pt-3 text-center text-lg font-bold text-gray-100">
                                Tecnologies
                            </p>
                            <svg
                                className="w-2/3 h-48 md:h-56 xl:h-60 m-auto opacity-25"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 26V8M30 8H2V26H30V8ZM20 8C20 8 20 4 16 4C12 4 12 8 12 8H20ZM8 26V8V26Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-5 text-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="text-lg font-regular text-black">
                                descripcion
                            </p>
                            <p className="text-xl font-bold text-black">
                                Leer mas
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <div className="object-cover bg-grayHenry w-full h-52 md:h-64 xl:h-72">
                            <p className="pt-6 text-center text-lg font-bold text-gray-100">
                                Position
                            </p>
                            <p className="pt-3 text-center text-lg font-bold text-gray-100">
                                Tecnologies
                            </p>
                            <svg
                                className="w-2/3 h-48 md:h-56 xl:h-60 m-auto opacity-25"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 26V8M30 8H2V26H30V8ZM20 8C20 8 20 4 16 4C12 4 12 8 12 8H20ZM8 26V8V26Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-5 text-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="text-lg font-regular text-black">
                                descripcion
                            </p>
                            <p className="text-xl font-bold text-black">
                                Leer mas
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <div className="object-cover bg-grayHenry w-full h-52 md:h-64 xl:h-72">
                            <p className="pt-6 text-center text-lg font-bold text-gray-100">
                                Position
                            </p>
                            <p className="pt-3 text-center text-lg font-bold text-gray-100">
                                Tecnologies
                            </p>
                            <svg
                                className="w-2/3 h-48 md:h-56 xl:h-60 m-auto opacity-25"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 26V8M30 8H2V26H30V8ZM20 8C20 8 20 4 16 4C12 4 12 8 12 8H20ZM8 26V8V26Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-5 text-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="text-lg font-regular text-black">
                                descripcion
                            </p>
                            <p className="text-xl font-bold text-black">
                                Leer mas
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <div className="object-cover bg-grayHenry w-full h-52 md:h-64 xl:h-72">
                            <p className="pt-6 text-center text-lg font-bold text-gray-100">
                                Position
                            </p>
                            <p className="pt-3 text-center text-lg font-bold text-gray-100">
                                Tecnologies
                            </p>
                            <svg
                                className="w-2/3 h-48 md:h-56 xl:h-60 m-auto opacity-25"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 26V8M30 8H2V26H30V8ZM20 8C20 8 20 4 16 4C12 4 12 8 12 8H20ZM8 26V8V26Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-5 text-center transition-opacity duration-300 bg-white bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="text-lg font-regular text-black">
                                descripcion
                            </p>
                            <p className="text-xl font-bold text-black">
                                Leer mas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center self-center mt-5">
                <button className="bg-grayHenry text-white block rounded-md font-bold py-3 px-4 mr-4 flex items-center transform hover:scale-110 motion-reduce:transform-none">
                    <svg
                        className="mr-2 "
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
                            fill="white"
                        />
                    </svg>
                    Previous page
                </button>
                <button className="bg-grayHenry text-white block rounded-md font-bold py-3 px-4 ml-4 flex items-center transform hover:scale-110 motion-reduce:transform-none">
                    Next page
                    <svg
                        className="ml-2 "
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SectionJobOffer;
