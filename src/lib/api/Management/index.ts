import { apiDefault } from "../client";
import { ResDefault } from "../payloads";
import {
  ReqClubInfo,
  ResClubInfoWithDefault,
  ResClubUuidFromLeaderWithDefault,
  ResStudentsWithDefault,
  ResStudentUuidsWithDefault
} from "../payloads/Management";

export const getClubUuidFromLeader = (studentUuid: string) => {
  return apiDefault().get<ResClubUuidFromLeaderWithDefault>(
    `/leaders/uuid/${studentUuid}/club-uuid`
  );
};

export const getClubInfoWithUuid = (clubUuid: string) => {
  return apiDefault().get<ResClubInfoWithDefault>(`/clubs/uuid/${clubUuid}`);
};

export const getStudentUuidsWithValue = (filter: string, value: string) => {
  return apiDefault().get<ResStudentUuidsWithDefault>(
    `student-uuids?${filter}=${value}`
  );
};

export const getStudents = (studentUuids: string[]) => {
  return apiDefault().post<ResStudentsWithDefault>(`/students/with-uuids`, {
    student_uuids: studentUuids
  });
};

export const postMember = (clubUuid: string, studentUuid: string) => {
  return apiDefault().post<ResDefault>(`/clubs/uuid/${clubUuid}/members`, {
    student_uuid: studentUuid
  });
};

export const deleteMember = (clubUuid: string, studentUuid: string) => {
  return apiDefault().delete<ResDefault>(
    `/clubs/uuid/${clubUuid}/members/${studentUuid}`
  );
};

export const patchClubInfo = (clubUuid: string, fd: FormData) => {
  return apiDefault().patch<ResDefault>(`/clubs/uuid/${clubUuid}`, fd, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

export const putClubLeader = (clubUuid: string, newLeaderUuid: string) => {
  return apiDefault().put<ResDefault>(`/clubs/uuid/${clubUuid}/leader`, {
    new_leader_uuid: newLeaderUuid
  });
};
