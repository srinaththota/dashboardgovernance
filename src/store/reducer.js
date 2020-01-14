const initialState={
    username:'',
    password:''
}

const reducer=(state=initialState,action)=>{

    if(action.type==='STORECREDS'){
        return{
            ...state,
            username:action.username,
            password:action.password,
        }
        }
    return state;
}

export default reducer;