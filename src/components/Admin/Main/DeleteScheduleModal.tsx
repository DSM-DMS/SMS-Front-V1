import React, { FC, ReactElement, useCallback } from "react";

import * as S from "./style";

import { OutingWarningRedBase } from "../../../assets";
import { useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";

interface Props {
  handleCloseModal: () => void;
  removeSchedule: (scheduleUuid: string, schedulerDate: Date) => Promise<void>;
}

const DeleteScheduleModal: FC<Props> = ({
  handleCloseModal,
  removeSchedule
}): ReactElement => {
  const { targetUuid, schedulerDate } = useSelector(
    (state: stateType) => state.main
  );

  const handleRemoveSchedule = useCallback(() => {
    removeSchedule(targetUuid, schedulerDate);
    handleCloseModal();
  }, [targetUuid, schedulerDate]);

  return (
    <>
      <S.DeleteScheduleModal>
        <S.DeleteScheduleModalLine>
          <S.DeleteScheduleModalWarning
            src={OutingWarningRedBase}
            alt="warning"
            title="warning"
          />
          <S.DeleteScheduleModalText>일정삭제</S.DeleteScheduleModalText>
        </S.DeleteScheduleModalLine>
        <S.DeleteScheduleModalLine>
          일정을 삭제 하시겠습니까?
        </S.DeleteScheduleModalLine>
        <S.DeleteScheduleModalButtonWrap>
          <S.DeleteScheduleModalButton onClick={handleCloseModal}>
            취소
          </S.DeleteScheduleModalButton>
          <S.DeleteScheduleModalButton onClick={handleRemoveSchedule}>
            삭제
          </S.DeleteScheduleModalButton>
        </S.DeleteScheduleModalButtonWrap>
      </S.DeleteScheduleModal>
      <S.ScheduleModalDarkBack onClick={handleCloseModal} />
    </>
  );
};

export default DeleteScheduleModal;
