import * as types from './../constants/ActionType';

const initialState = {
    infoUser: [],
    checked : '',
};

const signin = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_IN:
            return { ...state, infoUser: action.info, checked : action.checked } 
        default: return { ...state };
    }
}

export default signin;