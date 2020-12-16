import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import { apiDefault } from "../../../lib/api/client";
import {
  ResStudentInfo,
  ResStudentInfoWithDefault,
  ResTeacherInfo,
  ResTeacherInfoWithDefault
} from "../../../lib/api/payloads/Login";
import {
  getStudentInfoSaga,
  getTeacherInfoSaga,
  GET_STUDENT_INFO_SAGA,
  GET_TEACHER_INFO_SAGA,
  setInit,
  STUDENT,
  TEACHER,
  UserType
} from "../../action/header";

const setLocalStorage = (
  type: UserType,
  form: ResStudentInfo | ResTeacherInfo
) => {
  localStorage.setItem("sms-type", type);
  localStorage.setItem("sms-user", JSON.stringify(form));
};

function* setStudentInfoOnStorageSaga(
  action: ReturnType<typeof getStudentInfoSaga>
) {
  const {
    data: { grade, group, name, phone_number, student_number, profile_uri }
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
    profile_uri
  };

  setLocalStorage(STUDENT, studentForm);
  yield put(setInit(STUDENT, studentForm));
}

function* setTeacherInfoOnStorageSaga(
  action: ReturnType<typeof getTeacherInfoSaga>
) {
  const {
    data: { grade, group, name, phone_number }
  }: AxiosResponse<ResTeacherInfoWithDefault> = yield call(
    apiDefault().get,
    `/teachers/uuid/${action.payload.teacherUuid}`
  );

  const teacherForm: ResTeacherInfo = {
    grade,
    group,
    name,
    phone_number
  };

  setLocalStorage(TEACHER, teacherForm);
  yield put(setInit(TEACHER, teacherForm));
}

function* headerSaga() {
  yield takeEvery(GET_STUDENT_INFO_SAGA, setStudentInfoOnStorageSaga);

  yield takeEvery(GET_TEACHER_INFO_SAGA, setTeacherInfoOnStorageSaga);
}

export default headerSaga;
