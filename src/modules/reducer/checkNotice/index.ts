import { CheckNoticeRes } from "../../../lib/api/payloads/checkNotice";
import CheckNoticeAction, {
  GET_CHECK_NOTICE_SUCCESS
} from "../../action/checkNotice";

interface CheckNoticeReducerState extends CheckNoticeRes {}

const initialState: CheckNoticeReducerState = {
  club: 0,
  school: 0
};

const checkNoticeReducer = (
  state: CheckNoticeReducerState = initialState,
  action: CheckNoticeAction
): CheckNoticeReducerState => {
  switch (action.type) {
    case GET_CHECK_NOTICE_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default checkNoticeReducer;
