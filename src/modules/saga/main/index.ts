import { AxiosResponse } from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";

import { apiDefault, SERVER } from "../../../lib/api/client";
import {
  ResScheduleWithDefault,
  ResTimetable,
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
    const days: AxiosResponse<ResTimetableWithDefault>[] = yield all([
      call(apiDefault().get, `${timetableUrl}/1`),
      call(apiDefault().get, `${timetableUrl}/2`),
      call(apiDefault().get, `${timetableUrl}/3`),
      call(apiDefault().get, `${timetableUrl}/4`),
      call(apiDefault().get, `${timetableUrl}/5`)
    ]);
    const forms: ResTimetable[] = days.map(({ data }) => ({
      time1: data.time1,
      time2: data.time2,
      time3: data.time3,
      time4: data.time4,
      time5: data.time5,
      time6: data.time6,
      time7: data.time7
    }));

    yield put(setTimetables(forms));
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
