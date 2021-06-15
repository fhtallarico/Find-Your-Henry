import { gql, useQuery } from '@apollo/client';
import React from 'react';

interface Detail {
    alumnoId: string;
}

const OBTENER_DATOS = gql`
    query obtenerAlumno($id: ID) {
        alumno(_id: $id) {
            name
            surname
            email
            description
            ExtraHabilities
            habilities
            country
        }
    }
`;

const HenryCardDetail: React.FC<Detail> = ({ alumnoId }) => {
    const { data, loading } = useQuery(OBTENER_DATOS, {
        variables: {
            alumnoId
        }
    });
    console.log(data);
    console.log(alumnoId);
    return (
        <div className="max-w-sm h-auto mx-auto overflow-hidden bg-yellow_henry rounded-lg shadow-lg dark:bg-gray-800">
            <img
                className="object-cover object-center w-full h-56"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
            />

            <div className="flex items-center px-6 py-3 bg-gray-500">
                <h1 className=" text-lg font-semibold text-white">Nombre</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Posicion
                </h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">
                    Tecnologias
                </p>

                <p className="py-2 text-gray-700 dark:text-gray-400">
                    Sobre Mi
                </p>
            </div>
        </div>
    );
};

export default HenryCardDetail;
