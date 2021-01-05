import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { call, getContext, put, takeEvery } from "redux-saga/effects";

import { apiDefault, BASE_URL } from "../../../lib/api/client";
import {
  ResScheduleWithDefault,
  ResTimetableWithDefault
} from "../../../lib/api/payloads/Main";
import { getAxiosError } from "../../../lib/utils";
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
  const timetableUrl = `/time-tables/years/${year}/months/${month}/days/${day}`;

  try {
    const { data }: AxiosResponse<ResTimetableWithDefault> = yield call(
      apiDefault().get,
      timetableUrl
    );

    yield put(setTimetables(data));
  } catch (err) {
    const history = yield getContext("history");
    const { status } = getAxiosError(err);

    if (status === 403) {
      toast.error("학생 계정이 아닙니다.");
      history.push("/login");
    } else if (status === 404) {
      toast.error("시간표를 불러올 수 없습니다.");
    }
  }
}

function* fetchSchedules(action: ReturnType<typeof getSchedulesSaga>) {
  const { year, month } = action.payload;
  const scheduleUrl = `schedules/years/${year}/months/${month}`;

  try {
    const {
      data: { schedules }
    }: AxiosResponse<ResScheduleWithDefault> = yield call(
      apiDefault().get,
      scheduleUrl
    );

    schedules.sort((a, b) =>
      a.start_date < b.start_date ? -1 : a.end_date < b.end_date ? -1 : 1
    );

    yield put(setSchedules(schedules));
  } catch (err) {
    const history = yield getContext("history");
    const { status } = getAxiosError(err);

    if (status === 403) {
      toast.error("학생 계정이 아닙니다.");
      history.push("/login");
    } else if (status === 404) {
      toast.error("일정을 불러올 수 없습니다.");
    }
  }
}

function* mainSaga() {
  yield takeEvery(GET_TIMETABLES_SAGA, fetchTimetables);

  yield takeEvery(GET_SCHEDULES_SAGA, fetchSchedules);
}

export default mainSaga;
