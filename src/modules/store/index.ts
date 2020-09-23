import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createReduxSaga from 'redux-saga';
import rootSaga from '../saga';

const reduxSaga = createReduxSaga();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxSaga)),
);

reduxSaga.run(rootSaga);

export default store;
