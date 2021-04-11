import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";

import { apiDefault } from "../../../lib/api/client";
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
  getTimetablesSaga,
  startTimetableLoading,
  endTimetableLoading,
  startScheduleLoading,
  endScheduleLoading,
  getMainSaga,
  GET_MAIN_SAGA
} from "../../action/main";

type TimetableResponse = AxiosResponse<ResTimetableWithDefault>;
type ScheduleResponse = AxiosResponse<ResScheduleWithDefault>;

function* scheduleHandler({ schedules }: ResScheduleWithDefault) {
  schedules.sort((a, b) =>
    a.start_date < b.start_date ? -1 : a.end_date < b.end_date ? -1 : 1
  );

  yield put(setSchedules(schedules));
}

function* timetableHandler(timetableData: ResTimetableWithDefault) {
  yield put(setTimetables(timetableData));
}

function* fetchSchedules(action: ReturnType<typeof getSchedulesSaga>) {
  const { year, month } = action.payload;
  const scheduleUrl = `schedules/years/${year}/months/${month}`;

  yield put(startScheduleLoading());
  try {
    const { data: scheduleData }: ScheduleResponse = yield call(
      apiDefault().get,
      scheduleUrl
    );

    yield scheduleHandler(scheduleData);
  } catch (err) {
    const { status } = getAxiosError(err);

    if (status === 404) {
      toast.error("일정을 불러올 수 없습니다.");
    }
  }
  yield put(endScheduleLoading());
}

function* fetchTimetables(action: ReturnType<typeof getTimetablesSaga>) {
  const { year, month, day } = action.payload;
  const timetableUrl = `/time-tables/years/${year}/months/${month}/days/${day}`;

  yield put(startTimetableLoading());
  try {
    const { data: timetableData }: TimetableResponse = yield call(
      apiDefault().get,
      timetableUrl
    );

    yield timetableHandler(timetableData);
  } catch (err) {}
  yield put(endTimetableLoading());
}

function* fetchMainSaga(action: ReturnType<typeof getMainSaga>) {
  const { year, month, day } = action.payload;
  const scheduleUrl = `/schedules/years/${year}/months/${month}`;
  const timetableUrl = `/time-tables/years/${year}/months/${month}/days/${day}`;

  yield put(startScheduleLoading());
  yield put(endScheduleLoading());

  try {
    const { data: scheduleData }: ScheduleResponse = yield call(
      apiDefault().get,
      scheduleUrl
    );

    yield scheduleHandler(scheduleData);

    const { data: timetableData }: TimetableResponse = yield call(
      apiDefault().get,
      timetableUrl
    );

    yield timetableHandler(timetableData);
  } catch (err) {
    const { status } = getAxiosError(err);

    if (status === 404) {
      toast.error("일정을 불러올 수 없습니다.");
    }
  }

  yield put(endScheduleLoading());
  yield put(endTimetableLoading());
}

function* mainSaga() {
  yield takeEvery(GET_TIMETABLES_SAGA, fetchTimetables);

  yield takeEvery(GET_SCHEDULES_SAGA, fetchSchedules);

  yield takeEvery(GET_MAIN_SAGA, fetchMainSaga);
}

export default mainSaga;
