import React, { FC, ReactElement, useState, useEffect } from 'react';

import * as S from './style';
import CircleBack from './CircleBack';
import { ModalType } from './Main';

import { OutingClose } from '../../../assets';

interface Props {
  handleClickCloseModal?: () => void;
  type: ModalType;
}

const ScheduleModal: FC<Props> = ({
  handleClickCloseModal,
  type,
}): ReactElement => {
  const [start, setStart] = useState<string>('');
  const [end, setEnd] = useState<string>('');
  const [detail, setDetail] = useState<string>('');

  useEffect(() => {
    if (type === 'edit') {
      // TODO : get edit information
    }
  }, [type]);

  return (
    <>
      <S.ScheduleModalWrap>
        <S.ScheduleModalClose
          src={OutingClose}
          alt="close"
          title="close"
          onClick={handleClickCloseModal}
        />
        <S.ScheduleModalTitle>
          {type === 'add' ? '일정 추가' : '일정 수정'}
        </S.ScheduleModalTitle>
        <S.ScheduleModalForm>
          <S.ScheduleModalFormTimes>
            <S.ScheduleModalFormTitle>기간</S.ScheduleModalFormTitle>
            <S.ScheduleModalFormInnerWrap>
              <S.ScheduleModalFormInput
                type="date"
                placeholder="시작일을 선택해 주세요."
                onChange={(e) => {
                  setStart(e.currentTarget.value);
                }}
                max={end}
              />
              <S.ScheduleModalFormTilde>~</S.ScheduleModalFormTilde>
              <S.ScheduleModalFormInput
                type="date"
                placeholder="종료일을 선택해 주세요."
                onChange={(e) => {
                  setEnd(e.currentTarget.value);
                }}
                min={start}
              />
            </S.ScheduleModalFormInnerWrap>
          </S.ScheduleModalFormTimes>
          <S.ScheduleModalFormDetail>
            <S.ScheduleModalFormTitle>일정 내용</S.ScheduleModalFormTitle>
            <S.ScheduleModalFormInnerWrap>
              <S.ScheduleModalFormInput
                type="text"
                placeholder="세부 내용을 입력해주세요"
                onChange={(e) => {
                  setDetail(e.currentTarget.value);
                }}
                value={detail}
              />
            </S.ScheduleModalFormInnerWrap>
          </S.ScheduleModalFormDetail>
          <S.ScheduleModalFormButtonWrap>
            <S.ScheduleModalButton onClick={handleClickCloseModal}>
              취소
            </S.ScheduleModalButton>
            <S.ScheduleModalButton onClick={handleClickCloseModal}>
              {type === 'add' ? '추가' : '수정'}
            </S.ScheduleModalButton>
          </S.ScheduleModalFormButtonWrap>
        </S.ScheduleModalForm>
        <S.ScheduleModalCircleBackWrap>
          <CircleBack />
        </S.ScheduleModalCircleBackWrap>
      </S.ScheduleModalWrap>
      <S.ScheduleModalDarkBack onClick={handleClickCloseModal} />
    </>
  );
};

export default ScheduleModal;
