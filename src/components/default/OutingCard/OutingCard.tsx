import React, { memo, useCallback } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";

import * as S from "./styles";

import { ResOutingCardListItem } from "../../../lib/api/payloads/OutingCard";
import { getOutingCardTime } from "../../../lib/utils";
import {
  OutingCard,
  ShowOutingCardModal
} from "../../../modules/action/outingCard";

interface Props extends ResOutingCardListItem {
  isClicked: (uuid: string) => void;
}

const OutingCard: FC<Props> = ({
  end_time,
  place,
  outing_uuid,
  number,
  name,
  grade,
  group,
  isClicked,
  start_time
}) => {
  const [dateInfo, startTime, endTime] = getOutingCardTime(
    start_time,
    end_time
  );

  return (
    <S.Container onClick={() => isClicked(outing_uuid)}>
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
