import { all } from "redux-saga/effects";

import jsonSaga from "./json";
import counterSaga from "./counter";

function* rootSaga() {
  // rootReducer와 같은역할
  yield all([jsonSaga(), counterSaga()]);
  // all([saga1(), saga2(), saga3()...])
}

export default rootSaga;
