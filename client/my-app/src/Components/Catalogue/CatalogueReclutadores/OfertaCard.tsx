import React, { useState } from 'react';
import img6 from './Images-Logos/img6.png';
import { type } from 'node:os';
interface Props {
    name: string;
    tecnologies: string;
    surname: string;
    Birthdate: string;
    picture: string;
    habilities: any;
    country: string;
}

const HenryCard: React.FC<Props> = (props) => {
    const { name, surname, habilities, picture, country, Birthdate } = props;

    return (
        <div className="max-w-min px-8 py-4 mx-auto bg-yellow_henry rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-center">
                <img
                    className="object-cover w-30 h-30 border-2 border-black rounded-full dark:border-indigo-400"
                    alt="Testimonial avatar"
                    src={picture}
                />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white md:text-xl">
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
        </div>
    );
};

export default HenryCard;
