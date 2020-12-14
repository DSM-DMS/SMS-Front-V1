import { all } from "redux-saga/effects";

import jsonSaga from "./json";
import posterSaga from "./poster";
import mainSaga from "./main";
import noticeSaga from "./notion";

function* rootSaga() {
  yield all([jsonSaga(), posterSaga(), mainSaga(), noticeSaga()]);
}

export default rootSaga;
