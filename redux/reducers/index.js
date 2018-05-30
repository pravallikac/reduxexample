import {combineReducers} from 'redux';
import Auth from "./AuthReducer";
import Home from "./HomeReducer";

export default combineReducers({
  Auth,
  Home
});
