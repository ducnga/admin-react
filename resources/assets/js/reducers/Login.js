import * as types from './../constants/Login';
var initialState = {
    isLogin: false,
    User: null,
    Msg: null,
    Token: null
};

var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.CHECK_LOGIN:
            return state;

        case types.LOGIN_FAIL:
            return {
                ...state,
                Msg: 'Đăng nhập thất bại'
            };

        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                Msg: 'Đăng nhập thành công'
            };

        default: return state;
    }

}
export default myReducers;