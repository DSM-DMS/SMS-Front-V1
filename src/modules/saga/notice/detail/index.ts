import { call, getContext, put, takeEvery } from "redux-saga/effects";
import { finishLoading, startLoading } from "../../../action/loading";
import * as noticeApi from "../../../../lib/api/notice";
import {
  deleteNotice,
  DELETE_NOTICE,
  editNotice,
  EDIT_NOTICE,
  getNoticeDetail,
  getNoticeDetailSuccess,
  GET_NOTICE_DETAIL
} from "../../../action/notice/detail";
import { AxiosResponse } from "axios";
import { ResBoardDetail } from "../../../../lib/api/payloads/Board";
import { toast } from "react-toastify";

function* getNoticeDetailSaga(action: ReturnType<typeof getNoticeDetail>) {
  yield put(startLoading(GET_NOTICE_DETAIL));
  try {
    const res: AxiosResponse<ResBoardDetail> = yield call(
      noticeApi.getNoticeDetail,
      action.payload
    );
    yield put(getNoticeDetailSuccess(res.data));
  } catch (err) {}
  yield put(finishLoading(GET_NOTICE_DETAIL));
}

function* editNoticeSaga(action: ReturnType<typeof editNotice>) {
  try {
    yield call(noticeApi.editNotice, action.payload);
    toast.success("공지를 수정했습니다");
    const history = yield getContext("history");
    const successUrl = `${
      action.payload.type === "school"
        ? "/admin/notice/mine"
        : "/management/notice"
    }`;
    history.push(successUrl);
  } catch (err) {}
}

function* deleteNoticeSaga(action: ReturnType<typeof deleteNotice>) {
  try {
    const { uuid, type } = action.payload;
    yield call(noticeApi.deleteNotice, uuid);
    toast.success("공지를 삭제했습니다");
    const history = yield getContext("history");
    const successUrl = `${
      type === "school" ? "/admin/notice/mine" : "/management/notice"
    }`;
    history.push(successUrl);
  } catch (err) {}
}

function* noticeDetailSaga() {
  yield takeEvery(GET_NOTICE_DETAIL, getNoticeDetailSaga);
  yield takeEvery(EDIT_NOTICE, editNoticeSaga);
  yield takeEvery(DELETE_NOTICE, deleteNoticeSaga);
}

export default noticeDetailSaga;
