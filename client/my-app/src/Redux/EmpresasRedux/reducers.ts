import {FETCHEMPRESAS} from "./actions"

const initialState = {
    empresas: []
}

const empresasReducer = (state = initialState, action:any) => {
    switch(action.type){
        case FETCHEMPRESAS:
            return{
            ...state,
            empresas: action.payload
        }
        default:
        return state 
    }
}

export default empresasReducer