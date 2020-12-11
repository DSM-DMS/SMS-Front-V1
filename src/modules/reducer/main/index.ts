import { ResTimetable } from "../../../lib/api/payloads/Main";
import { SET_TIMETABLES, TimetableAction } from "../../action/main";

export interface TimetableState {
  timetables: ResTimetable[];
}

const initialState: TimetableState = {
  timetables: [
    {
      time1: "...",
      time2: "...",
      time3: "...",
      time4: "...",
      time5: "...",
      time6: "...",
      time7: "..."
    }
  ]
};

const ManagementInfoReduce = (
  state: TimetableState = initialState,
  action: TimetableAction
): TimetableState => {
  switch (action.type) {
    case SET_TIMETABLES:
      return {
        ...state,
        timetables: action.payload.timetables
      };
    default:
      return state;
  }
};

export default ManagementInfoReduce;
