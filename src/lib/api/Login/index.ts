import { apiDefault } from "../client";
import {
  ResStudentLoginWithDefault,
  ResStudentInfoWithDefault
} from "../payloads/Login";

export const postLoginStudent = (id: string, pw: string) => {
  return apiDefault().post<ResStudentLoginWithDefault>("/login/student", {
    student_id: id,
    student_pw: pw
  });
};

export const getStudentInfo = (studentUuid: string) => {
  return apiDefault().get<ResStudentInfoWithDefault>(
    `/students/uuid/${studentUuid}`
  );
};
