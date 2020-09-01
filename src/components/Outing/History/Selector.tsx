import React, { FC, ReactElement } from 'react';

import * as S from '../style';
import { OutingTriangle } from '../../../assets';

interface Props {}

const History: FC<Props> = (): ReactElement => {
  return (
    <S.HistoryPageSelector>
      <S.HistoryPageSelectorItem>
        <S.HistoryPageSelectorItemTri
          src={OutingTriangle}
          alt="prev"
          title="prev"
        />
      </S.HistoryPageSelectorItem>
      <S.HistoryPageSelectorItem>1</S.HistoryPageSelectorItem>
      <S.HistoryPageSelectorItem>2</S.HistoryPageSelectorItem>
      <S.HistoryPageSelectorItem>3</S.HistoryPageSelectorItem>
      <S.HistoryPageSelectorItem>
        <S.HistoryPageSelectorItemTri
          src={OutingTriangle}
          alt="next"
          title="next"
        />
      </S.HistoryPageSelectorItem>
    </S.HistoryPageSelector>
  );
};

export default History;
