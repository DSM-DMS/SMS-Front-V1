import React, { FC, ReactElement } from 'react';

import * as S from '../style';

interface Props {}

const HistoryCard: FC<Props> = (): ReactElement => {
  return (
    <S.HistoryCard>
      <S.CardTop>
        <S.CardUser>2301 강신희</S.CardUser>
        <S.CardPlace>신성동 하나로마트</S.CardPlace>
      </S.CardTop>
      <S.CardBottom>
        <S.CardDate>2020년 07년 17일</S.CardDate>
        <S.CardTime>
          <span>17:30</span>
          <span>20:30</span>
        </S.CardTime>
      </S.CardBottom>
    </S.HistoryCard>
  );
};

export default HistoryCard;
