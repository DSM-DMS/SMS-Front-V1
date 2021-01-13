import React, { FC, ReactElement } from "react";
import { useDispatch } from "react-redux";

import * as S from "../style";

import { MainBike, MainHistory, MainWarning } from "../../../assets";
import { pageMove, subPageMove } from "../../../modules/action/page";

interface Props {}

const Outing: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();

  const moveOutingWarning = () => {
    dispatch(pageMove("외출신청"));
    dispatch(subPageMove("유의사항"));
  };

  const moveOutingApply = () => {
    dispatch(pageMove("외출신청"));
    dispatch(subPageMove("외출신청"));
  };

  const moveOutingHistory = () => {
    dispatch(pageMove("외출신청"));
    dispatch(subPageMove("내 외출신청 내역"));
  };

  return (
    <S.Outing>
      <S.OutingTitleWrap>
        <S.OutingTitle>외출신청</S.OutingTitle>
        <S.OutingWarning to="/outing/warning" onClick={moveOutingWarning}>
          <img src={MainWarning} alt="warning" title="warning" />
          <S.OutingItemDesc>유의사항</S.OutingItemDesc>
        </S.OutingWarning>
      </S.OutingTitleWrap>
      <div>
        <S.OutingItem to="/outing/apply" onClick={moveOutingApply}>
          <img src={MainBike} alt="apply" title="apply" />
          <S.OutingItemDesc>외출신청</S.OutingItemDesc>
        </S.OutingItem>
        <S.OutingItem to="/outing/history" onClick={moveOutingHistory}>
          <img src={MainHistory} alt="history" title="history" />
          <S.OutingItemDesc>내 외출신청 내역</S.OutingItemDesc>
        </S.OutingItem>
      </div>
    </S.Outing>
  );
};

export default Outing;
