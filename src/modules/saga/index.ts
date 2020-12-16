import { all } from "redux-saga/effects";

import jsonSaga from "./json";
import posterSaga from "./poster";
import mainSaga from "./main";
import noticeSaga from "./notion";
import headerSaga from "./header";

function* rootSaga() {
  yield all([jsonSaga(), posterSaga(), mainSaga(), noticeSaga(),headerSaga()]);
}

export default rootSaga;
