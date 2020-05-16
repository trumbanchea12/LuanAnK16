import * as types from '../constants/ActionType';

const initialState = {
    infoUser: [],
};

const signup = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_UP:
            return { ...state, infoUser: action.info }
        default: return { ...state };
    }
}

export default signup;