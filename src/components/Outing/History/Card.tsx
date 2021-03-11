import React, { FC, ReactElement, useCallback } from "react";

import * as S from "../style";
import {
  OutingStatus,
  outingStatusMap,
  ResHistoryItem
} from "../../../lib/api/payloads/Outing";
import { padNum } from "../../../lib/utils";

interface Props {
  outing: ResHistoryItem;
  openModal: () => void;
  handleCard: (outing: ResHistoryItem) => void;
  selectOuting: (outing: ResHistoryItem) => void;
}

const HistoryCard: FC<Props> = ({
  openModal,
  outing,
  handleCard,
  selectOuting
}): ReactElement => {
  const {
    end_time,
    place,
    start_time,
    outing_situation,
    outing_status
  } = outing;

  const getLocalDate = useCallback((startTime: number) => {
    const date = new Date(startTime * 1000);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();

    return `${y}년 ${padNum(m)}월 ${d}일`;
  }, []);

  const getLocalTime = useCallback((time: number) => {
    const date = new Date(time * 1000);
    const h = date.getHours();
    const m = date.getMinutes();

    return `${padNum(h)}:${padNum(m)}`;
  }, []);

  return (
    <S.HistoryCard
      onClick={() => {
        openModal();
        handleCard(outing);
        selectOuting(outing);
      }}
    >
      <S.CardTop>
        <S.CardDate
          emergency={outing_situation.toUpperCase() === "NORMAL" ? false : true}
        >
          {getLocalDate(start_time)}
        </S.CardDate>
        <S.CardPlace>장소 : {place}</S.CardPlace>
      </S.CardTop>
      <S.CardBottom>
        <S.CardStatus status={+outing_status}>
          {outingStatusMap[outing_status]}
        </S.CardStatus>
        <S.CardTime>
          외출 시간 : {getLocalTime(start_time)} ~ {getLocalTime(end_time)}
        </S.CardTime>
      </S.CardBottom>
    </S.HistoryCard>
  );
};

export default HistoryCard;
