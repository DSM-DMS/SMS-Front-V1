import React, { FC, ReactElement, useCallback, useMemo } from "react";

import * as S from "../style";
import {
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
    outing_status,
    arrival_time
  } = outing;
  const isLate = useMemo(() => {
    const now = new Date().getTime();
    if (now > end_time && arrival_time === 0) return true;
    if (!arrival_time && arrival_time > end_time) return true;
    return false;
  }, [end_time, arrival_time]);

  const getLocalDate = useCallback((startTime: number) => {
    const date = new Date(startTime * 1000);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();

    return `${y}년 ${padNum(m)}월 ${padNum(d)}일`;
  }, []);

  const getLocalTime = useCallback((time: number) => {
    const date = new Date(time * 1000);
    const h = date.getHours();
    const m = date.getMinutes();

    return `${padNum(h)}:${padNum(m)}`;
  }, []);

  const handleHistoryCard = useCallback(() => {
    openModal();
    handleCard(outing);
    selectOuting(outing);
  }, [outing]);

  return (
    <S.HistoryCard onClick={handleHistoryCard}>
      <div>
        <S.CardDate
          emergency={outing_situation.toUpperCase() === "NORMAL" ? false : true}
          late={isLate}
        >
          {getLocalDate(start_time)}
        </S.CardDate>
        <S.CardPlace>장소 : {place}</S.CardPlace>
      </div>
      <div>
        {+outing_status >= 2 && new Date().getTime() > end_time * 1000 ? (
          <S.CardStatus status={6}>만료</S.CardStatus>
        ) : (
          <S.CardStatus status={+outing_status}>
            {outingStatusMap[outing_status]}
          </S.CardStatus>
        )}
        <S.CardTime>
          외출 시간 : {getLocalTime(start_time)} ~ {getLocalTime(end_time)}
        </S.CardTime>
      </div>
    </S.HistoryCard>
  );
};

export default HistoryCard;
