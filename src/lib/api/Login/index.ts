import { apiDefault, apiHeaderDefault } from "../client";
import {
  ResStudentLoginWithDefault,
  ResStudentInfoWithDefault,
  ResTeacherLoginWithDefault,
  ResTeacherInfoWithDefault
} from "../payloads/Login";

export const postLoginStudent = (id: string, pw: string) => {
  return apiHeaderDefault().post<ResStudentLoginWithDefault>("/login/student", {
    student_id: id,
    student_pw: pw
  });
};

export const getStudentInfo = (studentUuid: string) => {
  return apiDefault().get<ResStudentInfoWithDefault>(
    `/students/uuid/${studentUuid}`
  );
};

export const postLoginTeacher = (id: string, pw: string) => {
  return apiHeaderDefault().post<ResTeacherLoginWithDefault>("/login/teacher", {
    teacher_id: id,
    teacher_pw: pw
  });
};

export const getTeacherInfo = (teacherUuid: string) => {
  return apiDefault().get<ResTeacherInfoWithDefault>(
    `/teachers/uuid/${teacherUuid}`
  );
};
