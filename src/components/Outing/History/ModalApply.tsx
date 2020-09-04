import React, { FC, ReactElement } from 'react';

import ModalCategory from './ModalCategory';

import * as S from '../style';
import { OutingClose } from '../../../assets';

interface Props {
  handleMode: (mode: 'apply' | 'card') => void;
  handleModal: (isShow: boolean) => void;
}

const ModalApply: FC<Props> = ({ handleMode, handleModal }): ReactElement => {
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
      <S.ModalApplyOnlineCard
        onClick={() => {
          handleMode('card');
        }}
      >
        온라인 학생증
      </S.ModalApplyOnlineCard>
    </S.ModalApply>
  );
};

export default ModalApply;
