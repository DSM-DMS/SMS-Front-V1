import { ResSchedule, ResTimetable } from "../../../lib/api/payloads/Main";
import {
  TimetableAction,
  SET_TIMETABLES,
  SET_SCHEDULES,
  SET_SCHEDULER_DATE,
  SET_TARGET_UUID
} from "../../action/main";

export interface TimetableState {
  timetable: ResTimetable;
  schedules: ResSchedule[];
  schedulerDate: Date;
  targetUuid: string;
}

const initialState: TimetableState = {
  timetable: {
    time1: "-",
    time2: "-",
    time3: "-",
    time4: "-",
    time5: "-",
    time6: "-",
    time7: "-"
  },
  schedules: [],
  schedulerDate: new Date(),
  targetUuid: ""
};

const ManagementInfoReduce = (
  state: TimetableState = initialState,
  action: TimetableAction
): TimetableState => {
  switch (action.type) {
    case SET_TIMETABLES:
      return {
        ...state,
        timetable: action.payload.timetable
      };
    case SET_SCHEDULES:
      return {
        ...state,
        schedules: action.payload.schedules
      };
    case SET_SCHEDULER_DATE:
      return {
        ...state,
        schedulerDate: action.payload.date
      };
    case SET_TARGET_UUID:
      return {
        ...state,
        targetUuid: action.payload.scheduleUuid
      };
    default:
      return state;
  }
};

export default ManagementInfoReduce;
