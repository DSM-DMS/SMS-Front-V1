import { ResSchedule, ResTimetable } from "../../../lib/api/payloads/Main";

export const GET_TIMETABLES_SAGA = "main/GET_TIMETABLE_SAGA" as const;
export const SET_TIMETABLES = "main/SET_TIMETABLE" as const;

export const GET_SCHEDULES_SAGA = "main/GET_SCHEDULES_SAGA" as const;
export const SET_SCHEDULES = "main/FETCH_SCHEDULES" as const;

export const getSchedulesSaga = (year: number, month: number) => ({
  type: GET_SCHEDULES_SAGA,
  payload: { year, month }
});
export const setTimetables = (timetables: ResTimetable[]) => ({
  type: SET_TIMETABLES,
  payload: { timetables }
});
export const getTimetablesSaga = () => ({
  type: GET_TIMETABLES_SAGA
});
export const setSchedules = (schedules: ResSchedule) => ({
  type: SET_SCHEDULES,
  payload: { schedules }
});

export type TimetableAction = ReturnType<
  | typeof getSchedulesSaga
  | typeof setTimetables
  | typeof getTimetablesSaga
  | typeof setSchedules
>;
