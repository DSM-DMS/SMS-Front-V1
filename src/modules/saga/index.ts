import { all } from "redux-saga/effects";

import posterSaga from "./poster";
import mainSaga from "./main";
import headerSaga from "./header";
import outingCardSaga from "./outingCard";
import writeSaga from "./write";
import managementSaga from "./management";
import noticeListSaga from "./notice/list";
import noticeDetailSaga from "./notice/detail";
import recruitmentListSaga from "./recruitment/list";
import recruitmentDetailSaga from "./recruitment/detail";
import clubListSaga from "./club/list";
import clubDetailSaga from "./club/detail";
import checkNoticeSaga from "./checkNotice";

function* rootSaga() {
  yield all([
    posterSaga(),
    mainSaga(),
    headerSaga(),
    outingCardSaga(),
    writeSaga(),
    managementSaga(),
    noticeListSaga(),
    noticeDetailSaga(),
    recruitmentListSaga(),
    recruitmentDetailSaga(),
    clubListSaga(),
    clubDetailSaga(),
    checkNoticeSaga()
  ]);
}

export default rootSaga;
