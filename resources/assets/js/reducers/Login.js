import * as types from './../constants/Login';
var initialState = {
    isLogin: false,
    User: null,
    errorEmail:null,
    errorPassword:null,
    Msg: null,
    Token: null
};

var myReducers = (state = initialState, action) => {
    const { data } = action;
    switch (action.type) {
        case types.CHECK_LOGIN:
            return state;

        case types.LOGIN_FAIL:
            return {
                ...state,
                isLogin: false,
                errorEmail:data.Email ? data.Email: null,
                errorPassword:data.Password ? data.Password:null,
                Msg: 'Đăng nhập thất bại'
            };

        case types.LOGIN_SUCCESS:
            localStorage.setItem('@token',data.token);
            return {
                ...state,
                isLogin: true,
                errorEmail:null,
                errorPassword:null,
                User: data.user,
                Msg: 'Đăng nhập thành công'
            };

        case types.CHECK_TOKEN_FAIL:
        localStorage.setItem('@token',null);
            return {
                ...state,
                isLogin:false,
                User:null,
                errorEmail:null,
                errorPassword:null,
                Msg: 'chưa đăng nhập'
            };

        case types.CHECK_TOKEN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                errorEmail:null,
                errorPassword:null,
                User: data.user,
                Msg: 'đã đăng nhập'
            };

        default: return state;
    }

}
export default myReducers;