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
        <p>
          <img src={OutingWarningRedBase} alt="warning" title="warning" />
          <span>일정삭제</span>
        </p>
        <p>정말 [ {'일정 내용'} ] 일정을 삭제 하시겠습니까?</p>
        <div>
          <button>취소</button>
          <button>삭제</button>
        </div>
      </S.DeleteScheduleModal>
      <S.ScheduleModalDarkBack onClick={handleClickCloseModal} />
    </>
  );
};

export default DeleteScheduleModal;
