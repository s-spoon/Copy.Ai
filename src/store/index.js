import { createStore, combineReducers } from 'redux';
import myApp from './reducers/app.reducer';

const rootReducer = combineReducers({
    r1: myApp
});

const store = createStore(rootReducer);

export default store;
