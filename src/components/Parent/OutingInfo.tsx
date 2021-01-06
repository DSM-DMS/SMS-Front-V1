import React, { FC } from "react";

import * as S from "./style";

import { ResOutingInfo } from "../../lib/api/payloads/Parent";
import { EMERGENCY } from "../../containers/Outing/ApplyContainer";

interface Props {
  outingInfo: ResOutingInfo;
}

const OutingInfo: FC<Props> = ({ outingInfo }) => {
  const { start_time, end_time, place, reason, outing_situation } = outingInfo;

  const getLocalTime = (time: number) => {
    const d = new Date(time * 1000);
    return d.toLocaleString();
  };

  return (
    <S.ParentOutingInfo>
      <S.ParentOutingItem>
        <S.ParentOutingTitle>외출 시간</S.ParentOutingTitle>
        <S.ParentOutingPara>{getLocalTime(start_time)}</S.ParentOutingPara>
      </S.ParentOutingItem>
      <S.ParentOutingItem>
        <S.ParentOutingTitle>귀교 시간</S.ParentOutingTitle>
        <S.ParentOutingPara>{getLocalTime(end_time)}</S.ParentOutingPara>
      </S.ParentOutingItem>
      <S.ParentOutingItem>
        <S.ParentOutingTitle>외출 장소</S.ParentOutingTitle>
        <S.ParentOutingPara>{place}</S.ParentOutingPara>
      </S.ParentOutingItem>
      <S.ParentOutingItem>
        <S.ParentOutingTitle>외출 사유</S.ParentOutingTitle>
        <S.ParentOutingPara>{reason}</S.ParentOutingPara>
      </S.ParentOutingItem>
      <S.ParentOutingItem>
        <S.ParentOutingTitle>외출 상황</S.ParentOutingTitle>
        <S.ParentOutingPara>
          {outing_situation?.toLocaleLowerCase() === EMERGENCY
            ? "질병 외출"
            : "일반 외출"}
        </S.ParentOutingPara>
      </S.ParentOutingItem>
    </S.ParentOutingInfo>
  );
};

export default OutingInfo;
