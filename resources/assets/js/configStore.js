import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import myReducer from './reducers/index';

const store = createStore(
    myReducer,
    {},
    applyMiddleware(thunk)
);
export default store;