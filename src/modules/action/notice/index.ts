import { BoardObj } from "../../../components/default/Board/Board";
import { NoticeDetail } from "../../type/notice";

export const GET_NOTICE_LIST = "notice/GET_NOTICE_LIST" as const;
export const GET_NOTICE_LIST_SAGA = "notice/GET_NOTICE_LIST_SAGA" as const;

export const GET_NOTICE_DETAIL = "notice/GET_NOTICE_DETAIL" as const;
export const GET_NOTICE_DETAIL_SAGA = "notice/GET_NOTICE_DETAIL_SAGA" as const;

export const getNoticeList = (payload: BoardObj[]) => ({
  type: GET_NOTICE_LIST,
  payload
});
export const getNoticeListSaga = () => ({
  type: GET_NOTICE_LIST_SAGA
});
export const getNoticeDetail = (payload: NoticeDetail) => ({
  type: GET_NOTICE_DETAIL,
  payload
});
export const getNoticeDetailSaga = () => ({
  type: GET_NOTICE_DETAIL_SAGA
});

export type NoticeAction = ReturnType<
  | typeof getNoticeList
  | typeof getNoticeListSaga
  | typeof getNoticeDetail
  | typeof getNoticeDetailSaga
>;
