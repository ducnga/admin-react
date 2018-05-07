import * as Types from './../constants/Token';
import SendToken from './../api/SendToken';

export const send_token = (jwt_token) => dispath =>
    SendToken(jwt_token)
        .then(data => dispath(token_success(data)))
        .catch(dispath(token_expired()));

export const get_token = () => dispatch => 
    localStorage.getItem('jwt_token').then((token) => 
    { 
        if (token) 
        { 
            dispatch(send_token(JSON.parse(token))); 
        } 
    });
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
