import { BoardEdit, BoardListItem } from "../../../lib/api/payloads/Board";
import { NoticeDetail } from "../../type/notice";

export const GET_NOTICE_LIST = "notice/GET_NOTICE_LIST" as const;
export const GET_NOTICE_LIST_SAGA = "notice/GET_NOTICE_LIST_SAGA" as const;

export const GET_NOTICE_DETAIL = "notice/GET_NOTICE_DETAIL" as const;
export const GET_NOTICE_DETAIL_SAGA = "notice/GET_NOTICE_DETAIL_SAGA" as const;

export const GET_CIRCLE_NOTICE_LIST_SAGA = "notice/GET_CIRCLE_NOTICE_LIST_SAGA" as const;
export const GET_CIRCLE_NOTICE_DETAIL_SAGA = "notice/GET_CIRCLE_NOTICE_DETAIL_SAGA" as const;

export const GET_WRITER_NOTICE_LIST_SAGA = "notice/GET_WRITER_NOTICE_LIST_SAGA" as const;

export const EDIT_NOTICE_SAGA = "notice/EDIT_NOTICE_SAGA" as const;
export const RESET_NOTICE_DETAIL = "notice/RESET_NOTICE_DETAIL" as const;
export const START_NOTICE_DETAIL = "notice/START_NOTICE_DETAIL" as const;

export const startNoticeDetail = () => ({
  type: START_NOTICE_DETAIL
});

export const resetNoticeDetail = () => ({
  type: RESET_NOTICE_DETAIL
});

export const editNoticeSaga = (payload: BoardEdit) => ({
  type: EDIT_NOTICE_SAGA,
  payload
});

export const getNoticeList = (payload: BoardListItem[]) => ({
  type: GET_NOTICE_LIST,
  payload
});
export const getNoticeListSaga = (payload: number) => ({
  type: GET_NOTICE_LIST_SAGA,
  payload
});

export const getNoticeDetail = (payload: NoticeDetail) => ({
  type: GET_NOTICE_DETAIL,
  payload
});
export const getNoticeDetailSaga = (payload: string) => ({
  type: GET_NOTICE_DETAIL_SAGA,
  payload
});

export const getCircleNoticeDetailSaga = (payload: string) => ({
  type: GET_CIRCLE_NOTICE_DETAIL_SAGA,
  payload
});
export const getCircleNoticeListSaga = (payload: number) => ({
  type: GET_CIRCLE_NOTICE_LIST_SAGA,
  payload
});

export const getWriterNoticeListSaga = (payload: string) => ({
  type: GET_WRITER_NOTICE_LIST_SAGA,
  payload
});

export type NoticeAction = ReturnType<
  | typeof getNoticeList
  | typeof getNoticeListSaga
  | typeof getNoticeDetail
  | typeof getNoticeDetailSaga
  | typeof getCircleNoticeDetailSaga
  | typeof getCircleNoticeListSaga
  | typeof getWriterNoticeListSaga
  | typeof resetNoticeDetail
  | typeof startNoticeDetail
>;
