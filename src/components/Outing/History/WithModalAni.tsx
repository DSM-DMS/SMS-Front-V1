import React, { FC } from "react";

import { WithModalProps } from "./Modal";
import ModalApply from "./ModalApply";
import ModalOnlineCard from "./ModalOnlineCard";

import * as S from "../style";

const WithModalAni = (MyComponent: FC<WithModalProps>) => ({
  handleMode,
  closeModal,
  outingStatus
}: WithModalProps) => {
  return (
    <S.WithModalAniWrap>
      <MyComponent
        closeModal={closeModal}
        handleMode={handleMode}
        outingStatus={outingStatus}
      />
    </S.WithModalAniWrap>
  );
};

const WithModalApply = WithModalAni(ModalApply);
const WithModalOnlineCard = WithModalAni(ModalOnlineCard);

export { WithModalApply, WithModalOnlineCard };
