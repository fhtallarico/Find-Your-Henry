import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { ProfessionalBackground } from '../../types/Alumns';
import { useHistory } from 'react-router-dom';

type ProfileAlumnProps = {
    id: string;
};

const QUERY = gql`
    query alumno($id: ID) {
        alumno(_id: $id) {
            _id
            name
            surname
            picture
            email
            Birthdate
            description
            ExtraHabilities
            habilities
            country
            location
            phone
            gender
            experience {
                _id
                description
                timeLapse
            }
            education {
                _id
                description
                timeLapse
            }
        }
    }
`;

const ProfileAlumn: React.FC<ProfileAlumnProps> = ({ id }) => {
    const history = useHistory();

    console.log(id);
    const { data, loading } = useQuery(QUERY, {
        variables: {
            id
        }
    });

    if (loading) return <p>cargando</p>;
    const { alumno } = data;
    console.log(alumno);

    const onCLick = () => {
        history.push('/catalogue');
        history.go(0);
    };

    return (
        <div className="container mx-auto my-5 p-5">
            <div className="md:flex no-wrap md:-mx-2 ">
                <div className="w-full md:w-3/12 md:mx-2">
                    <div className="bg-yellow_henry p-3 border-t-4 border-green-400">
                        <div className="image overflow-hidden">
                            <img
                                className="h-auto w-full mx-auto"
                                src={alumno.picture}
                                alt=""
                            />
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                            {alumno.name} {alumno.surname}
                        </h1>
                        <h3 className="text-gray-600 font-lg text-semibold leading-6">
                            About Me.
                        </h3>
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                            {alumno.description}
                        </p>
                        <ul className="bg-white bg-opacity-50 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3 ">
                                <span>Status</span>
                                <span className="ml-auto">
                                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                                        Active
                                    </span>
                                </span>
                            </li>
                        </ul>

                        <button
                            onClick={onCLick}
                            className="mt-4 bg-gray-700 hover:bg-gray-400 py-1 px-2 rounded text-white text-sm">
                            Back
                        </button>
                    </div>

                    <div className="my-4"></div>
                </div>

                <div className="w-full md:w-9/12 mx-2 h-64">
                    <div className="bg-yellow_henry p-3 shadow-sm rounded-sm">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                                <svg
                                    className="h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </span>
                            <span className="tracking-wide">About</span>
                        </div>
                        <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        First Name
                                    </div>
                                    <div className="px-4 py-2">
                                        {alumno.name}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Last Name
                                    </div>
                                    <div className="px-4 py-2">
                                        {alumno.surname}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Gender
                                    </div>
                                    <div className="px-4 py-2">
                                        {alumno.gender}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Contact No.
                                    </div>
                                    <div className="px-4 py-2">
                                        {alumno.phone}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Country
                                    </div>
                                    <div className="px-4 py-2">
                                        {alumno.country}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Location
                                    </div>
                                    <div className="px-4 py-2">
                                        {alumno.location}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Email.
                                    </div>
                                    <div className="px-4 py-2">
                                        <a
                                            className="text-blue-800"
                                            href="mailto:jane@example.com">
                                            {alumno.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Birthday
                                    </div>
                                    <div className="px-4 py-2">
                                        {alumno.Birthdate}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-yellow-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                            Show Full Information
                        </button>
                    </div>

                    <div className="my-4"></div>

                    <div className="bg-yellow_henry p-3 shadow-sm rounded-sm">
                        <div className="grid grid-cols-3">
                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span className="text-green-500">
                                        <svg
                                            className="h-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">
                                        Experience
                                    </span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    {alumno &&
                                        alumno.experience.map(
                                            (
                                                experience: ProfessionalBackground
                                            ) => (
                                                <li key={experience._id}>
                                                    <div className="text-teal-600">
                                                        {experience.description}
                                                    </div>
                                                    <div className="text-gray-500 text-xs">
                                                        {experience.timeLapse}
                                                    </div>
                                                </li>
                                            )
                                        )}
                                </ul>
                            </div>
                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span className="text-green-500">
                                        <svg
                                            className="h-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                fill="#fff"
                                                d="M12 14l9-5-9-5-9 5 9 5z"
                                            />
                                            <path
                                                fill="#fff"
                                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                            />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">
                                        Education
                                    </span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    {alumno &&
                                        alumno.education.map(
                                            (
                                                education: ProfessionalBackground
                                            ) => (
                                                <li key={education._id}>
                                                    <div className="text-teal-600">
                                                        {education.description}
                                                    </div>
                                                    <div className="text-gray-500 text-xs">
                                                        {education.timeLapse}
                                                    </div>
                                                </li>
                                            )
                                        )}
                                </ul>
                            </div>
                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span className="text-green-500">
                                        <svg
                                            className="h-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                fill="#fff"
                                                d="M12 14l9-5-9-5-9 5 9 5z"
                                            />
                                            <path
                                                fill="#fff"
                                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">
                                        Habilities
                                    </span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    {alumno &&
                                        alumno.habilities.map(
                                            (
                                                ability: Array<string>,
                                                index: number
                                            ) => (
                                                <li key={index}>
                                                    <div className="text-teal-600">
                                                        {ability}
                                                    </div>
                                                </li>
                                            )
                                        )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileAlumn;
