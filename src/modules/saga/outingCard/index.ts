import { AxiosResponse } from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { apiDefault } from "../../../lib/api/client";
import { getOutingCardList } from "../../../lib/api/OutingCard";
import { ResOutingCardListItem } from "../../../lib/api/payloads/OutingCard";
import {
  getOutingCardListSaga as getOutingCardListSagaCreater,
  GET_OUTING_CARD_LIST_SAGA,
  getOutingCardList as getOutingCardListCreater
} from "../../action/outingCard";

function* getOutingCardListSaga(
  action: ReturnType<typeof getOutingCardListSagaCreater>
) {
  try {
    const res: AxiosResponse<{ outings: ResOutingCardListItem[] }> = yield call(
      getOutingCardList,
      action.payload
    );

    yield put(getOutingCardListCreater(res.data.outings));
  } catch (err) {}
}

function* approveOutingCardSaga() {}
function* rejectOutingCardSaga() {}

function* outingCardSaga() {
  yield takeEvery(GET_OUTING_CARD_LIST_SAGA, getOutingCardListSaga);
}

export default outingCardSaga;
