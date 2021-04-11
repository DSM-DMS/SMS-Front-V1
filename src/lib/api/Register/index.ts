import { AxiosResponse } from "axios";
import { apiDefault } from "../client";
import { CheckCodeRes, RegisterReq } from "../payloads/Register";

export const checkCode = (
  code: string
): Promise<AxiosResponse<CheckCodeRes>> => {
  return apiDefault().get<CheckCodeRes>(`/students/auth-code/${code}`);
};

export const makeAccount = (data: RegisterReq): Promise<AxiosResponse> => {
  const { code, id, password } = data;
  return apiDefault().post("/students/with-code", {
    auth_code: Number(code),
    student_id: id,
    student_pw: password
  });
};
