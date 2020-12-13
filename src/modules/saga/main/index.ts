import { AxiosResponse } from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";

import { apiDefault, SERVER } from "../../../lib/api/client";
import {
  ResScheduleWithDefault,
  ResTimetableWithDefault
} from "../../../lib/api/payloads/Main";
import {
  getSchedulesSaga,
  setSchedules,
  setTimetables,
  GET_SCHEDULES_SAGA,
  GET_TIMETABLES_SAGA
} from "../../action/main";

function* fetchTimetables() {
  const timetableUrl = `${SERVER.hostUrl}${SERVER.version}/time-tables/week-numbers`;

  try {
    const days: ResTimetableWithDefault[] = yield all([
      call(apiDefault().get, `${timetableUrl}/1`),
      call(apiDefault().get, `${timetableUrl}/2`),
      call(apiDefault().get, `${timetableUrl}/3`),
      call(apiDefault().get, `${timetableUrl}/4`),
      call(apiDefault().get, `${timetableUrl}/5`)
    ]);

    yield put(setTimetables(days));
  } catch (err) {
    const status = err?.response?.status;

    if (status === 403) {
      yield put(
        setTimetables([
          {
            time1: "학생",
            time2: "계정",
            time3: "으로",
            time4: "로그인",
            time5: "해주시길",
            time6: "바랍니다",
            time7: "."
          }
        ])
      );
    } else if (status === 404) {
      yield put(
        setTimetables([
          {
            time1: "X",
            time2: "X",
            time3: "X",
            time4: "X",
            time5: "X",
            time6: "X",
            time7: "X"
          }
        ])
      );
    }
  }
}

function* fetchSchedules(action: ReturnType<typeof getSchedulesSaga>) {
  const { year, month } = action.payload;

  try {
    const {
      data: { schedules }
    }: AxiosResponse<ResScheduleWithDefault> = yield call(
      apiDefault().get,
      `schedules/years/${year}/months/${month}`
    );

    yield put(setSchedules(schedules));
  } catch (err) {}
}

function* mainSaga() {
  yield takeEvery(GET_TIMETABLES_SAGA, fetchTimetables);

  yield takeEvery(GET_SCHEDULES_SAGA, fetchSchedules);
}

export default mainSaga;
