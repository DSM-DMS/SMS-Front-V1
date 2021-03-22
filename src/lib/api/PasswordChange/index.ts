import { apiDefault } from "../client";

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
