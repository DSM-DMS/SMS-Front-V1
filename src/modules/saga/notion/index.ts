import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { call, getContext, put, takeEvery } from "redux-saga/effects";
import { apiDefault } from "../../../lib/api/client";
import { editNotice } from "../../../lib/api/Write";
import { errorHandler } from "../../../lib/utils";
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
  GET_WRITER_NOTICE_LIST_SAGA,
  editNoticeSaga as editNoticeSagaCreater,
  EDIT_NOTICE_SAGA,
  startNoticeDetail
} from "../../action/notice";

function* getNoticeListSaga(
  action: ReturnType<typeof getNoticeListSagaCreater>
) {
  try {
    const res = yield call(
      apiDefault().get,
      `/announcements/types/school?start=${action.payload}`
    );
    yield put(
      getNoticeList({ data: res.data.announcements, size: res.data.size })
    );
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* getCircleNoticeListSaga(
  action: ReturnType<typeof getCircleNoticeListSagaCreater>
) {
  try {
    const res = yield call(
      apiDefault().get,
      `/announcements/types/club?start=${action.payload}`
    );
    yield put(
      getNoticeList({ data: res.data.announcements, size: res.data.size })
    );
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}
function* getNoticeDetailSaga(
  action: ReturnType<typeof getNoticeDetailtSagaCreater>
) {
  try {
    yield put(startNoticeDetail());
    const res = yield call(
      apiDefault().get,
      `/announcements/uuid/${action.payload}`
    );

    yield put(getNoticeDetail(res.data));
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* getWriteNoticeListSaga(
  action: ReturnType<typeof getWriterNoticeListSagaCreater>
) {
  try {
    const res = yield call(
      apiDefault().get,
      `/announcements/writer-uuid/${action.payload.uuid}?start=${action.payload.page}`
    );
    yield put(
      getNoticeList({ data: res.data.announcements, size: res.data.size })
    );
    console.log(res);
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* editNoticeSaga(action: ReturnType<typeof editNoticeSagaCreater>) {
  try {
    const history = yield getContext("history");
    const { content, title, uuid } = action.payload;
    yield call(editNotice, "club", { content, uuid, title });
    toast.dark("게시글을 수정하였습니다.");
    history.push("/management/notice");
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* noticeSaga() {
  yield takeEvery(GET_NOTICE_LIST_SAGA, getNoticeListSaga);
  yield takeEvery(GET_NOTICE_DETAIL_SAGA, getNoticeDetailSaga);
  yield takeEvery(GET_CIRCLE_NOTICE_LIST_SAGA, getCircleNoticeListSaga);
  yield takeEvery(GET_WRITER_NOTICE_LIST_SAGA, getWriteNoticeListSaga);
  yield takeEvery(EDIT_NOTICE_SAGA, editNoticeSaga);
}

export default noticeSaga;
