import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { Dispatch } from 'redux';
import gqlClient from '../Config/apollo';
export const FETCHALUMNOS = 'FETCHALUMNOS';
export const FILTERTECNOLOGY = 'FILTERTECNOLOGY';
export const FILTERTECNOLOGIES = 'FILTERTECNOLOGIES';
export const SEARCHBYNAME = 'SEARCHBYNAME';
export const MODIFYALUMN = 'MODIFYALUMN';

export const fetchAlumnos = () => async (dispatch: Dispatch) => {
    return await gqlClient
        .query({
            query: gql`
                {
                    alumnos {
                        name
                        Birthdate
                        surname
                        habilities
                        picture
                        country
                        _id
                    }
                }
            `
        })
        .then((res: any) => {
            console.log(res.data.alumnos);
            dispatch({ type: FETCHALUMNOS, payload: res.data.alumnos });
        });
};

export const filterTecnology = (tecnology: string) => (dispatch: Dispatch) => {
    dispatch({ type: FILTERTECNOLOGY, payload: tecnology.toLowerCase() });
};

export const filterTecnologies = (array: string[], method: string) => (
    dispatch: Dispatch
) => {
    dispatch({
        type: FILTERTECNOLOGIES,
        payload: { array: array, method: method }
    });
}  

export const modifyAlumnosState = (obj: any) => (dispatch: Dispatch) => {
    console.log('actions');
    dispatch({ type: MODIFYALUMN, payload: obj });
};
