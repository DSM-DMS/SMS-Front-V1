import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { ResClubInfo } from "../../../../lib/api/payloads/Management";

export const SOFTWARE = "SW개발" as const;
export const EMBEDDED = "임베디드" as const;
export const SECURITY = "정보보안" as const;

export type Fields = typeof SOFTWARE | typeof EMBEDDED | typeof SECURITY;

export const INIT_INFO = "management/info/INIT_INFO" as const;
export const SET_NAME = "management/info/SET_NAME" as const;
export const SET_CONCEPT = "management/info/CONCEPT" as const;
export const SET_INTRODUCTION = "management/info/INTRODUCTION" as const;
export const SET_LEADER_UUID = "management/info/LEADER_UUID" as const;
export const SET_MEMBERS = "management/info/MEMBERS" as const;
export const SET_LOGO_URI = "management/info/LOGO_URI" as const;
export const SET_LINK = "management/info/LINK" as const;

const initInfo = (info: ResClubInfo) => ({
  type: INIT_INFO,
  payload: { info }
});
const setName = (name: string) => ({
  type: SET_NAME,
  payload: { name }
});
const setClubConcept = (clubConcept: string) => ({
  type: SET_CONCEPT,
  payload: { clubConcept }
});
const setIntroduce = (introduction: string) => ({
  type: SET_INTRODUCTION,
  payload: { introduction }
});
const setClubLeaderUuid = (leaderUuid: string) => ({
  type: SET_LEADER_UUID,
  payload: { leaderUuid }
});
const setClubMemberUuids = (clubMemberUuids: string[]) => ({
  type: SET_MEMBERS,
  payload: { clubMemberUuids }
});
const setLogoUri = (logoUri: string) => ({
  type: SET_LOGO_URI,
  payload: { logoUri }
});
const setClubLink = (link: string) => ({
  type: SET_LINK,
  payload: { link }
});

export type ManagementInfoAction = ReturnType<
  | typeof initInfo
  | typeof setName
  | typeof setClubConcept
  | typeof setIntroduce
  | typeof setClubLeaderUuid
  | typeof setClubMemberUuids
  | typeof setLogoUri
  | typeof setClubLink
>;

export class ManagementInfoHandler {
  dispatch: Dispatch;

  constructor() {
    this.dispatch = useDispatch();
  }

  handleInit(info: ResClubInfo) {
    this.dispatch(initInfo(info));
  }

  handleName(name: string) {
    this.dispatch(setName(name));
  }

  handleClubConcept(clubConcept: string) {
    this.dispatch(setClubConcept(clubConcept));
  }

  handleIntroduction(introduction: string) {
    this.dispatch(setIntroduce(introduction));
  }

  handleLeaderUuid(leaderUuid: string) {
    this.dispatch(setClubLeaderUuid(leaderUuid));
  }

  handleClubMemberUuids(clubMemberUuids: string[]) {
    this.dispatch(setClubMemberUuids(clubMemberUuids));
  }

  handleLogoUri(logoUri: string) {
    this.dispatch(setLogoUri(logoUri));
  }

  handleLink(link: string) {
    this.dispatch(setClubLink(link));
  }
}
