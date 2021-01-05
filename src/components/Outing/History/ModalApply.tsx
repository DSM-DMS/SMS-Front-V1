import React, { FC, ReactElement, useCallback } from "react";
import { toast } from "react-toastify";

import { WithModalProps } from "./Modal";
import ModalCategory from "./ModalCategory";

import * as S from "../style";
import { OutingClose } from "../../../assets";
import { OutingStatus } from "../../../lib/api/payloads/Outing";
import {
  postStudentOutingAction,
  START_OUTING,
  END_OUTING,
  StudentOutingAction
} from "../../../lib/api/Outing";

const ModalApply: FC<WithModalProps> = ({
  onlineModal,
  closeModal,
  outingStatus,
  selectedOuting
}): ReactElement => {
  const selectedDate =
    selectedOuting &&
    new Date(selectedOuting.start_time * 1000).toLocaleDateString();
  const todayDate = new Date().toLocaleDateString();

  const controlOuting = useCallback(
    async (uuid: string, action: StudentOutingAction) => {
      try {
        await postStudentOutingAction(uuid, action);
        if (action === START_OUTING) {
          toast.success("외출을 시작합니다.");
        } else {
          toast.success("외출을 종료합니다.");
        }
      } catch (err) {
        const status = err?.response?.status;

        if (status === 403) {
          toast.error("본인이 신청한 외출증이 아닙니다.");
        } else if (status === 404) {
          toast.error("존재하지 않는 외출증입니다.");
        }
      }
    },
    []
  );

  const startOuting = () => {
    controlOuting(selectedOuting.outing_uuid, START_OUTING);
  };

  const endOuting = () => {
    controlOuting(selectedOuting.outing_uuid, END_OUTING);
  };

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
        {OutingStatus[outingStatus] === OutingStatus[2] &&
          selectedDate === todayDate && (
            <S.OutingStartBtn onClick={startOuting}>외출 시작</S.OutingStartBtn>
          )}
        {OutingStatus[outingStatus] === OutingStatus[3] &&
          selectedDate === todayDate && (
            <S.OutingEndBtn onClick={endOuting}>외출 종료</S.OutingEndBtn>
          )}
      </S.ModalButtonWrap>
    </S.ModalApply>
  );
};

export default ModalApply;
