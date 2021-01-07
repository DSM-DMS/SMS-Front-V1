import { AxiosError } from "axios";
import { call, getContext, put, takeEvery } from "redux-saga/effects";
import { apiDefault, getStudentDatas } from "../../../lib/api/client";
import { errorHandler } from "../../../lib/utils";
import { posterAction, PosterActionCreater } from "../../action/poster";

function* getWantedInfoListSaga() {
  try {
    const res = yield call(
      apiDefault().get,
      "/recruitments/sorted-by/create-time"
    );

    yield put(PosterActionCreater.getWantedInfoList(res.data.recruitments));
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* getWantedInfoDetailSaga(
  action: ReturnType<typeof PosterActionCreater.getWantedInfoDetailSaga>
) {
  try {
    const res = yield call(
      apiDefault().get,
      `/recruitments/uuid/${action.payload}`
    );

    const clubUuid = res.data.club_uuid;

    const res2 = yield call(apiDefault().get, `clubs/uuid/${clubUuid}`);
    const members = yield call(getStudentDatas, res2.data.member_uuids);
    yield put(
      PosterActionCreater.getWantedInfoDetail({
        ...res.data,
        ...res2.data,
        members: members.map(memberData => memberData.data)
      })
    );
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* getCircleInfoListSaga() {
  try {
    const res = yield call(apiDefault().get, "/clubs/sorted-by/update-time");
    yield put(PosterActionCreater.getCircleInfoList(res.data.clubs));
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* getCircleInfoDetailSaga(
  action: ReturnType<typeof PosterActionCreater.getCircleInfoDetailSaga>
) {
  try {
    const res = yield call(apiDefault().get, `/clubs/uuid/${action.payload}`);

    const members = yield call(getStudentDatas, res.data.member_uuids);
    yield put(
      PosterActionCreater.getCircleInfoDetail({
        ...res.data,
        members: members.map(memberData => memberData.data)
      })
    );
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* posterSaga() {
  yield takeEvery(
    posterAction.GET_WANTED_INFO_LIST_SAGA,
    getWantedInfoListSaga
  );

  yield takeEvery(
    posterAction.GET_WANTED_INFO_DETAIL_SAGA,
    getWantedInfoDetailSaga
  );

  yield takeEvery(
    posterAction.GET_CIRCLE_INFO_LIST_SAGA,
    getCircleInfoListSaga
  );

  yield takeEvery(
    posterAction.GET_CIRCLE_INFO_DETAIL_SAGA,
    getCircleInfoDetailSaga
  );
}

export default posterSaga;
