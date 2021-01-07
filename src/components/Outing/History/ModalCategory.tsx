import React, { FC, ReactElement, useCallback } from "react";
import { useSelector } from "react-redux";

import * as S from "../style";
import { stateType } from "../../../modules/reducer";
import { OutingStatus } from "../../../lib/api/payloads/Outing";

interface Props {}

const ModalCategory: FC<Props> = (): ReactElement => {
  const { end_time, start_time, reason, place, outing_status } = useSelector(
    (state: stateType) => state.outing.selected
  );

  const fixNum = useCallback((n: number) => (n < 10 ? `0${n}` : n), []);

  const getLocalDate = useCallback((startTime: number) => {
    const date = new Date(startTime * 1000);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();

    return `${y}년 ${fixNum(m)}월 ${d}일`;
  }, []);

  const getLocalTime = useCallback((time: number) => {
    const date = new Date(time * 1000);
    const h = date.getHours();
    const m = date.getMinutes();

    if (h > 12) return `오후 ${fixNum(h)}:${fixNum(m)}`;
    return `오전 ${fixNum(h)}:${fixNum(m)}`;
  }, []);

  return (
    <S.ModalList>
      <S.ModalItem>
        <S.ModalCategory>날짜</S.ModalCategory>
        <span>{getLocalDate(start_time)}</span>
      </S.ModalItem>
      <S.ModalItem>
        <S.ModalCategory>시간</S.ModalCategory>
        <span>
          {getLocalTime(start_time)} ~ {getLocalTime(end_time)}
        </span>
      </S.ModalItem>
      <S.ModalItem>
        <S.ModalCategory>장소</S.ModalCategory>
        <span>{place}</span>
      </S.ModalItem>
      <S.ModalItem>
        <S.ModalCategory>사유</S.ModalCategory>
        <span>{reason}</span>
      </S.ModalItem>
      <S.ModalItem>
        <S.ModalCategory>상태</S.ModalCategory>
        <span>{OutingStatus[outing_status]}</span>
      </S.ModalItem>
    </S.ModalList>
  );
};

export default ModalCategory;
