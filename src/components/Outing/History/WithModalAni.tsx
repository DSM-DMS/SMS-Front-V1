import React, { FC } from "react";

import { WithModalProps } from "./Modal";
import ModalApply from "./ModalApply";
import ModalOnlineCard from "./ModalOnlineCard";

import * as S from "../style";

const WithModalAni = (MyComponent: FC<WithModalProps>) => ({
  closeModal,
  applyModal,
  onlineModal,
  outingStatus,
  selectedOuting
}: WithModalProps) => {
  return (
    <S.WithModalAniWrap>
      <MyComponent
        closeModal={closeModal}
        applyModal={applyModal}
        onlineModal={onlineModal}
        outingStatus={outingStatus}
        selectedOuting={selectedOuting}
      />
    </S.WithModalAniWrap>
  );
};

const WithModalApply = WithModalAni(ModalApply);
const WithModalOnlineCard = WithModalAni(ModalOnlineCard);

export { WithModalApply, WithModalOnlineCard };
