import { AxiosResponse } from "axios";
import { apiDefault } from "../client";
import { ClubDetail, ClubListItem, Student } from "../payloads/Club";

export const getClubUuid = (studentUuid: string) => {
  return apiDefault().get(`/leaders/uuid/${studentUuid}/club-uuid`);
};

export const getClubList = (): Promise<
  AxiosResponse<{ clubs: ClubListItem[] }>
> => {
  return apiDefault().get(`/clubs/sorted-by/update-time`);
};

export const getClubDetail = (
  uuid: string
): Promise<AxiosResponse<ClubDetail>> => {
  return apiDefault().get(`/clubs/uuid/${uuid}`);
};

export const getCircleMembers = (
  uuids: string[]
): Promise<
  AxiosResponse<{
    students: Student[];
  }>
> => {
  return apiDefault().post(`/students/with-uuids`, {
    student_uuids: uuids
  });
};

export const getClubFilter = (): Promise<
  AxiosResponse<{ fields: string[] }>
> => {
  return apiDefault().get<{ fields: string[] }>("/clubs/property/fields");
};
