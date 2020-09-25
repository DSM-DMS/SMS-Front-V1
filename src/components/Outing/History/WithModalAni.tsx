import React, { FC } from 'react';

import { WithModalProps } from './Modal';
import ModalApply from './ModalApply';
import ModalOnlineCard from './ModalOnlineCard';

import * as S from '../style';

const WithModalAni = (MyComponent: FC<WithModalProps>) => (
  props: WithModalProps,
) => {
  const { handleModal, handleMode, outingState, setOutingState } = props;

  return (
    <S.WithModalAniWrap>
      <MyComponent
        handleModal={handleModal}
        handleMode={handleMode}
        outingState={outingState}
        setOutingState={setOutingState}
      />
    </S.WithModalAniWrap>
  );
};

const WithModalApply = WithModalAni(ModalApply);
const WithModalOnlineCard = WithModalAni(ModalOnlineCard);

export { WithModalApply, WithModalOnlineCard };
