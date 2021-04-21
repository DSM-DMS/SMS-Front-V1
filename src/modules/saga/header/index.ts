import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";

import { apiDefault } from "../../../lib/api/client";
import {
  ResStudentInfo,
  ResStudentInfoWithDefault
} from "../../../lib/api/payloads/Login";
import {
  getStudentInfoSaga,
  GET_STUDENT_INFO_SAGA,
  setInit
} from "../../action/header";

function* setStudentInfoOnStorageSaga(
  action: ReturnType<typeof getStudentInfoSaga>
) {
  const {
    data: {
      grade,
      group,
      name,
      phone_number,
      student_number,
      profile_uri,
      parent_status
    }
  }: AxiosResponse<ResStudentInfoWithDefault> = yield call(
    apiDefault().get,
    `students/uuid/${action.payload.studentUuid}`
  );

  const studentForm: ResStudentInfo = {
    grade,
    group,
    student_number,
    name,
    phone_number,
    profile_uri,
    parent_status
  };

  if (parent_status.toLowerCase() === "CONNECTED") {
    toast.info("학부모 계정과 연결되었습니다");
  } else if (parent_status.toLowerCase() === "UN_CONNECTED") {
    toast.info("학부모 계정과 연결되었습니다");
  }

  localStorage.setItem("sms-user", JSON.stringify(studentForm));
  yield put(setInit(studentForm));
}

function* headerSaga() {
  yield takeEvery(GET_STUDENT_INFO_SAGA, setStudentInfoOnStorageSaga);
}

export default headerSaga;
