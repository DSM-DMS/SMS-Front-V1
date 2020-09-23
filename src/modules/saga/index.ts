import { all } from 'redux-saga/effects';
import jsonSaga from './json';

function* rootSaga() {
  yield all([jsonSaga()]);
}

export default rootSaga;
