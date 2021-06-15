import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { modifyAlumnosState } from '../../../Redux/actions';

const SearchBar: React.FC = (props: any) => {
    // eslint-disable-next-line no-var
    const OBTENER_ALUMNOS = gql`
        query busquedaAlumnos($search: String!) {
            busquedaAlumnos(search: $search) {
                name
                Birthdate
                surname
                habilities
                picture
                country
                _id
            }
        }
    `;

    const [getData, { data }] = useLazyQuery(OBTENER_ALUMNOS);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const search = (document.getElementById('search') as HTMLInputElement)
            .value;
        console.log('esto', search);
        getData({
            variables: {
                search: search
            }
        });
        console.log('data', data);
        props.modifyAlumnosState(data?.busquedaAlumnos);
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Search</button>
            <input type="text" placeholder="Buscar Henry" id="search"></input>
        </form>
    );
};

export default connect(null, { modifyAlumnosState })(SearchBar);
