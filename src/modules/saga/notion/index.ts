import { call, takeEvery } from "redux-saga/effects";
import { apiDefault } from "../../../lib/api/client";
import {
  getNoticeListSaga as getNoticeListSagaCreater,
  GET_NOTICE_LIST_SAGA
} from "../../action/notice";

function* getNoticeListSaga(
  action: ReturnType<typeof getNoticeListSagaCreater>
) {
  const res = yield call(
    apiDefault().get,
    `/announcements/types/school?start=${action.payload}`
  );
  console.log(res);
}

function* noticeSaga() {
  yield takeEvery(GET_NOTICE_LIST_SAGA, getNoticeListSaga);
}

export default noticeSaga;
