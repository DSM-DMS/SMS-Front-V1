import axios from 'axios';
import { call, takeEvery } from 'redux-saga/effects';
import { jsonAction } from '../../action/json';

function* setJsonSaga(action) {
  const { data } = yield call(
    axios.get,
    'https://jsonplaceholder.typicode.com/todos/1',
  );
  console.log(data);
}

function* jsonSaga() {
  yield takeEvery(jsonAction.GET_JSON_SAGA, setJsonSaga);
}

export default jsonSaga;
