import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import pageReducer from "./page";
import subNavReducer from "./subNav/subNav";
import headerReducer from "./header";
import boardReducer from "./board";
import posterReducer from "./poster";
import scheduleDetailReducer from "./scheduleDetail";
import OutingCardReducer from "./OutingCard";
import jsonReducer from "./json";
import ManagementInfo from "./management/info";
import counterReducer from "./counter";

const configureRootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    page: pageReducer,
    subNav: subNavReducer,
    header: headerReducer,
    board: boardReducer,
    poster: posterReducer,
    scheduleDetail: scheduleDetailReducer,
    outingCard: OutingCardReducer,
    json: jsonReducer,
    counter: counterReducer,
    ManagementInfo
  });
};

const rootReducer = combineReducers({
  page: pageReducer,
  subNav: subNavReducer,
  header: headerReducer,
  board: boardReducer,
  poster: posterReducer,
  scheduleDetail: scheduleDetailReducer,
  outingCard: OutingCardReducer,
  json: jsonReducer,
  counter: counterReducer,
  ManagementInfo
});

export { configureRootReducer };
export type stateType = ReturnType<typeof rootReducer>;
export default rootReducer;
