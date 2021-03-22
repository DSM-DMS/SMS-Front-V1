import { apiDefault } from "../client";
import { ResStudentLoginWithDefault } from "../payloads/Login";

export const postLoginStudent = (id: string, pw: string) => {
  return apiDefault().post<ResStudentLoginWithDefault>("/login/student", {
    student_id: id,
    student_pw: pw
  });
};
