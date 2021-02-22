import React, { FC, ReactElement } from "react";

import { WithModalProps } from "./Modal";
import ModalCategory from "./ModalCategory";

import * as S from "../style";
import { OutingClose } from "../../../assets";
import WithLoadingContainer, {
  LoadingProps
} from "../../../containers/Loading/WithLoadingContainer";
import { Loading } from "../../default";

interface Props extends WithModalProps, LoadingProps {}

const ModalApply: FC<Props> = ({
  onlineModal,
  closeModal,
  loading
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
      <S.ModalButtonWrap>
        <S.OnlineCardButton onClick={onlineModal}>
          온라인 학생증
        </S.OnlineCardButton>
        {loading && <Loading />}
      </S.ModalButtonWrap>
    </S.ModalApply>
  );
};

export default WithLoadingContainer(ModalApply);
