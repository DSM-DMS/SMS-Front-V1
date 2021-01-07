import LoadingAction, {
  START_LOADING,
  FINISH_LOADING
} from "../../action/loading";
import { GET_NOTICE_DETAIL } from "../../action/notice/detail";
import { GET_NOTICE_LIST } from "../../action/notice/list";

interface LoadingReducerState {
  [GET_NOTICE_LIST]: boolean;
  [GET_NOTICE_DETAIL]: boolean;
}

const initialState: LoadingReducerState = {
  [GET_NOTICE_LIST]: false,
  [GET_NOTICE_DETAIL]: false
};

const loadingReducer = (
  state: LoadingReducerState = initialState,
  action: LoadingAction
): LoadingReducerState => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.payload]: true
      };
    case FINISH_LOADING:
      return {
        ...state,
        [action.payload]: false
      };
    default:
      return state;
  }
};

export default loadingReducer;
