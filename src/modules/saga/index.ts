import { all } from "redux-saga/effects";

import jsonSaga from "./json";

function* rootSaga() {
  // rootReducer와 같은역할
  yield all([jsonSaga()]);
  // all([saga1(), saga2(), saga3()...])
}

export default rootSaga;
