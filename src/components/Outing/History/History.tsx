import React, { FC, ReactElement } from 'react';

import HistoryCard from './HistoryCard';
import HistorySelector from './HistorySelector';

import * as S from '../style';
import { OutingHistory } from '../../../assets';

interface Props {}

const History: FC<Props> = (): ReactElement => {
  return (
    <S.HistoryWarp>
      <S.HistoryHead>
        <img src={OutingHistory} alt="history" title="history" />
        <S.HistoryTitle>내 외출신청 내역</S.HistoryTitle>
      </S.HistoryHead>
      <div>
        <S.HistoryCardWarp>
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </S.HistoryCardWarp>
        <HistorySelector />
      </div>
    </S.HistoryWarp>
  );
};

export default History;
