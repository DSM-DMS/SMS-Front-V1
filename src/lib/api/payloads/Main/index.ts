import { ResDefault } from "../index";

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

export interface ResTimetableWithDefault extends ResTimetable, ResDefault {}
export interface ResScheduleWithDefault extends ResDefault {
  schedules: ResSchedule[];
}
