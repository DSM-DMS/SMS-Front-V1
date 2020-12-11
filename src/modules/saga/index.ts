import { all } from "redux-saga/effects";

import jsonSaga from "./json";
import posterSaga from "./poster";
import mainSaga from "./main";

function* rootSaga() {
  yield all([jsonSaga(), posterSaga(), mainSaga()]);
}

export default rootSaga;
