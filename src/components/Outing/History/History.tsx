import React, { FC, ReactElement } from "react";
import { useDispatch } from "react-redux";

import Card from "./Card";
import Modal from "./Modal";

import * as S from "../style";
import { OutingHistory } from "../../../assets";
import { ResHistory, ResHistoryItem } from "../../../lib/api/payloads/Outing";
import { setSelectedOuting } from "../../../modules/action/outing";

interface Props {
  histories: ResHistory;
  modal: boolean;
  closeModal: () => void;
  openModal: () => void;
}

const History: FC<Props> = ({
  histories,
  modal,
  openModal,
  closeModal
}): ReactElement => {
  const dispatch = useDispatch();

  const dispatchSelectedOuting = (outing: ResHistoryItem) => {
    dispatch(setSelectedOuting(outing));
  };

  return (
    <S.HistoryWrap>
      <S.HistoryHead>
        <img src={OutingHistory} alt="history" title="history" />
        <S.HistoryTitle>내 외출신청 내역</S.HistoryTitle>
      </S.HistoryHead>
      <div>
        <S.HistoryCardWrap>
          {histories.outings.map(outing => (
            <Card
              key={outing.outing_uuid}
              outing={outing}
              openModal={openModal}
              handleCard={dispatchSelectedOuting}
            />
          ))}
        </S.HistoryCardWrap>
        <S.MoreButton>더 보기</S.MoreButton>
        {modal && <Modal closeModal={closeModal} />}
      </div>
    </S.HistoryWrap>
  );
};

export default History;
