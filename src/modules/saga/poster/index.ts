import { call, put, takeEvery } from "redux-saga/effects";
import { apiDefault } from "../../../lib/api/client";
import { posterAction, PosterActionCreater } from "../../action/poster";

function* getWantedInfoListSaga() {
  try {
    const res = yield call(
      apiDefault().get,
      "/recruitments/sorted-by/create-time"
    );

    yield put(PosterActionCreater.getWantedInfoList(res.data.recruitments));
  } catch (err) {}
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

    yield put(
      PosterActionCreater.getWantedInfoDetail({ ...res.data, ...res2.data })
    );
  } catch (err) {}
}

function* getCircleInfoListSaga() {
  try {
    const res = yield call(apiDefault().get, "/clubs/sorted-by/update-time");
    yield put(PosterActionCreater.getCircleInfoList(res.data.clubs));
  } catch (err) {}
}

function* getCircleInfoDetailSaga(
  action: ReturnType<typeof PosterActionCreater.getCircleInfoDetailSaga>
) {
  try {
    const res = yield call(apiDefault().get, `/clubs/uuid/${action.payload}`);
    yield put(PosterActionCreater.getCircleInfoDetail(res.data));
  } catch (err) {}
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
