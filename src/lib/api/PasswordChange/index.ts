import axios from "axios";

import { apiDefault, SERVER } from "../client";

const BASE_URL = SERVER.hostUrl + SERVER.version;

export const putStudentPassword = (
  studentUuid: string,
  currentPw: string,
  revisionPw: string
) => {
  return apiDefault().put(`/students/uuid/${studentUuid}/password`, {
    current_pw: currentPw,
    revision_pw: revisionPw
  });
};

export const putTeacherPassword = (
  teacherUuid: string,
  currentPw: string,
  revisionPw: string
) => {
  return apiDefault().put(`/teachers/uuid/${teacherUuid}/password`, {
    current_pw: currentPw,
    revision_pw: revisionPw
  });
};
