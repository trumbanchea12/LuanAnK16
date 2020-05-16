import * as types from './../constants/ActionType';
import callApi from '../network/apiCaller';
import { Alert, AsyncStorage } from 'react-native';

export const actSignInRequest = (info) => {
    return (dispatch) => {
        callApi('login', 'POST', info).then(res => {
            if(res.data.status == "error")
            {
                dispatch(actSignIn( [] ,"error"));
                Alert.alert("Thông báo !", "Tài khoản hoặc mật khẩu không đúng");
            }
            else
            {
                dispatch(actSignIn(res.data.user, res.data.status));
            }
        });
    };
}

export const actSignIn = (info, checked) => {
    return {
        type : types.SIGN_IN,
        info,
        checked
    }
}
