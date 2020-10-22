import {
  Fields,
  EMBEDDED,
  ManagementInfoAction,
  SET_CONCEPT,
  SET_FACEBOOK_LINK,
  SET_FIELD,
  SET_INTRODUCE,
  SET_LEADER,
  SET_LOCATION,
  SET_MEMBERS,
  SET_NAME,
  SET_PICTURE_ID
} from "../../../action/management/info";

export interface ManagementInfoState {
  name: string;
  field: Fields;
  location: string;
  concept: string;
  introduce: string;
  leader: string;
  members: string[];
  pictureId: number;
  facebookLink: string;
}

const initialState: ManagementInfoState = {
  name: "DMS",
  field: EMBEDDED,
  location: "3층 2학년 1반",
  concept: "기숙사 관리 시스템을 만드는 동아리입니다.",
  introduce: `DMS는 기숙사 관리 시스템을 만드는 동아리입니다.
  현재는 기숙사 뿐만 아니라 학교와 학부모를 위한 서비스도 개발 중입니다.`,
  leader: "2115 이성진",
  members: ["2110 손민기"],
  pictureId: 1,
  facebookLink: "DMSforDSM"
};

const ManagementInfoReduce = (
  state: ManagementInfoState = initialState,
  action: ManagementInfoAction
): ManagementInfoState => {
  switch (action.type) {
    case SET_CONCEPT:
      return {
        ...state,
        concept: action.payload.concept
      };
    case SET_FACEBOOK_LINK:
      return { ...state, facebookLink: action.payload.facebookLink };
    case SET_FIELD:
      return { ...state, field: action.payload.field };
    case SET_INTRODUCE:
      return { ...state, introduce: action.payload.introduce };
    case SET_LEADER:
      return { ...state, leader: action.payload.leader };
    case SET_LOCATION:
      return { ...state, location: action.payload.location };
    case SET_MEMBERS:
      return { ...state, members: action.payload.members };
    case SET_NAME:
      return { ...state, name: action.payload.name };
    case SET_PICTURE_ID:
      return { ...state, pictureId: action.payload.pictureId };
    default:
      return state;
  }
};

export default ManagementInfoReduce;
