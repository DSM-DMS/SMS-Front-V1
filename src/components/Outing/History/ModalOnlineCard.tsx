import React, { FC, ReactElement } from 'react';

import ModalCategory from './ModalCategory';

import * as S from '../style';
import { OutingUser, OutingClose } from '../../../assets';

interface Props {
  handleMode: (mode: 'apply' | 'card') => void;
  handleModal: (isShow: boolean) => void;
}

const ModalOnlineCard: FC<Props> = ({
  handleMode,
  handleModal,
}): ReactElement => {
  return (
    <S.ModalOnlineCard>
      <S.OnlineCardTitle>온라인 외출증</S.OnlineCardTitle>
      <S.OnlineCardContentWrap>
        <S.OnlineCardUserPictureWrap>
          <S.OnlineCardUserPicture src={OutingUser} alt="user" title="user" />
        </S.OnlineCardUserPictureWrap>
        <ModalCategory />
      </S.OnlineCardContentWrap>
      <S.OnlineCardInfo>
        <S.OnlineCardMoveApply
          onClick={() => {
            handleMode('apply');
          }}
        >
          신청 정보
        </S.OnlineCardMoveApply>
        <S.ModalClose
          src={OutingClose}
          alt="close"
          title="close"
          onClick={() => {
            handleModal(false);
          }}
        />
        <S.OnlineCardDate>2020.07.17</S.OnlineCardDate>
      </S.OnlineCardInfo>
    </S.ModalOnlineCard>
  );
};

export default ModalOnlineCard;
