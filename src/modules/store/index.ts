import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createReduxSaga from 'redux-saga'; // reduxSaga인스턴스를 만드는 함수를 import
import rootSaga from '../saga';

const reduxSaga = createReduxSaga(); //인스턴스를 만들어줌

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxSaga)), // store와 saga를 연결함
);

reduxSaga.run(rootSaga); // run메소드에 rootSaga를 넣어줌

export default store;
