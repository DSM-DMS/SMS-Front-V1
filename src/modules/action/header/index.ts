import {
  ResStudentInfo,
  ResTeacherInfo
} from "../../../lib/api/payloads/Login";

export const SET_INIT = "header/SET_INIT" as const;
export const SET_TYPE = "header/SET_TYPE" as const;
export const SET_GRADE = "header/SET_GRADE" as const;
export const SET_GROUP = "header/SET_GROUP" as const;
export const SET_NUMBER = "header/SET_NUMBER" as const;
export const SET_NAME = "header/SET_NAME" as const;
export const SET_PHONE = "header/SET_PHONE" as const;
export const SET_PROFILE_URI = "header/SET_PROFILE_URI" as const;

export const STUDENT = "student" as const;
export const TEACHER = "teacher" as const;

export const setInit = (
  type: UserType | "",
  user: ResStudentInfo | ResTeacherInfo
) => ({
  type: SET_INIT,
  payload: { type, user }
});
export const setType = (type: UserType) => ({
  type: SET_TYPE,
  payload: { type }
});
export const setGrade = (grade: number) => ({
  type: SET_GRADE,
  payload: { grade }
});
export const setGroup = (group: number) => ({
  type: SET_GROUP,
  payload: { group }
});
export const setNumber = (number: number) => ({
  type: SET_NUMBER,
  payload: { number }
});
export const setName = (name: string) => ({
  type: SET_NAME,
  payload: { name }
});
export const setPhone = (phone: string) => ({
  type: SET_PHONE,
  payload: { phone }
});
export const setProfileUri = (profileUri: string) => ({
  type: SET_PROFILE_URI,
  payload: { profileUri }
});

export type UserType = typeof STUDENT | typeof TEACHER;

export type HeaderAction =
  | ReturnType<typeof setType>
  | ReturnType<typeof setGrade>
  | ReturnType<typeof setGroup>
  | ReturnType<typeof setName>
  | ReturnType<typeof setNumber>
  | ReturnType<typeof setPhone>
  | ReturnType<typeof setProfileUri>
  | ReturnType<typeof setInit>;
