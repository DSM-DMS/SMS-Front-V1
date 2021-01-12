import { ResBoardDetail } from "../../../../lib/api/payloads/Board";
import NoticeDetailAction, {
  GET_NOTICE_DETAIL_FAIL,
  GET_NOTICE_DETAIL_SUCCESS
} from "../../../action/notice/detail";

interface NoticeDetailReducerState extends ResBoardDetail {}

const initialState: NoticeDetailReducerState = {
  date: 0,
  target_grade: 0,
  target_group: 0,
  content: "",
  next_announcement_uuid: "",
  next_title: "",
  previous_announcement_uuid: "",
  previous_title: "",
  title: "",
  writer_name: ""
};

const noticeDetailReducer = (
  state: NoticeDetailReducerState = initialState,
  action: NoticeDetailAction
) => {
  switch (action.type) {
    case GET_NOTICE_DETAIL_SUCCESS: {
      return action.payload;
    }
    case GET_NOTICE_DETAIL_FAIL: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default noticeDetailReducer;
