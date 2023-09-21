import { SET_ACTIVE_MENU } from '../actions/app.action';

const initialState = {
    activeMenu: ''
};

function myApp(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_MENU:
            return Object.assign({}, state, {
                activeMenu: action.payload
            });
        default:
            return state;
    }
}

export default myApp;