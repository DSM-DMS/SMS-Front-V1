import React, { memo, useCallback } from "react";
import { MouseEvent } from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { ResOutingCardListItem } from "../../../lib/api/payloads/OutingCard";
import { getOutingCardTime } from "../../../lib/utils";
import {
  OutingCard,
  ShowOutingCardModal,
  updateOutingCardModal
} from "../../../modules/action/outingCard";
import * as S from "./styles";

interface Props extends ResOutingCardListItem {
  isClicked: boolean;
}

const OutingCard: FC<Props> = ({
  end_time,
  reason,
  place,
  outing_uuid,
  outing_status,
  outing_situation,
  number,
  name,
  is_late,
  grade,
  group,
  isClicked,
  start_time
}) => {
  const dispatch = useDispatch();
  const clickHandler = useCallback(() => {
    dispatch(ShowOutingCardModal(outing_uuid));
  }, []);

  const [dateInfo, startTime, endTime] = getOutingCardTime(
    start_time,
    end_time
  );

  return (
    <S.Container onClick={isClicked ? clickHandler : undefined}>
      <S.Header>
        <div>
          {grade}
          {group}
          {`${number}`.padStart(2, "0")} {name}
        </div>
        <div>|</div>
      </S.Header>
      <S.Body>
        <p>{place}</p>
        <S.FlexBetween>
          <div>{dateInfo}</div>
          <S.FlexBetween>
            <S.Bar>-</S.Bar>
            <div>
              <div>{startTime}</div>
              <div>{endTime}</div>
            </div>
          </S.FlexBetween>
        </S.FlexBetween>
      </S.Body>
    </S.Container>
  );
};

export default memo(OutingCard);
