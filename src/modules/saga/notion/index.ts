import { call, put, takeEvery } from "redux-saga/effects";
import { apiDefault } from "../../../lib/api/client";
import {
  getNoticeList,
  getNoticeListSaga as getNoticeListSagaCreater,
  getNoticeDetailSaga as getNoticeDetailtSagaCreater,
  GET_NOTICE_DETAIL_SAGA,
  GET_NOTICE_LIST_SAGA,
  getCircleNoticeListSaga as getCircleNoticeListSagaCreater,
  getNoticeDetail,
  GET_CIRCLE_NOTICE_LIST_SAGA,
  getWriterNoticeListSaga as getWriterNoticeListSagaCreater,
  GET_WRITER_NOTICE_LIST_SAGA
} from "../../action/notice";

function* getNoticeListSaga(
  action: ReturnType<typeof getNoticeListSagaCreater>
) {
  try {
    const res = yield call(
      apiDefault().get,
      `/announcements/types/school?start=${action.payload}`
    );
    yield put(getNoticeList(res.data.announcements));
  } catch (err) {}
}

function* getCircleNoticeListSaga(
  action: ReturnType<typeof getCircleNoticeListSagaCreater>
) {
  try {
    const res = yield call(
      apiDefault().get,
      `/announcements/types/club?start=${action.payload}`
    );
    yield put(getNoticeList(res.data.announcements));
  } catch (err) {}
}
function* getNoticeDetailSaga(
  action: ReturnType<typeof getNoticeDetailtSagaCreater>
) {
  try {
    const res = yield call(
      apiDefault().get,
      `/announcements/uuid/${action.payload}`
    );

    yield put(getNoticeDetail(res.data));
  } catch (err) {}
}

function* getWriteNoticeListSaga(
  action: ReturnType<typeof getWriterNoticeListSagaCreater>
) {
  const res = yield call(
    apiDefault().get,
    `/announcements/writer-uuid/${action.payload}`
  );
  yield put(getNoticeList(res.data.announcements));
  console.log(res);
}

function* noticeSaga() {
  yield takeEvery(GET_NOTICE_LIST_SAGA, getNoticeListSaga);
  yield takeEvery(GET_NOTICE_DETAIL_SAGA, getNoticeDetailSaga);
  yield takeEvery(GET_CIRCLE_NOTICE_LIST_SAGA, getCircleNoticeListSaga);
  yield takeEvery(GET_WRITER_NOTICE_LIST_SAGA, getWriteNoticeListSaga);
}

export default noticeSaga;
