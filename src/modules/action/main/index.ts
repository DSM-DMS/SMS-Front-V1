import { ResTimetable } from "../../../lib/api/payloads/Main";

export const SET_TIMETABLES = "main/SET_TIMETABLE" as const;
export const SET_TIMETABLES_SAGA = "main/SET_TIMETABLE_SAGA" as const;

export const setTimetables = (timetables: ResTimetable[]) => ({
  type: SET_TIMETABLES,
  payload: { timetables }
});
export const setTimetablesSaga = () => ({
  type: SET_TIMETABLES_SAGA
});

export type TimetableAction = ReturnType<
  typeof setTimetables | typeof setTimetablesSaga
>;
