import { ReqAddRecruitment } from "../../../lib/api/payloads/Club";
import ManagementAction, { managementAction } from "../../action/management";
import { CircleInfo, WantedInfo } from "../../type/poster";

export interface ManagementWantedDetail extends CircleInfo, WantedInfo {
  wantedData?: ReqAddRecruitment;
}

const initialState: ManagementWantedDetail = {
  club_concept: "",
  club_uuid: "",
  end_period: "",
  field: "",
  floor: 0,
  introduction: "",
  leader_uuid: "",
  link: "",
  location: "",
  logo_uri: "",
  member_uuids: [],
  name: "",
  recruit_concept: "",
  recruit_members: [],
  recruitment_uuid: "",
  start_period: "",
  wantedData: {
    club_uuid: "",
    end_period: "",
    members: [],
    recruit_concept: ""
  }
};

const managementReducer = (
  state: ManagementWantedDetail = initialState,
  action: ManagementAction
): ManagementWantedDetail => {
  switch (action.type) {
    case managementAction.GET_MANAGEMENT_WANTED_INFO:
      return { ...state, ...action.payload };
    case managementAction.SET_MANAGEMENT_WANTED_INFO:
      return { ...state, wantedData: action.payload };
    default:
      return state;
  }
};

export default managementReducer;
