import {
  OutingAction,
  SET_OUTING_LIST,
  SET_SELECTED_OUTING
} from "../../action/outing";
import { ResHistory, ResHistoryItem } from "../../../lib/api/payloads/Outing";

export interface OutingState extends ResHistory {
  selected: ResHistoryItem;
}

const initialState: OutingState = {
  outings: [],
  selected: null
};

const outingReducer = (
  state: OutingState = initialState,
  action: OutingAction
): OutingState => {
  switch (action.type) {
    case SET_OUTING_LIST:
      return {
        ...state,
        outings: action.payload.outings
      };
    case SET_SELECTED_OUTING:
      return {
        ...state,
        selected: action.payload.outing
      };

    default: {
      return state;
    }
  }
};

export default outingReducer;
