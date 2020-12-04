import { ResponseDefault } from "../";

export interface ResponseLogin extends ResponseDefault {
  access_token: string;
  student_uuid: string;
}

export const UNABLE_FORM = "아이디는 4자 이상 16자 이하여야 합니다." as const;
export const UNAUTHORIZED = "존재하지 않는 학생 계정의 아이디입니다." as const;
export const PASSWORD_NOT_MATCHED = "아이디와 올바르지 않은 학생 계정의 비밀번호입니다." as const;
