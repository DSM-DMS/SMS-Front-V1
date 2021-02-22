import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";

import { WithModalProps } from "./Modal";
import ModalCategory from "./ModalCategory";

import * as S from "../style";
import { OutingUser, OutingClose } from "../../../assets";
import { stateType } from "../../../modules/reducer";
import { SERVER } from "../../../lib/api/client";

const ModalOnlineCard: FC<WithModalProps> = ({
  applyModal,
  closeModal
}): ReactElement => {
  const { profile_uri } = useSelector((state: stateType) => state.header);

  return (
    <S.ModalOnlineCard>
      <S.OnlineCardTitle>온라인 외출증</S.OnlineCardTitle>
      <S.OnlineCardContentWrap>
        <S.OnlineCardUserPictureWrap>
          <S.OnlineCardUserPicture
            src={profile_uri ? `${SERVER.s3Url}/${profile_uri}` : OutingUser}
            alt="user"
            title="user"
          />
        </S.OnlineCardUserPictureWrap>
        <ModalCategory />
      </S.OnlineCardContentWrap>
      <S.OnlineCardInfo>
        <S.OnlineCardMoveApply onClick={applyModal}>
          신청 정보
        </S.OnlineCardMoveApply>
        <S.ModalClose
          src={OutingClose}
          alt="close"
          title="close"
          onClick={closeModal}
        />
      </S.OnlineCardInfo>
    </S.ModalOnlineCard>
  );
};

export default ModalOnlineCard;
