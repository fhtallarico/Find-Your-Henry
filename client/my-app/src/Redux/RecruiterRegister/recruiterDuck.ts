import { RecruiterState } from '../../types/Recruiters';
import { Dispatch } from 'redux';
import {
    ADD_RECRUITER,
    ADD_RECRUITER_SUCCESS,
    ADD_RECRUITER_ERROR,
    RecruiterActionTypes
} from './Contants';
import { ApolloClient, InMemoryCache, gql, useMutation } from '@apollo/client';
//contants
const initialState: RecruiterState = {
    recruiters: [],
    loading: false,
    error: ''
};

//apollo
const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
});

const ADD_RECRUITER_GQL = gql`
    mutation AddTodo($type: String!) {
        addTodo(type: $type) {
            id
            type
        }
    }
`;

const [addRecruiter, { data, loading, error }] = useMutation(ADD_RECRUITER_GQL);

//reducer
export default function reducer(
    state = initialState,
    action: RecruiterActionTypes
): RecruiterState {
    switch (action.type) {
        case ADD_RECRUITER:
            return { ...state };
        case ADD_RECRUITER_SUCCESS:
            return { ...state };
        case ADD_RECRUITER_ERROR:
            return { ...state };
        default:
            return state;
    }
}
//actions
// export const addRecruitersAction = () => (
//     dispatch: Dispatch,
//     getState: () => AppState,
//     client
// ) => {
//     const query = dispatch({
//         type: ADD_RECRUITER
//     });
// };
