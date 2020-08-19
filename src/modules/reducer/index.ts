import { combineReducers } from 'redux';
import pageReducer from './page';
import subNavReducer from './subNav/subNav';

const rootReducer = combineReducers({
  page: pageReducer,
  subNav: subNavReducer,
});

export type stateType = ReturnType<typeof rootReducer>;
export default rootReducer;
