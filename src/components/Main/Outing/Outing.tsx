import React, { FC, ReactElement } from 'react';

import * as S from '../style';

import { bike, outingHistory, warning } from '../../../assets/main';
interface Props {}

const Outing: FC<Props> = (): ReactElement => {
  return (
    <S.Outing>
      <h2>외출증</h2>
      <div>
        <div>
          <img src={warning} alt="waring" title="waring" />
          <span>유의사항</span>
        </div>
        <div>
          <img src={bike} alt="bike" title="bike" />
          <span>외출사항</span>
        </div>
        <div>
          <img src={outingHistory} alt="outingHistory" title="outingHistory" />
          <span>내 외출신청 내역</span>
        </div>
      </div>
    </S.Outing>
  );
};

export default Outing;
