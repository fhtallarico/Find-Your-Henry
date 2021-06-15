import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import productReducer from './productsDuck.js'
import thunk from 'redux-thunk';
import alumnosReducer from './reducers';

const rootReducer = combineReducers({
    // products: productReducer
    alumnos: alumnosReducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}
export type RootState = ReturnType<typeof rootReducer>;
