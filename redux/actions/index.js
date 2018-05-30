import * as Type from './ActionTypes';

export const loginUser =(username, password)=>{
  return {
    type:Type.LOGIN_USER,
    username,
    password
  }
}
