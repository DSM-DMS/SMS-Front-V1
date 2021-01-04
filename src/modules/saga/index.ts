import { all } from "redux-saga/effects";

import posterSaga from "./poster";
import mainSaga from "./main";
import noticeSaga from "./notion";
import headerSaga from "./header";
import outingCardSaga from "./outingCard";
import writeSaga from "./write";
import managementSaga from "./management";

function* rootSaga() {
  yield all([
    posterSaga(),
    mainSaga(),
    noticeSaga(),
    headerSaga(),
    outingCardSaga(),
    writeSaga(),
    managementSaga()
  ]);
}

export default rootSaga;
