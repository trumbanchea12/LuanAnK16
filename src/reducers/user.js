import * as types from './../constants/ActionType';

const initialState = {
    infoUser: [],
    checked : '',
    password: '',
};

const signin = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_IN:
            return { ...state, infoUser: action.info, checked : action.checked, password : action.password_Old } 
        case types.SIGN_OUT:
            return {...state, infoUser: [], checked : '', password : ''}  
        case types.CHANGE_INFO:
            return {...state, infoUser : action.info}  
        default: return { ...state };
    }
}

export default signin;