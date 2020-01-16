import * as types from './actionTypes';

export const signin=(email,password)=>dispatch=>{
console.log("action creator called");
    dispatch({
    type:types.SIGNIN,
    
        email:email,
        pswd:password
    
    })
    
};

