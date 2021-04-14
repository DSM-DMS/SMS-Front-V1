import { ResDefault } from "../";

export const UNABLE_FORM = "아이디 및 비밀번호는 4자 이상 16자 이하여야 합니다." as const;
export const PASSWORD_NOT_MATCHED = "아이디와 올바르지 않은 계정의 비밀번호입니다." as const;
export const CAN_NOT_FOUND_ACCOUNT = "존재하지 않는 학생 계정의 아이디입니다.." as const;

export interface ResStudentLogin {
  access_token: string;
  student_uuid: string;
}

export interface ResStudentInfo {
  grade: number;
  group: number;
  student_number: number;
  name: string;
  phone_number: string;
  profile_uri: string;
  parent_status: string;
}

export interface ResStudentLoginWithDefault
  extends ResStudentLogin,
    ResDefault {}
export interface ResStudentInfoWithDefault extends ResStudentInfo, ResDefault {}
