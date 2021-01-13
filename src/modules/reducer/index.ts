import { combineReducers } from "redux";
import pageReducer from "./page";
import subNavReducer from "./subNav/subNav";
import headerReducer from "./header";
import boardReducer from "./board";
import posterReducer from "./poster";
import outingCardReducer from "./outingCard";
import ManagementInfo from "./management/info";
import outingReducer from "./outing";
import mainReducer from "./main";
import noticeListReducer from "./notice/list";
import managementReducer from "./management";
import loadingReducer from "./loading";
import noticeDetailReducer from "./notice/detail";

const rootReducer = combineReducers({
  page: pageReducer,
  subNav: subNavReducer,
  header: headerReducer,
  board: boardReducer,
  poster: posterReducer,
  outingCard: outingCardReducer,
  outing: outingReducer,
  ManagementInfo,
  main: mainReducer,
  management: managementReducer,
  noticeList: noticeListReducer,
  noticeDetail: noticeDetailReducer,
  loading: loadingReducer
});

export type stateType = ReturnType<typeof rootReducer>;
export default rootReducer;
