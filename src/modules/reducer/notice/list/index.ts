import { ResBoardList } from "../../../../lib/api/payloads/Board";
import NoticeListAction, {
  GET_NOTICE_LIST_SUCCESS,
  GET_NOTICE_LIST_FAIL
} from "../../../action/notice/list";

interface NoticeListReducerStore extends ResBoardList {}

const initialState: NoticeListReducerStore = {
  announcements: [],
  size: 0
};

const noticeListReducer = (
  state: NoticeListReducerStore = initialState,
  action: NoticeListAction
): NoticeListReducerStore => {
  switch (action.type) {
    case GET_NOTICE_LIST_SUCCESS: {
      return action.payload;
    }
    case GET_NOTICE_LIST_FAIL: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default noticeListReducer;
