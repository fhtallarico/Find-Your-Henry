import React from 'react';

interface PropsPerfil {
    nombre: string;
    link: string;
}

const CardPerfil: React.FC<PropsPerfil> = ({ nombre, link }) => {
    return (
        <div className="bg-yellow_henry px-4 py-4 h-auto rounded-lg mt-20">
            <div className="items-center lg:flex">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                        Name Of Company
                    </h2>

                    <div className="flex items-center mt-6 -mx-2">
                        <a className="mx-2">Link to the page of companny</a>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="max-w-lg">
                        <img
                            className="object-cover object-center w-auto h-auto rounded-md shadow"
                            src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPerfil;
