import { BoardWrite } from "../../../lib/api/payloads/Board";

const WRITE_NOTICE_SAGA = "write/WRITE_NOTICE_SAGA" as const;
const WRITE_CIRCLE_NOTICE_SAGA = "write/WRITE_CIRCLE_NOTICE_SAGA" as const;

const writeNoticeSaga = (payload: BoardWrite) => ({
  type: WRITE_NOTICE_SAGA,
  payload
});

const writeCircleNoticeSaga = (payload: BoardWrite) => ({
  type: WRITE_CIRCLE_NOTICE_SAGA,
  payload
});

type WriteAction = ReturnType<
  typeof writeNoticeSaga | typeof writeCircleNoticeSaga
>;

export const writeAction = {
  WRITE_NOTICE_SAGA,
  WRITE_CIRCLE_NOTICE_SAGA
};

export const writeActionCreater = {
  writeNoticeSaga,
  writeCircleNoticeSaga
};

export default WriteAction;
