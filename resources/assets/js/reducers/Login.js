import * as types from './../constants/Login';
var initialState = {
    isLogin: false,
    isCheck: false,
    User: null,
    Msg: null,
    Token: null
};

var myReducers = (state = initialState, action) => {
    const {data} = action;
    switch (action.type) {
        case types.CHECK_LOGIN:
            return state;

        case types.LOGIN_FAIL:
            return {
                ...state,
                Msg: 'Đăng nhập thất bại'
            };

        case types.LOGIN_SUCCESS:
            localStorage.setItem('jwt_token', data.token);
            return {
                ...state,
                isLogin: true,
                Msg: 'Đăng nhập thành công'
            };
        case types.TOKEN_EXPIRED:
        localStorage.removeItem('jwt_token');
        // console.log('xxxxxxxxxxxxxxxxxxxxx');
            return {
                ...state,
                isLogin: false,
                isCheck: true,
                Msg: 'Đăng nhập thất bại'
            };

        case types.TOKEN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                isCheck: true,
                Msg: 'Đăng nhập thành công'
            };

        default: return state;
    }

}
export default myReducers;