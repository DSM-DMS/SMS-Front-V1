import { combineReducers } from 'redux';
import pageReducer from './page';
import subNavReducer from './subNav/subNav';
import headerReducer from './header';

const rootReducer = combineReducers({
  page: pageReducer,
  subNav: subNavReducer,
  header: headerReducer,
});

export type stateType = ReturnType<typeof rootReducer>;
export default rootReducer;
