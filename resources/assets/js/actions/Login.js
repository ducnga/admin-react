import * as Types from './../constants/Login';
import SendLogin from './../api/SendLogin';
import SendToken from './../api/SendToken';

export const send_login = (Email, Password) => dispath =>
    SendLogin(Email, Password)
        .then(data => { return dispath(login_success(data)) })
        .catch(e => { return dispath(login_fail(e.response.data)) });
export const login_success = data => {
    return {
        type: Types.LOGIN_SUCCESS,
        data
    }
}
export const login_fail = (data) => {
    return {
        type: Types.LOGIN_FAIL,
        data
    }
}

export const check_token_success = (data) => {
    return {
        type: Types.CHECK_TOKEN_SUCCESS,
        data
    }
}

export const check_token_fail = () => {
    return {
        type: Types.CHECK_TOKEN_FAIL
    }
}

export const check_token = token => dispatch =>
    SendToken(token)
        .then(data => dispatch(check_token_success(data)))
        .catch(data => { console.log(data.response); return dispatch(check_token_fail()); });

export const get_token = () => dispatch => {
    let token = localStorage.getItem('@token');
    if (token && token !== null) {
        return dispatch(check_token(token));
    }
    else {
        return dispatch(check_token_fail());
    }

};
