import { ResClubInfo } from "../../../../lib/api/payloads/Management";
import {
  ManagementInfoAction,
  SET_CONCEPT,
  SET_LINK,
  SET_INTRODUCTION,
  SET_LEADER_UUID,
  SET_MEMBERS,
  SET_NAME,
  SET_LOGO_URI,
  INIT_INFO
} from "../../../action/management/info";

const initialState: ResClubInfo = {
  name: "",
  club_concept: "",
  introduction: "",
  leader_uuid: "",
  member_uuids: [],
  field: null,
  link: "",
  location: "",
  logo_uri: ""
};

const ManagementInfoReduce = (
  state: ResClubInfo = initialState,
  action: ManagementInfoAction
): ResClubInfo => {
  switch (action.type) {
    case INIT_INFO:
      return {
        ...state,
        ...action.payload.info
      };
    case SET_CONCEPT:
      return {
        ...state,
        club_concept: action.payload.clubConcept
      };
    case SET_LINK:
      return { ...state, link: action.payload.link };
    case SET_INTRODUCTION:
      return { ...state, introduction: action.payload.introduction };
    case SET_LEADER_UUID:
      return { ...state, leader_uuid: action.payload.leaderUuid };
    case SET_MEMBERS:
      return { ...state, member_uuids: action.payload.clubMemberUuids };
    case SET_NAME:
      return { ...state, name: action.payload.name };
    case SET_LOGO_URI:
      return { ...state, logo_uri: action.payload.logoUri };
    default:
      return state;
  }
};

export default ManagementInfoReduce;
