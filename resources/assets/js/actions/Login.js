import * as Types from './../constants/Login';
import SendLogin from './../api/SendLogin';

export const send_login = (Email, Password) => dispath =>
    SendLogin(Email, Password)
        .then(data => dispath(login_success(data)))
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

export const check_login = () =>{
    return {
        type:Types.CHECK_LOGIN
    }
}

// export const check_token = dispath => {

// }
