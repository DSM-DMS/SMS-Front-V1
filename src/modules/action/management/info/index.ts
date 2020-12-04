import {
  DefaultRootState,
  Selector,
  useDispatch,
  useSelector
} from "react-redux";
import { Dispatch } from "redux";

export const SOFTWARE = "SW개발" as const;
export const EMBEDDED = "임베디드" as const;
export const SECURITY = "정보보안" as const;

export type Fields = typeof SOFTWARE | typeof EMBEDDED | typeof SECURITY;

export const SET_NAME = "management/info/SET_NAME" as const;
export const SET_FIELD = "management/info/FIELD" as const;
export const SET_LOCATION = "management/info/LOCATION" as const;
export const SET_CONCEPT = "management/info/CONCEPT" as const;
export const SET_INTRODUCE = "management/info/INTRODUCE" as const;
export const SET_LEADER = "management/info/LEADER" as const;
export const SET_MEMBERS = "management/info/MEMBERS" as const;
export const SET_PICTURE_ID = "management/info/PICTURE_ID" as const;
export const SET_FACEBOOK_LINK = "management/info/FACEBOOK_LINK" as const;

const setClubName = (name: string) => ({
  type: SET_NAME,
  payload: { name }
});
const setClubField = (field: Fields) => ({
  type: SET_FIELD,
  payload: { field }
});
const setClubLocation = (location: string) => ({
  type: SET_LOCATION,
  payload: { location }
});
const setClubConcept = (concept: string) => ({
  type: SET_CONCEPT,
  payload: { concept }
});
const setClubIntroduce = (introduce: string) => ({
  type: SET_INTRODUCE,
  payload: { introduce }
});
const setClubLeader = (leader: string) => ({
  type: SET_LEADER,
  payload: { leader }
});
const setClubMembers = (members: string[]) => ({
  type: SET_MEMBERS,
  payload: { members }
});
const setClubPictureId = (pictureId: number) => ({
  type: SET_PICTURE_ID,
  payload: { pictureId }
});
const setClubFacebookLink = (facebookLink: string) => ({
  type: SET_FACEBOOK_LINK,
  payload: { facebookLink }
});

export type ManagementInfoAction =
  | ReturnType<typeof setClubName>
  | ReturnType<typeof setClubField>
  | ReturnType<typeof setClubLocation>
  | ReturnType<typeof setClubConcept>
  | ReturnType<typeof setClubIntroduce>
  | ReturnType<typeof setClubLeader>
  | ReturnType<typeof setClubMembers>
  | ReturnType<typeof setClubPictureId>
  | ReturnType<typeof setClubFacebookLink>;

export class ManagementInfoHandler {
  dispatch: Dispatch;
  // selector: DefaultRootState;

  constructor() {
    this.dispatch = useDispatch();
    // this.selector = useSelector((state: ));
  }

  handleName(name: string) {
    this.dispatch(setClubName(name));
  }

  handleField(field: Fields) {
    this.dispatch(setClubField(field));
  }

  handleLocation(location: string) {
    this.dispatch(setClubLocation(location));
  }

  handleConcept(concept: string) {
    this.dispatch(setClubConcept(concept));
  }

  handleIntroduce(introduce: string) {
    this.dispatch(setClubIntroduce(introduce));
  }

  handleLeader(leader: string) {
    this.dispatch(setClubLeader(leader));
  }

  handleMembers(members: string[]) {
    this.dispatch(setClubMembers(members));
  }

  handlePictureId(pictureId: number) {
    this.dispatch(setClubPictureId(pictureId));
  }

  handleFacebookLink(facebookLink: string) {
    this.dispatch(setClubFacebookLink(facebookLink));
  }
}
