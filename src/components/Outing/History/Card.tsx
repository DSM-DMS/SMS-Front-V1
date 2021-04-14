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

  const isEmergency = useMemo(() => {
    return outing_situation.toUpperCase() !== "NORMAL";
  }, [outing_situation]);

  const isLate = useMemo(() => {
    return arrival_time && arrival_time > end_time;
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
        <S.CardDate>
          {isLate && (
            <S.CardSituation name="지각">
              <LateSvg />
            </S.CardSituation>
          )}
          {isEmergency && (
            <S.CardSituation name="질병외출">
              <EmergencySvg />
            </S.CardSituation>
          )}
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

const EmergencySvg = () => {
  return (
    <svg
      className="emergency"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 13 13"
    >
      <g id="그룹_450" data-name="그룹 450" transform="translate(0 -0.096)">
        <path
          id="다각형_10"
          data-name="다각형 10"
          d="M6.5,0,13,11H0Z"
          transform="translate(0 0.096)"
          fill="#f55"
        />
        <text
          id="_"
          data-name="!"
          transform="translate(8 10.096)"
          fill="#fff"
          fontSize="9"
          fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
          fontWeight="500"
          letterSpacing="-0.02em"
        >
          <tspan x="-3.087" y="0">
            !
          </tspan>
        </text>
      </g>
    </svg>
  );
};

const LateSvg = () => {
  return (
    <svg
      className="late"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="13" r="7" />
      <polyline points="12 10 12 13 14 13" />
      <line x1="7" y1="4" x2="4.25" y2="6" />
      <line x1="17" y1="4" x2="19.75" y2="6" />
    </svg>
  );
};

export default HistoryCard;
