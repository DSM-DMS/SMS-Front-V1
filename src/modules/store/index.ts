import { createStore, applyMiddleware } from "redux";
import createReduxSaga from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import rootSaga from "../saga";
import rootReducer from "../reducer";

export const history = createBrowserHistory();

const reduxSaga = createReduxSaga({
  context: {
    history
  }
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxSaga))
);

reduxSaga.run(rootSaga);

export default store;
