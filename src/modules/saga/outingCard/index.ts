import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { apiDefault } from "../../../lib/api/client";
import {
  getOutingCardList,
  setActionOutingCard
} from "../../../lib/api/OutingCard";
import { ResOutingCardListItem } from "../../../lib/api/payloads/OutingCard";
import {
  getOutingCardListSaga as getOutingCardListSagaCreater,
  GET_OUTING_CARD_LIST_SAGA,
  getOutingCardList as getOutingCardListCreater,
  approveOutingCardSaga as approveOutingCardSagaCreater,
  rejectOutingCardSaga as rejectOutingCardSagaCreater,
  APPROVE_OUTING_CARD_SAGA,
  REJECT_OUTING_CARD_SAGA,
  CloseOutingCardModal
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

function* approveOutingCardSaga(
  action: ReturnType<typeof approveOutingCardSagaCreater>
) {
  try {
    yield call(setActionOutingCard, {
      action: "teacher-approve",
      outing_uuid: action.payload
    });

    toast.dark("성공적으로 승인하였습니다.");
    yield put(CloseOutingCardModal());
  } catch (err) {}
}
function* rejectOutingCardSaga(
  action: ReturnType<typeof rejectOutingCardSagaCreater>
) {
  try {
    yield call(setActionOutingCard, {
      action: "teacher-reject",
      outing_uuid: action.payload
    });
    toast.dark("성공적으로 거절하였습니다.");
    yield put(CloseOutingCardModal());
  } catch (err) {}
}

function* outingCardSaga() {
  yield takeEvery(GET_OUTING_CARD_LIST_SAGA, getOutingCardListSaga);
  yield takeEvery(APPROVE_OUTING_CARD_SAGA, approveOutingCardSaga);
  yield takeEvery(REJECT_OUTING_CARD_SAGA, rejectOutingCardSaga);
}

export default outingCardSaga;
