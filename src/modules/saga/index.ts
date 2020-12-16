import { all } from "redux-saga/effects";

import jsonSaga from "./json";
import posterSaga from "./poster";
import mainSaga from "./main";
import headerSaga from "./header";

function* rootSaga() {
  yield all([jsonSaga(), posterSaga(), mainSaga(), headerSaga()]);
}

export default rootSaga;
