import { combineReducers } from 'redux';
import pageReducer from './page';

const rootReducer = combineReducers({
  page: pageReducer,
});

export type stateType = ReturnType<typeof rootReducer>;
export default rootReducer;
