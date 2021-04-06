import React, { FC, ReactElement, useCallback } from "react";
import { useSelector } from "react-redux";

import * as S from "../style";
import { stateType } from "../../../modules/reducer";
import { OutingStatus } from "../../../lib/api/payloads/Outing";
import { padNum } from "../../../lib/utils";

interface Props {}

const outParagraph = {
  [OutingStatus["선생님 거절"]]: "외출증 승인이 거절되었습니다.",
  [OutingStatus["학부모 거절"]]: "외출증 승인이 거절되었습니다.",
  [OutingStatus["학부모 승인"]]:
    "승인 대기중입니다. 승인 완료 시 모바일을 통해 외출을 시작해주세요.",
  [OutingStatus["선생님 승인"]]:
    "외출증이 승인되었습니다. 모바일을 통해 외출을 시작해주세요.",
  [OutingStatus["외출 시작"]]:
    "현재 외출중입니다. 학교 귀사 시 모바일을 통해 외출을 종료해주세요.",
  [OutingStatus["외출 종료"]]:
    "외출이 종료되었습니다. 선생님께 방문에 최종 확인을 받아주세요.",
  [OutingStatus["외출 인증 승인"]]:
    "외출이 최종적으로 확인 완료 및 사용이 만료되었습니다."
};

const ModalCategory: FC<Props> = (): ReactElement => {
  const { end_time, start_time, reason, place, outing_status } = useSelector(
    (state: stateType) => state.outing.selected
  );
  const isLate = +outing_status >= 2 && new Date().getTime() > end_time * 1000;

  const getLocalDate = useCallback((startTime: number) => {
    const date = new Date(startTime * 1000);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();

    return `${y}년 ${padNum(m)}월 ${d}일`;
  }, []);

  const getLocalTime = useCallback((time: number) => {
    const date = new Date(time * 1000);
    const h = date.getHours();
    const m = date.getMinutes();

    if (h > 12) return `오후 ${padNum(h)}:${padNum(m)}`;
    return `오전 ${padNum(h)}:${padNum(m)}`;
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
        {isLate ? (
          <span>만료</span>
        ) : (
          <span>{OutingStatus[outing_status]}</span>
        )}
      </S.ModalItem>

      {isLate ? (
        <S.ModalStatus>만료되었습니다.</S.ModalStatus>
      ) : (
        <S.ModalStatus>{outParagraph[outing_status]}</S.ModalStatus>
      )}
    </S.ModalList>
  );
};

export default ModalCategory;
