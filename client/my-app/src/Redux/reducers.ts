import {
    FETCHALUMNOS,
    FILTERTECNOLOGY,
    FILTERTECNOLOGIES,
    SEARCHBYNAME,
    MODIFYALUMN
} from './actions';

const initialState = {
    alumnos: [],
    alumnosFiltrados: []
};

const alumnosReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCHALUMNOS:
            return {
                ...state,
                alumnos: action.payload
            };
        // case FILTERTECNOLOGY:
        //     return {
        //         ...state,
        //         alumnosFiltrados: [
        //             ...state.alumnos.filter((r: any) =>
        //                 r.habilities
        //                     .map((a: any) => a.toLowerCase())
        //                     .includes(action.payload)
        //             )
        //         ]
        //     };

        case FILTERTECNOLOGIES: {
            let aux: any[] = [];
            action.payload.array.length > 0
                ? action.payload.array.forEach((filter: any) => {
                      action.payload.method == 'add'
                          ? (aux = state.alumnosFiltrados?.filter(
                                (student: any) => {
                                    return student.habilities.includes(filter);
                                }
                            ))
                          : (aux = state.alumnos?.filter((student: any) => {
                                return student.habilities.includes(filter);
                            }));
                  })
                : (aux = state.alumnos);
            return {
                ...state,
                alumnosFiltrados: aux
            };
        }
        case MODIFYALUMN:
            console.log('reducer', state.alumnos);
            return {
                ...state,
                alumnos: action.payload
            };
        default:
            return state;
    }
};

export default alumnosReducer;

// {
//     name:string
//     age:number
//     surname:string
//     habilities:[string]
//     picture:string
//     country:string
//     }
