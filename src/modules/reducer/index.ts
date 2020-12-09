import { combineReducers } from "redux";
import pageReducer from "./page";
import subNavReducer from "./subNav/subNav";
import headerReducer from "./header";
import boardReducer from "./board";
import posterReducer from "./poster";
import scheduleDetailReducer from "./scheduleDetail";
import outingCardReducer from "./outingCard";
import jsonReducer from "./json";
import ManagementInfo from "./management/info";
import noticeReducer from "./notice";
import outingReducer from "./outing";

const rootReducer = combineReducers({
  page: pageReducer,
  subNav: subNavReducer,
  header: headerReducer,
  board: boardReducer,
  poster: posterReducer,
  scheduleDetail: scheduleDetailReducer,
  outingCard: outingCardReducer,
  outing: outingReducer,
  json: jsonReducer,
  ManagementInfo,
  notice: noticeReducer
});

export type stateType = ReturnType<typeof rootReducer>;
export default rootReducer;
