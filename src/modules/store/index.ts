import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import createReduxSaga from "redux-saga"; // reduxSaga인스턴스를 만드는 함수를 import
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer, { configureRootReducer } from "../reducer";
import rootSaga from "../saga";
import customHistory from "../../history";

const reduxSaga = createReduxSaga({
  context: {
    history: customHistory
  }
}); //인스턴스를 만들어줌

const configureStore = history => {
  return createStore(
    configureRootReducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), reduxSaga))
  );
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxSaga)) // store와 saga를 연결함
);

reduxSaga.run(rootSaga); // run메소드에 rootSaga를 넣어줌

export { configureStore };
export default store;
