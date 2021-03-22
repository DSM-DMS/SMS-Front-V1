import { put, takeEvery } from "redux-saga/effects";
import {
  getCheckNotice,
  getCheckNoticeSuccess,
  GET_CHECK_NOTICE
} from "../../action/checkNotice";
import * as checkNoticeApi from "../../../lib/api/checkNotice";

function* getCheckNoticeSaga(action: ReturnType<typeof getCheckNotice>) {
  try {
    const res = yield checkNoticeApi.reqCheckNotce(action.payload);
    yield put(getCheckNoticeSuccess(res.data));
  } catch (err) {}
}

function* checkNoticeSaga() {
  yield takeEvery(GET_CHECK_NOTICE, getCheckNoticeSaga);
}

export default checkNoticeSaga;
