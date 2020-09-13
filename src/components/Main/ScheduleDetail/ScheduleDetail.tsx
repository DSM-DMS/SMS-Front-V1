import React, { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ModalType } from '../../Admin/Main/Main';
import * as S from '../style';
import { stateType } from '../../../modules/reducer';

interface Props {
  handleClickShowModal?: (type: ModalType) => void;
}

const ScheduleDetail: FC<Props> = ({ handleClickShowModal }): ReactElement => {
  const { schedules } = useSelector((state: stateType) => state.scheduleDetail);
  const location = useLocation();

  return (
    <S.ScheduleDetail>
      <S.DetailHeader>
        <S.DetailHeaderTop>
          <S.DetailTitle>세부내용</S.DetailTitle>
          {location.pathname.split('/')[1] === 'admin' && (
            <S.DetailAddSchedule
              onClick={() => {
                handleClickShowModal('add');
              }}
            >
              <span>일정 추가</span>
            </S.DetailAddSchedule>
          )}
        </S.DetailHeaderTop>
        <S.DetailHead>
          <S.DetailHeadData>일정</S.DetailHeadData>
          <S.DetailHeadData>날짜</S.DetailHeadData>
        </S.DetailHead>
      </S.DetailHeader>
      <S.DetailBody>
        {schedules.map(({ schedule, startDate, endDate }, i) => (
          <S.DetailBodyItem key={i}>
            <S.DetailBodyItemData>{schedule}</S.DetailBodyItemData>
            <S.DetailBodyItemData>
              {startDate === endDate ? startDate : `${startDate} - ${endDate}`}
            </S.DetailBodyItemData>
            {location.pathname.split('/')[1] === 'admin' && (
              <S.DetailBodyItemButtonWrap>
                <S.DetailBodyItemButton
                  onClick={() => {
                    handleClickShowModal('edit');
                  }}
                >
                  수정
                </S.DetailBodyItemButton>
                <S.DetailBodyItemButton
                  onClick={() => {
                    handleClickShowModal('delete');
                  }}
                >
                  삭제
                </S.DetailBodyItemButton>
              </S.DetailBodyItemButtonWrap>
            )}
          </S.DetailBodyItem>
        ))}
      </S.DetailBody>
    </S.ScheduleDetail>
  );
};

export default ScheduleDetail;
