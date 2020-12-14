import { ResDefault } from "../index";

export interface ReqCreateSchedule {
  schedulerDate: Date;
  start: string;
  end: string;
  detail: string;
}

export interface ReqEditSchedule {
  scheduleUuid: string;
  startDate: number;
  endDate: number;
  detail: string;
}

export interface ResTimetable {
  time1: string;
  time2: string;
  time3: string;
  time4: string;
  time5: string;
  time6: string;
  time7: string;
}
export interface ResSchedule {
  schedule_uuid: string;
  start_date: number;
  end_date: number;
  detail: string;
}
export interface ResSchedules {
  schedule_uuid: string;
}

export interface ResTimetableWithDefault extends ResTimetable, ResDefault {}
export interface ResScheduleWithDefault extends ResDefault {
  schedules: ResSchedule[];
}
export interface ResSchedulesWithDefault extends ResSchedules, ResDefault {}
