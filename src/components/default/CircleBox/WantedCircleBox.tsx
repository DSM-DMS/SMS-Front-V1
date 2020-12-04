import React, { FC, ReactElement, memo, useCallback } from "react";
import * as S from "./styles";
import { useHistory } from "react-router";
import { HashTag } from "../Info/Body/Sub/styles";
import { WantedInfo } from "../../../modules/type/poster";

const dateParse = (
  startDateStr: string,
  endDateStr: string
): ReactElement | string => {
  const [endYear, endMonth, endDate] = endDateStr.split("-");
  return (
    <>
      <div>{startDateStr}</div>
      <S.Date>
        <span>-</span>{" "}
        <span>
          {endMonth} {endDate}
        </span>
      </S.Date>
    </>
  );
};

const WantedCircleBox: FC<WantedInfo> = ({
  club_uuid,
  end_period,
  field,
  recruit_concept,
  number,
  grade,
  recruitment_uuid,
  start_period
}) => {
  const history = useHistory();
  const handleClick = useCallback(() => {
    history.push(`/circles/wanted/${club_uuid}`);
  }, []);

  return (
    <S.Container onClick={handleClick}>
      <div>
        <S.Header>
          <S.CircleName>{"동아리 이름"}</S.CircleName>
          <div>{"위치"}</div>
        </S.Header>
        <S.CircleIntroduce>{"설명"}</S.CircleIntroduce>
        <S.WantedJob>
          {/* {job.map(str => (
            <div>*{str}</div>
          ))} */}
        </S.WantedJob>
      </div>
      <S.Footer>
        <div>
          <div>
            <HashTag>{field}</HashTag>
          </div>
        </div>
        <S.DateWrap>{dateParse(start_period, end_period)}</S.DateWrap>
      </S.Footer>
      <img src={""} />
    </S.Container>
  );
};

export default memo(WantedCircleBox);
