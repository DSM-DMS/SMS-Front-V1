import { CheckNoticeRes } from "../../../lib/api/payloads/checkNotice";

export const GET_CHECK_NOTICE = "checkNotice/GET_CHECK_NOTICE" as const;
export const GET_CHECK_NOTICE_SUCCESS = "checkNotice/GET_CHECK_NOTICE_SUCCESS" as const;

export const getCheckNotice = (studentUuid: string) => ({
  type: GET_CHECK_NOTICE,
  payload: studentUuid
});
export const getCheckNoticeSuccess = (payload: CheckNoticeRes) => ({
  type: GET_CHECK_NOTICE_SUCCESS,
  payload
});

type CheckNoticeAction = ReturnType<typeof getCheckNoticeSuccess>;

export default CheckNoticeAction;
