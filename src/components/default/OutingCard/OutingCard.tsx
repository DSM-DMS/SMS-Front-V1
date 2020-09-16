import React, { memo, useCallback } from 'react';
import { MouseEvent } from 'react';
import { useEffect } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  OutingCard,
  updateOutingCardModal,
} from '../../../modules/action/outingCard';
import * as S from './styles';

interface Props extends OutingCard {
  isClicked: boolean;
}

const OutingCard: FC<Props> = ({
  id,
  number,
  name,
  date,
  time,
  where,
  reason,
  isClicked,
}) => {
  const dispatch = useDispatch();
  const clickHandler = useCallback(() => {
    dispatch(updateOutingCardModal(id));
  }, []);
  return (
    <S.Container onClick={isClicked ? clickHandler : undefined}>
      <S.Header>
        <div>
          {number} {name}
        </div>
        <div>|</div>
      </S.Header>
      <S.Body>
        <p>{where}</p>
        <S.FlexBetween>
          <div>{date}</div>
          <S.FlexBetween>
            <S.Bar>-</S.Bar>
            <div>
              <div>17:30</div>
              <div>20:30</div>
            </div>
          </S.FlexBetween>
        </S.FlexBetween>
      </S.Body>
    </S.Container>
  );
};

export default memo(OutingCard);
