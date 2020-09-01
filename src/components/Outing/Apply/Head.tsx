import React, { FC, ReactElement } from 'react';

import * as S from '../style';

import { OutingBike } from '../../../assets';

interface Props {}

const ApplyHead: FC<Props> = (): ReactElement => {
  return (
    <S.ApplyHead>
      <img src={OutingBike} alt="outing" title="outing" />
      <S.ApplyTitle>외출신청</S.ApplyTitle>
      <S.ApplyCircle1 />
      <S.ApplyCircle2 />
      <S.ApplyCircle3Wrap>
        <S.ApplyCircle3 />
      </S.ApplyCircle3Wrap>
      <S.ApplyCircle4Wrap>
        <S.ApplyCircle4 />
      </S.ApplyCircle4Wrap>
    </S.ApplyHead>
  );
};

export default ApplyHead;
