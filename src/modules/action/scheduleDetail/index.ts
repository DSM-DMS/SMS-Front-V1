export interface Schedule {
  schedule: string;
  startDate: string;
  endDate: string;
}

export const SET_SCHEDULE_DETAIL = 'SET_SCHEDULE_DETAIL' as const;

export const setScheduleDetail = (schedules: Schedule[]) => ({
  type: SET_SCHEDULE_DETAIL,
  payload: { schedules },
});

export type scheduleDetailAction = ReturnType<typeof setScheduleDetail>;
