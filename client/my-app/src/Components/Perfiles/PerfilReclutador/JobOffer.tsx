import React from 'react';

interface PropsJob {
    posicion: string;
    tecnologias: [];
    descripcion: string;
    picture: string;
}

const JobOffer: React.FC<PropsJob> = ({
    posicion,
    tecnologias,
    descripcion,
    picture
}) => {
    return (
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
                    <p className="text-xl font-bold text-black">Leer mas</p>
                </div>
            </div>
        </div>
    );
};

export default JobOffer;
