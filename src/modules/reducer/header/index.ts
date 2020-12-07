import { ResStudentInfo } from "../../../lib/api/payloads/Login";
import {
  HeaderAction,
  STUDENT,
  UserType,
  SET_GRADE,
  SET_GROUP,
  SET_NUMBER,
  SET_TYPE,
  SET_NAME,
  SET_PHONE,
  SET_PROFILE_URI,
  SET_INIT
} from "../../action/header";

export interface PageState {
  mainUrl: string;
  subUrl: string;
}

export interface HeaderState extends ResStudentInfo {
  type: UserType | "";
}

const initialState: HeaderState = {
  type: STUDENT,
  grade: 0,
  group: 0,
  name: "",
  student_number: 0,
  phone_number: "",
  profile_uri: ""
};

const headerReducer = (
  state: HeaderState = initialState,
  action: HeaderAction
): HeaderState => {
  switch (action.type) {
    case SET_INIT:
      return {
        ...state,
        type: action.payload.type,
        ...action.payload.user
      };
    case SET_GRADE:
      return {
        ...state,
        grade: action.payload.grade
      };
    case SET_GROUP:
      return {
        ...state,
        group: action.payload.group
      };
    case SET_NUMBER:
      return {
        ...state,
        student_number: action.payload.number
      };
    case SET_TYPE:
      return {
        ...state,
        type: action.payload.type
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload.name
      };
    case SET_PHONE:
      return {
        ...state,
        phone_number: action.payload.phone
      };
    case SET_PROFILE_URI:
      return {
        ...state,
        profile_uri: action.payload.profileUri
      };

    default:
      return state;
  }
};

export default headerReducer;
