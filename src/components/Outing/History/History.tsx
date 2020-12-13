import React, { FC, ReactElement } from "react";

import Card from "./Card";
import Modal from "./Modal";

import * as S from "../style";
import { OutingHistory } from "../../../assets";
import { ResHistoryItem } from "../../../lib/api/payloads/Outing";
import { Link } from "react-router-dom";

interface Props {
  histories: ResHistoryItem[];
  modal: boolean;
  closeModal: () => void;
  openModal: () => void;
  getHistories: () => Promise<void>;
  dispatchSelectedOuting: (histories: ResHistoryItem) => void;
}

const History: FC<Props> = ({
  histories,
  modal,
  openModal,
  closeModal,
  getHistories,
  dispatchSelectedOuting
}): ReactElement => {
  return (
    <S.HistoryWrap>
      <S.HistoryHead>
        <img src={OutingHistory} alt="history" title="history" />
        <S.HistoryTitle>내 외출신청 내역</S.HistoryTitle>
      </S.HistoryHead>
      <S.HistoryContent>
        {histories.length === 0 ? (
          <S.HistoryNoContent>
            외출신청 내역이 없습니다.
            <Link to="/outing/apply"> 외출신청하러 가기!</Link>
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

        {histories.length !== 0 && (
          <S.MoreButton onClick={getHistories}>더 보기</S.MoreButton>
        )}
        {modal && <Modal closeModal={closeModal} />}
      </S.HistoryContent>
    </S.HistoryWrap>
  );
};

export default History;
