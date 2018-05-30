import * as Type from '../actions/ActionTypes';

const initialState={
  loginuser:false,
  username:'',
  password:'',
  userObject:''
}

const handleLoginServerResponseSuccess =(state, action)=>{
  let newState = {};
    newState =  Object.assign({}, state, {"loginuser":true, userObject:action.result});
  return {...newState}

}
export default (state = initialState, action) =>{

  switch(action.type){
    case Type.LOGIN_USER:
        return {...state}
    case Type.LOGIN_USER_SERVER_RESPONSE_SUCCESS:
        return handleLoginServerResponseSuccess(state, action);
    case Type.LOGIN_USER_SERVER_RESPONSE_ERROR:
        return {...state}
    default :
      return {...state};

  }

}
