import * as types from '../actions/actionTypes';
const initialState={
    username:'sri',
    password:''
}

const reducer=(state=initialState,action)=>{
    
    if(action.type===types.SIGNIN){
        console.log('reached store*******************');    
        return{
            ...state,
            username:action.username,
            password:action.password,
            }
        }
    return state;
}

export default reducer;