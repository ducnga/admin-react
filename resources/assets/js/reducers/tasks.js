import * as types from './../constants/ActionType';
var initialState = [];

var myReducers=(state=initialState,action)=>{
    switch (action.type) {
        case types.A:
            return state;
    
        default:return state;
    }
    
}
export default myReducers;