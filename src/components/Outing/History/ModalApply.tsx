import React, { FC, ReactElement } from 'react';

import { WithModalProps, OUT, APPROVE } from './Modal';
import ModalCategory from './ModalCategory';

import * as S from '../style';
import { OutingClose } from '../../../assets';

const ModalApply: FC<WithModalProps> = ({
  handleMode,
  handleModal,
  outingState,
  setOutingState,
}): ReactElement => {
  return (
    <S.ModalApply>
      <S.ModalTitle>신청 정보</S.ModalTitle>
      <ModalCategory />
      <S.ModalClose
        src={OutingClose}
        alt="close modal"
        title="close modal"
        onClick={() => {
          handleModal(false);
        }}
      />
      {outingState === APPROVE ? (
        <S.ModalApplyOnlineCard
          onClick={() => {
            setOutingState(OUT);
          }}
        >
          외출 하기
        </S.ModalApplyOnlineCard>
      ) : (
        <S.ModalApplyOnlineCard
          onClick={() => {
            handleMode('card');
          }}
        >
          온라인 학생증
        </S.ModalApplyOnlineCard>
      )}
    </S.ModalApply>
  );
};

export default ModalApply;
