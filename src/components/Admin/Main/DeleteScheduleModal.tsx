import React, { FC, ReactElement } from 'react';

import * as S from './style';

import { OutingWarningRedBase } from '../../../assets';

interface Props {
  handleClickCloseModal: () => void;
}

const DeleteScheduleModal: FC<Props> = ({
  handleClickCloseModal,
}): ReactElement => {
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
          정말 [ {'일정 내용'} ] 일정을 삭제 하시겠습니까?
        </S.DeleteScheduleModalLine>
        <S.DeleteScheduleModalButtonWrap>
          <S.DeleteScheduleModalButton onClick={handleClickCloseModal}>
            취소
          </S.DeleteScheduleModalButton>
          <S.DeleteScheduleModalButton onClick={handleClickCloseModal}>
            삭제
          </S.DeleteScheduleModalButton>
        </S.DeleteScheduleModalButtonWrap>
      </S.DeleteScheduleModal>
      <S.ScheduleModalDarkBack onClick={handleClickCloseModal} />
    </>
  );
};

export default DeleteScheduleModal;
