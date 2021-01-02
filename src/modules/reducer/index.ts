import { combineReducers } from "redux";
import pageReducer from "./page";
import subNavReducer from "./subNav/subNav";
import headerReducer from "./header";
import boardReducer from "./board";
import posterReducer from "./poster";
import outingCardReducer from "./outingCard";
import jsonReducer from "./json";
import ManagementInfo from "./management/info";
import noticeReducer from "./notice";
import outingReducer from "./outing";
import mainReducer from "./main";
import managementReducer from "./management";

const rootReducer = combineReducers({
  page: pageReducer,
  subNav: subNavReducer,
  header: headerReducer,
  board: boardReducer,
  poster: posterReducer,
  outingCard: outingCardReducer,
  outing: outingReducer,
  json: jsonReducer,
  ManagementInfo,
  notice: noticeReducer,
  main: mainReducer,
  management: managementReducer
});

export type stateType = ReturnType<typeof rootReducer>;
export default rootReducer;
