import axios from "axios";

import { apiDefault, BASE_URL, VERSION } from "../client";
import { ResponseLogin } from "../payloads/Login";

export const postLoginStudent = (id: string, pw: string) => {
  return axios.post<ResponseLogin>(`${BASE_URL}${VERSION}/login/student`, {
    student_id: id,
    student_pw: pw
  });
};

export const getStudentAccount = (studentUuid: string) => {
  return apiDefault().get(`/students/uuid/${studentUuid}`);
};
