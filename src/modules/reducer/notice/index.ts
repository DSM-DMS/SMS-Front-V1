import { BoardObj } from "../../../components/default/Board/Board";
import { BoardListItem } from "../../../lib/api/payloads/Board";
import {
  NoticeAction,
  GET_NOTICE_LIST,
  GET_NOTICE_DETAIL,
  RESET_NOTICE_DETAIL,
  START_NOTICE_DETAIL
} from "../../action/notice";
import { NoticeDetail } from "../../type/notice";

interface LoadingNoticeDetail extends NoticeDetail {
  loading?: boolean;
}

interface BoardState {
  list: BoardListItem[];
  detail: LoadingNoticeDetail;
}

const initialState: BoardState = {
  list: [],
  detail: {
    content: "",
    date: 0,
    next_announcement_uuid: "",
    next_title: "",
    previous_announcement_uuid: "",
    previous_title: "",
    title: "",
    writer_name: "",
    loading: false
  }
};

const noticeReducer = (
  state: BoardState = initialState,
  action: NoticeAction
): BoardState => {
  switch (action.type) {
    case GET_NOTICE_LIST: {
      return {
        ...state,
        list: action.payload
      };
    }
    case GET_NOTICE_DETAIL: {
      return {
        ...state,
        detail: {
          ...action.payload,
          loading: false
        }
      };
    }
    case START_NOTICE_DETAIL: {
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: true
        }
      };
    }

    case RESET_NOTICE_DETAIL: {
      return {
        ...state,
        detail: { ...initialState.detail }
      };
    }
    default: {
      return state;
    }
  }
};

export default noticeReducer;
