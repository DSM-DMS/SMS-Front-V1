import { apiDefault } from "../client";
import {
  ResClubInfoWithDefault,
  ResClubUuidFromLeaderWithDefault
} from "../payloads/Management";

export const getClubUuidFromLeader = (studentUuid: string) => {
  return apiDefault().get<ResClubUuidFromLeaderWithDefault>(
    `/leaders/uuid/${studentUuid}/club-uuid`
  );
};

export const getClubInfoWithUuid = (clubUuid: string) => {
  return apiDefault().get<ResClubInfoWithDefault>(`/clubs/uuid/${clubUuid}`);
};
