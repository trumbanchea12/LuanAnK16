import * as types from './../constants/ActionType';
import callApi from '../network/apiCaller';
import { Alert } from 'react-native';

export const actSignUpRequest = (info) => {
    return (dispatch) => {
        callApi('register', 'POST', info).then(res => {
            // dispatch(actSignUp(res.data.user));
            if(res.data.status == "error")
            {
                Alert.alert("Thông báo !", "Email đã có người sử dụng");
            }
            else
            {
                dispatch(actSignUp(res.data.user));
                Alert.alert("Thông báo !", "Đăng kí thành công");
            }
        });
    };
}

export const actSignUp = (info) => {
    return {
        type : types.SIGN_UP,
        info
    }
}