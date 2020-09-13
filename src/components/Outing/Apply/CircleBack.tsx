import React, { FC, ReactElement } from 'react';

import * as S from '../style';

interface Props {}

const CircleBack: FC<Props> = (): ReactElement => {
  return (
    <>
      <S.ApplyCircle1 />
      <S.ApplyCircle2 />
      <S.ApplyCircle3Wrap>
        <S.ApplyCircle3 />
      </S.ApplyCircle3Wrap>
      <S.ApplyCircle4Wrap>
        <S.ApplyCircle4 />
      </S.ApplyCircle4Wrap>
    </>
  );
};

export default CircleBack;
