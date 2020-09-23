import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { jsonAction, jsonActionCreater } from '../../action/json';

function* setJsonSaga(action) {
  // call(함수, 함수에 들어갈 매개변수1, 함수에 들어갈 매개변수2, 함수에 들어갈 매개변수3....)
  const { data } = yield call(
    axios.get,
    'https://jsonplaceholder.typicode.com/todos/1',
  );
  yield put(jsonActionCreater.setJson(data));
  // put === dispatch
}

function* jsonSaga() {
  yield takeEvery(jsonAction.GET_JSON_SAGA, setJsonSaga);
  // taekEvery(action.type, 실행할 함수)
  // takeEvery는 action이 발생했을때 type이 첫번째 매개변수와 같다면 2번째 매개변수에 있는 함수를 실행시킴
}

export default jsonSaga;
