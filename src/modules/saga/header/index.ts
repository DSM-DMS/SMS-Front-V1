import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import { apiDefault } from "../../../lib/api/client";
import {
  ResStudentInfo,
  ResStudentInfoWithDefault
} from "../../../lib/api/payloads/Login";
import {
  getStudentInfoSaga,
  GET_STUDENT_INFO_SAGA,
  setInit,
  STUDENT,
  UserType
} from "../../action/header";

const setLocalStorage = (type: UserType, form: ResStudentInfo) => {
  console.log(form);
  localStorage.setItem("sms-type", type);
  localStorage.setItem("sms-user", JSON.stringify(form));
};

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
  const clubUuid = localStorage.getItem("club_uuid");

  setLocalStorage(STUDENT, studentForm);
  yield put(setInit(STUDENT, studentForm, clubUuid));
}

function* headerSaga() {
  yield takeEvery(GET_STUDENT_INFO_SAGA, setStudentInfoOnStorageSaga);
}

export default headerSaga;
