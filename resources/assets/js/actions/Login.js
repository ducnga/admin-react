import * as Types from './../constants/Login';
import SendLogin from './../api/SendLogin';
import SendToken from './../api/SendToken';

export const send_login = (Email, Password) => dispath =>
    SendLogin(Email, Password)
        .then(data =>dispath(login_success(data)))
        .catch(dispath(login_fail()));
export const login_success = (data) => {
    return {
        type: Types.LOGIN_SUCCESS,
        data
    }
}
export const login_fail = () => {
    return {
        type: Types.LOGIN_FAIL
    }
}

export const check_login = () => {
    return {
        type: Types.CHECK_LOGIN
    }
}

export const send_token = (jwt_token) => dispath =>
    SendToken(jwt_token)
        .then(data => dispath(token_success(data)))
        .catch(dispath(token_expired()));

export const get_token = () => dispatch => 
    
    { 
        let token = localStorage.getItem('jwt_token');
        if (token) 
        { 
            dispatch(send_token(token)); 
        } 
    };
export const token_success = () => {
    return {
        type: Types.TOKEN_SUCCESS
    }
}

export const token_expired = () => {
    return {
        type: Types.TOKEN_EXPIRED
    }
}