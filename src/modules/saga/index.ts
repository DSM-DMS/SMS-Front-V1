import { all } from "redux-saga/effects";
import jsonSaga from "./json";
import posterSaga from "./poster";

function* rootSaga() {
  yield all([jsonSaga(), posterSaga()]);
}

export default rootSaga;
