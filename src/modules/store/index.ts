import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import rootSaga from '../saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from 'redux-saga';

const sagaMiddleware = saga();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
