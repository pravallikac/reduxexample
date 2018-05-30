import { all, fork, takeEvery } from "redux-saga/effects";
import * as Types from '../actions/ActionTypes';
import * as Auth from "./AuthSaga";

export default function* rootSaga(params) {
  yield all([takeEvery(Types.LOGIN_USER, Auth.fetchLoginUser)]);
}
