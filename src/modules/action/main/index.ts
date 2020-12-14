import { ResSchedule, ResTimetable } from "../../../lib/api/payloads/Main";

export const GET_TIMETABLES_SAGA = "main/GET_TIMETABLE_SAGA" as const;
export const SET_TIMETABLES = "main/SET_TIMETABLE" as const;

export const GET_SCHEDULES_SAGA = "main/GET_SCHEDULES_SAGA" as const;
export const SET_SCHEDULES = "main/FETCH_SCHEDULES" as const;

export const SET_SCHEDULER_DATE = "main/SET_SCHEDULER_DATE" as const;

export const SET_TARGET_UUID = "main/SET_TARGET_UUID" as const;

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
export const setSchedules = (schedules: ResSchedule[]) => ({
  type: SET_SCHEDULES,
  payload: { schedules }
});
export const setSchedulerDate = (date: Date) => ({
  type: SET_SCHEDULER_DATE,
  payload: { date }
});
export const setTargetUuid = (scheduleUuid: string) => ({
  type: SET_TARGET_UUID,
  payload: { scheduleUuid }
});

export type TimetableAction = ReturnType<
  | typeof getSchedulesSaga
  | typeof setTimetables
  | typeof getTimetablesSaga
  | typeof setSchedules
  | typeof setSchedulerDate
  | typeof setTargetUuid
>;
