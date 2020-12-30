import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Card from "./Card";
import Modal from "./Modal";

import * as S from "../style";
import { OutingHistory } from "../../../assets";
import { ResHistoryItem } from "../../../lib/api/payloads/Outing";
import { subPageMove } from "../../../modules/action/page";

interface Props {
  histories: ResHistoryItem[];
  historyStart: number;
  modal: boolean;
  closeModal: () => void;
  openModal: () => void;
  getHistories: () => Promise<void>;
  dispatchSelectedOuting: (histories: ResHistoryItem) => void;
}

const History: FC<Props> = ({
  histories,
  historyStart,
  modal,
  openModal,
  closeModal,
  getHistories,
  dispatchSelectedOuting
}): ReactElement => {
  const dispatch = useDispatch();

  return (
    <S.HistoryWrap>
      <S.HistoryHead>
        <img src={OutingHistory} alt="history" title="history" />
        <S.HistoryTitle>내 외출신청 내역</S.HistoryTitle>
      </S.HistoryHead>
      <S.HistoryContent>
        {historyStart === 0 && (
          <div>외출증을 불러오는 중입니다. 잠시만 기다려주세요.</div>
        )}
        {historyStart !== 0 && histories.length === 0 ? (
          <S.HistoryNoContent>
            외출신청 내역이 없습니다.
            <Link
              to="/outing/apply"
              onClick={() => dispatch(subPageMove("외출신청"))}
            >
              외출신청하러 가기!
            </Link>
          </S.HistoryNoContent>
        ) : (
          <S.HistoryCardWrap>
            {histories.map(outing => (
              <Card
                key={outing.outing_uuid}
                outing={outing}
                openModal={openModal}
                handleCard={dispatchSelectedOuting}
              />
            ))}
          </S.HistoryCardWrap>
        )}

        {historyStart === histories.length && (
          <S.MoreButton onClick={getHistories}>더 보기</S.MoreButton>
        )}
        {modal && <Modal closeModal={closeModal} />}
      </S.HistoryContent>
    </S.HistoryWrap>
  );
};

export default History;
