import { gql } from "@apollo/client"
import {Dispatch} from "redux"
import gqlClient from "../../index"
export const FETCHEMPRESAS = "FETCHEMPRESAS"


export const fetchEmpresas = () => async (dispatch: Dispatch) => {
    return await gqlClient.query({
        query: gql`
        {
            empresas {
              name
              picture
              description
              _id 
            }
        }
        `
    }).then(res => {
        console.log(res.data.alumnos)
        dispatch({type: FETCHEMPRESAS, payload: res.data.empresas})})
}