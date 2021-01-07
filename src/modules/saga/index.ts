import { all } from "redux-saga/effects";

import posterSaga from "./poster";
import mainSaga from "./main";
import headerSaga from "./header";
import outingCardSaga from "./outingCard";
import writeSaga from "./write";
import managementSaga from "./management";
import noticeListSaga from "./notice/list";
import noticeDetailSaga from "./notice/detail";

function* rootSaga() {
  yield all([
    posterSaga(),
    mainSaga(),
    headerSaga(),
    outingCardSaga(),
    writeSaga(),
    managementSaga(),
    noticeListSaga(),
    noticeDetailSaga()
  ]);
}

export default rootSaga;
