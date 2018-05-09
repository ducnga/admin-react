import * as types from './../constants/Login';
var initialState = {
    isLogin: false,
    isCheck: false,
    User: null,
    errorEmail: null,
    errorPassword: null,
    Msg: null,
    Token: null
};

var myReducers = (state = initialState, action) => {
    const { data } = action;
    switch (action.type) {
        case types.LOGIN_FAIL:
            return {
                ...state,
                isLogin: false,
                isCheck: true,
                errorEmail: data.Email ? data.Email : null,
                errorPassword: data.Password ? data.Password : null,
                Msg: 'Đăng nhập thất bại'
            };

        case types.LOGIN_SUCCESS:
            localStorage.setItem('@token', data.token);
            return {
                ...state,
                isLogin: true,
                isCheck: true,
                errorEmail: null,
                errorPassword: null,
                User: data.user,
                Msg: 'Đăng nhập thành công'
            };

        case types.CHECK_TOKEN_FAIL:
            localStorage.removeItem('@token');
            return {
                ...state,
                isLogin: false,
                isCheck: true,
                User: null,
                errorEmail: null,
                errorPassword: null,
                Msg: 'Chưa đăng nhập'
            };

        case types.CHECK_TOKEN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                errorEmail: null,
                isCheck: true,
                errorPassword: null,
                User: data.user,
                Msg: 'đã đăng nhập'
            };

        default: return state;
    }

}
export default myReducers;