import axios from "axios";

import { apiDefault, BASE_URL, VERSION } from "../client";
import { ResponseLogin } from "../response";

export const postLoginStudent = (id: string, pw: string) => {
  return axios.post<ResponseLogin>(`${BASE_URL}${VERSION}/login/student`, {
    student_id: id,
    student_pw: pw
  });
};
