import { toast } from "react-toastify";
import { call, takeEvery } from "redux-saga/effects";
import { writeNotice } from "../../../lib/api/Write";
import { writeAction, writeActionCreater } from "../../action/write";

function* writeNoticeSaga(
  action: ReturnType<typeof writeActionCreater.writeNoticeSaga>
) {
  try {
    const { title, content, target_grade, target_group } = action.payload;
    yield call(
      writeNotice,
      "school",
      { title, content },
      { target_grade, target_group }
    );
    toast.dark("공지 작성에 성공 했습니다");
  } catch (err) {}
}

function* writeSaga() {
  yield takeEvery(writeAction.WRITE_NOTICE_SAGA, writeNoticeSaga);
}

export default writeSaga;
