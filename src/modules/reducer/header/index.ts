import { HeaderAction, RESET_USER, SET_USER } from "../../action/header";

export interface PageState {
  mainUrl: string;
  subUrl: string;
}
export interface HeaderState {
  info: string;
}

const headerReducer = (
  state: HeaderState = { info: "" },
  action: HeaderAction
): HeaderState => {
  switch (action.type) {
    case SET_USER:
      return {
        info: action.payload
      };
    case RESET_USER:
      return {
        info: ""
      };
    default:
      return state;
  }
};

export default headerReducer;
