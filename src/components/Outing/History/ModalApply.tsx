import React, { FC, ReactElement } from "react";

import { WithModalProps } from "./Modal";
import ModalCategory from "./ModalCategory";

import * as S from "../style";
import { OutingClose } from "../../../assets";

interface Props extends WithModalProps {}

const ModalApply: FC<Props> = ({ closeModal }): ReactElement => {
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
    </S.ModalApply>
  );
};

export default ModalApply;
