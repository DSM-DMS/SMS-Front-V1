import React, { FC, ReactElement } from 'react';

import * as S from '../style';

import { bike, outingHistory, warning } from '../../../assets/Main';

interface Props {}

const Outing: FC<Props> = (): ReactElement => {
  return (
    <S.Outing>
      <S.OutingTitle>외출신청</S.OutingTitle>
      <div>
        <S.OutingItem>
          <img src={warning} alt="warning" title="warning" />
          <S.OutingItemDesc>유의사항</S.OutingItemDesc>
        </S.OutingItem>
        <S.OutingItem>
          <img src={bike} alt="bike" title="bike" />
          <S.OutingItemDesc>외출사항</S.OutingItemDesc>
        </S.OutingItem>
        <S.OutingItem>
          <img src={outingHistory} alt="outingHistory" title="outingHistory" />
          <S.OutingItemDesc>내 외출신청 내역</S.OutingItemDesc>
        </S.OutingItem>
      </div>
    </S.Outing>
  );
};

export default Outing;
