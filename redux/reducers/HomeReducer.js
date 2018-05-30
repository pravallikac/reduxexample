import * as Type from '../actions/ActionTypes';

const initiatState={
  loginuser:false,
  username:'',
  password:'',
}


export default (state = initiatState, action) =>{

  switch(action.type){
    case Type.LOGIN_USER:
        return {...state}
    case Type.LOGIN_USER_SERVER_RESPONSE_SUCCESS:
        return {...state}
    case Type.LOGIN_USER_SERVER_RESPONSE_ERROR:
        return {...state}
    default :
      return {...state};

  }

}
