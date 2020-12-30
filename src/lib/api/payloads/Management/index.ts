import { ResDefault } from "../";
import { Fields } from "../../../../modules/action/management/info";

export interface ResClubUuidFromLeader {
  club_uuid: string;
}
export interface ResClubInfo {
  name: string;
  club_concept: string;
  introduction: string;
  leader_uuid: string;
  location: string;
  logo_uri: string;
  field: Fields;
  link: string;
  member_uuids: string[];
}

export interface ResClubUuidFromLeaderWithDefault
  extends ResClubUuidFromLeader,
    ResDefault {}
export interface ResClubInfoWithDefault extends ResClubInfo, ResDefault {}
