import {
  HeaderAction,
  STUDENT,
  UserType,
  SET_GRADE,
  SET_GROUP,
  SET_NUMBER,
  SET_TYPE,
  SET_NAME
} from "../../action/header";

export interface PageState {
  mainUrl: string;
  subUrl: string;
}
export interface HeaderState {
  type: UserType;
  grade: number;
  group: number;
  number: number;
  name: string;
}

const initialState: HeaderState = {
  type: STUDENT,
  grade: 0,
  group: 0,
  number: 0,
  name: ""
};

const headerReducer = (
  state: HeaderState = initialState,
  action: HeaderAction
): HeaderState => {
  switch (action.type) {
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
        number: action.payload.number
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
    default:
      return state;
  }
};

export default headerReducer;
