import React, { FC, ReactElement } from 'react';

import * as S from '../style';

interface Props {}

const info = {
  date: '2020년 07월 17일',
  time: `오후 05:30 - 오후 08:30`,
  place: '유재민 집',
  reason: '콩이 보러',
  status: '승인대기',
};

const ModalCategory: FC<Props> = (): ReactElement => {
  return (
    <S.ModalList>
      <S.ModalItem>
        <S.ModalCategory>날짜</S.ModalCategory>
        <span>{info.date}</span>
      </S.ModalItem>
      <S.ModalItem>
        <S.ModalCategory>시간</S.ModalCategory>
        <span>{info.time}</span>
      </S.ModalItem>
      <S.ModalItem>
        <S.ModalCategory>장소</S.ModalCategory>
        <span>{info.place}</span>
      </S.ModalItem>
      <S.ModalItem>
        <S.ModalCategory>사유</S.ModalCategory>
        <span>{info.reason}</span>
      </S.ModalItem>
      <S.ModalItem>
        <S.ModalCategory>상태</S.ModalCategory>
        <span>{info.status}</span>
      </S.ModalItem>
    </S.ModalList>
  );
};

export default ModalCategory;
