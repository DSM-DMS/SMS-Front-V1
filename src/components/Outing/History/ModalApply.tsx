import React, { FC, ReactElement } from "react";

import { WithModalProps } from "./Modal";
import ModalCategory from "./ModalCategory";

import * as S from "../style";
import { OutingClose } from "../../../assets";
import { OutingStatus } from "../../../lib/api/payloads/Outing";

const ModalApply: FC<WithModalProps> = ({
  handleMode,
  closeModal,
  outingStatus
}): ReactElement => {
  return (
    <S.ModalApply>
      <S.ModalTitle>신청 정보</S.ModalTitle>
      <ModalCategory />
      <S.ModalClose
        src={OutingClose}
        alt="close modal"
        title="close modal"
        onClick={closeModal}
      />
      {OutingStatus[outingStatus] === OutingStatus[2] ? (
        <S.ModalApplyOnlineCard>외출 하기</S.ModalApplyOnlineCard>
      ) : (
        <S.ModalApplyOnlineCard
          onClick={() => {
            handleMode("card");
          }}
        >
          온라인 학생증
        </S.ModalApplyOnlineCard>
      )}
    </S.ModalApply>
  );
};

export default ModalApply;
