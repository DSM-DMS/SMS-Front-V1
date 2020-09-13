import React, { FC, ReactElement } from 'react';

import { Card } from './History';

import * as S from '../style';

interface Props extends Card {
  handleModal: (isShow: boolean) => void;
}

const HistoryCard: FC<Props> = ({
  date,
  inTime,
  info,
  outTime,
  place,
  emergency,
  handleModal,
}): ReactElement => {
  return (
    <S.HistoryCard
      onClick={() => {
        handleModal(true);
      }}
    >
      <S.CardTop>
        <S.CardUser emergency={emergency}>{info}</S.CardUser>
        <S.CardPlace>{place}</S.CardPlace>
      </S.CardTop>
      <S.CardBottom>
        <S.CardDate>{date}</S.CardDate>
        <S.CardTime>
          <span>{outTime}</span>
          <span>{inTime}</span>
        </S.CardTime>
      </S.CardBottom>
    </S.HistoryCard>
  );
};

export default HistoryCard;
