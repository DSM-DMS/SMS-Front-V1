import React, { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import * as S from "../style";
import { ModalType } from "../../Admin/Main/Main";
import { stateType } from "../../../modules/reducer";

interface Props {
  handleClickShowModal?: (type: ModalType) => void;
}

const ScheduleDetail: FC<Props> = ({ handleClickShowModal }): ReactElement => {
  const { schedules } = useSelector((state: stateType) => state.main);
  const location = useLocation();

  const handleShowEdit = () => {
    handleClickShowModal("edit");
  };

  const handleShowDelete = () => {
    handleClickShowModal("delete");
  };

  const getLocalDate = (dateNum: number) => {
    const date = new Date(dateNum);
    const padNum = (n: number) => (n < 10 ? `0${n}` : n + "");

    return `${padNum(date.getMonth() + 1)}.${padNum(date.getDate())}`;
  };

  return (
    <S.ScheduleDetail>
      <S.DetailHeader>
        <S.DetailHeaderTop>
          <S.DetailTitle>세부내용</S.DetailTitle>
          {location.pathname.includes("admin") && (
            <S.DetailAddSchedule
              onClick={() => {
                handleClickShowModal("add");
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
        {schedules.map(({ detail, start_date, end_date, schedule_uuid }) => (
          <S.DetailBodyItem key={schedule_uuid}>
            <S.DetailBodyItemData>{detail}</S.DetailBodyItemData>
            <S.DetailBodyItemData>
              {start_date === end_date
                ? getLocalDate(start_date)
                : `${getLocalDate(start_date)} - ${getLocalDate(end_date)}`}
            </S.DetailBodyItemData>
            {location.pathname.includes("admin") && (
              <S.DetailBodyItemButtonWrap>
                <S.DetailBodyItemButton onClick={handleShowEdit}>
                  수정
                </S.DetailBodyItemButton>
                <S.DetailBodyItemButton onClick={handleShowDelete}>
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
