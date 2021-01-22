import React, { FC, ReactElement } from 'react';

import * as S from './style';

interface Props {}

const CircleBack: FC<Props> = (): ReactElement => {
  return (
    <S.CircleBackWrap>
      <S.CircleBackSmallFill />
      <S.CircleBackSmallHollow>
        <div />
      </S.CircleBackSmallHollow>
      <S.CircleBackMiddleFill />
      <S.CircleBackMiddleHollow>
        <div />
      </S.CircleBackMiddleHollow>
      <S.CircleBackBigFill />
    </S.CircleBackWrap>
  );
};

export default CircleBack;
