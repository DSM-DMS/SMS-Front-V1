import { apiDefault } from "../client";

export const getClubUuid = (studentUuid: string) => {
  return apiDefault().get(`/leaders/uuid/${studentUuid}/club-uuid`);
};
