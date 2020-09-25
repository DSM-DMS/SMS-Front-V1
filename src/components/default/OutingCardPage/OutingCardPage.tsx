import React, { FC, useMemo, useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { stateType } from '../../../modules/reducer';
import OutingCardModal from '../Modal/OutingCardModal/OutingCardModal';
import OutingCard from '../OutingCard/OutingCard';
import * as S from './styles';

const names = ['번호', '학번', '이름', '외출시간', '사유'];

interface Props {
  title: string;
  isClicked: boolean;
}

const OutingCardPage: FC<Props> = ({ title, isClicked }) => {
  const data = useSelector((state: stateType) => state.outingCard.list);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>{title}</S.HeaderText>
        <div>
          <div>필터링</div>
          <button>초기화</button>
        </div>
      </S.Header>
      <S.CardContainer>
        {data.map(({ id, number, name, date, time, where, reason }) => (
          <OutingCard
            isClicked={isClicked}
            id={id}
            number={number}
            name={name}
            date={date}
            time={time}
            where={where}
            reason={reason}
          />
        ))}
      </S.CardContainer>
      <OutingCardModal />
    </S.Container>
  );
};

export default OutingCardPage;
