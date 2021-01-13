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
export interface ResStudentUuids {
  student_uuids: string[];
}
export interface ResStudents {
  grade: number;
  group: number;
  student_number: number;
  name: string;
  phone_number: string;
  profile_uri: string;
  student_uuid: string;
}
export interface ReqClubInfo {
  club_concept?: string;
  introduction?: string;
  link?: string;
  logo?: File;
}

export interface ResClubUuidFromLeaderWithDefault
  extends ResClubUuidFromLeader,
    ResDefault {}
export interface ResClubInfoWithDefault extends ResClubInfo, ResDefault {}
export interface ResStudentUuidsWithDefault
  extends ResStudentUuids,
    ResDefault {}
export interface ResStudentsWithDefault extends ResDefault {
  students: ResStudents[];
}
