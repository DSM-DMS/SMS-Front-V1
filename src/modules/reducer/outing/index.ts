import {
  OutingAction,
  SET_OUTING_LIST,
  SET_SELECTED_OUTING
} from "../../action/outing";
import { ResHistoryItem } from "../../../lib/api/payloads/Outing";

export interface OutingState {
  selected: ResHistoryItem;
  histories: ResHistoryItem[];
}

const initialState: OutingState = {
  histories: [],
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
        histories: [...state.histories, ...action.payload.histories]
      };
    case SET_SELECTED_OUTING:
      return {
        ...state,
        selected: action.payload.history
      };
    default: {
      return state;
    }
  }
};

export default outingReducer;
