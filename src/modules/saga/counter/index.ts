import { delay, put, takeEvery, getContext } from "redux-saga/effects";

import {
  DECREASE_ASYNC,
  INCREASE_ASYNC,
  decrease,
  increase
} from "../../action/counter";

function* increaseSaga() {
  console.log("increaseSaga");

  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  console.log("decreaseSaga");
  // const history = yield getContext("history");
  // history.push("/");

  yield delay(1000);
  yield put(decrease());
}

function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeEvery(DECREASE_ASYNC, decreaseSaga);
}

export default counterSaga;
