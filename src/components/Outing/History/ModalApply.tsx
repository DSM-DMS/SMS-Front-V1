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
import { getAxiosError } from "../../../lib/utils";
import WithLoadingContainer, {
  LoadingProps
} from "../../../containers/Loading/WithLoadingContainer";
import { Loading } from "../../default";

interface Props extends WithModalProps, LoadingProps {}

const ModalApply: FC<Props> = ({
  onlineModal,
  closeModal,
  outingStatus,
  selectedOuting,
  loading,
  startLoading,
  endLoading
}): ReactElement => {
  const selectedDate =
    selectedOuting &&
    new Date(selectedOuting.start_time * 1000).toLocaleDateString();
  const todayDate = new Date().toLocaleDateString();

  const controlOuting = useCallback(
    async (uuid: string, action: StudentOutingAction) => {
      startLoading();
      try {
        await postStudentOutingAction(uuid, action);
        if (action === START_OUTING) {
          toast.success("외출을 시작합니다.");
        } else {
          toast.success("외출을 종료합니다.");
        }
      } catch (err) {
        const { status, code } = getAxiosError(err);

        if (status === 404) {
          toast.error("존재하지 않는 외출증입니다.");
        } else if (status === 409) {
          switch (code) {
            case -2101:
              toast.error("학부모가 외출을 아직 승인하지 않았습니다.");
              break;
            case -2102:
              toast.error("학부모가 외출을 거절했습니다");
              break;
            case -2103:
              toast.error("학부모가 승인했습니다.");
              break;
            case -2104:
              toast.error("선생이 외출을 아직 승인하지 않았습니다.");
              break;
            case -2105:
              toast.error("선생이 외출을 거절했습니다.");
              break;
            case -2106:
              toast.error("이미 선생이 승인한 외출증입니다.");
              break;
            case -2107:
              toast.error("아직 외출을 하지 않았습니다.");
              break;
            case -2108:
              toast.error("이미 외출한 외출증입니다.");
              break;
            case -2109:
              toast.error("아직 외출이 완료되지 않았습니다.");
              break;
            case -2110:
              toast.error("이미 외출이 완료 된 외출증입니다.");
              break;
            case -2111:
              toast.error("이미 외출 확인이 완료된 외출증입니다.");
              break;
            default:
              toast.error("잘못된 접근입니다.");
              break;
          }
        }
      }
      endLoading();
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
        {loading && <Loading />}
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

export default WithLoadingContainer(ModalApply);
