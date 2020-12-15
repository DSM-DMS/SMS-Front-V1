import { AxiosResponse } from "axios";
import { call, put, takeEvery, CallEffect } from "redux-saga/effects";

import { apiDefault, SERVER } from "../../../lib/api/client";
import {
  ResSchedulesWithDefault,
  ResScheduleWithDefault,
  ResTimetable,
  ResTimetableWithDefault
} from "../../../lib/api/payloads/Main";
import {
  getSchedulesSaga,
  setSchedules,
  setTimetables,
  GET_SCHEDULES_SAGA,
  GET_TIMETABLES_SAGA,
  getTimetablesSaga
} from "../../action/main";

function* fetchTimetables(action: ReturnType<typeof getTimetablesSaga>) {
  const { year, month, day } = action.payload;
  const timetableUrl = `${SERVER.hostUrl}${SERVER.version}/time-tables/years/${year}/months/${month}/days/${day}`;

  try {
    const { data }: AxiosResponse<ResTimetableWithDefault> = yield call(
      apiDefault().get,
      timetableUrl
    );

    yield put(setTimetables(data));
  } catch (err) {}
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
