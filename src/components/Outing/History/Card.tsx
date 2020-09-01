import React, { FC, ReactElement } from 'react';

import * as S from '../style';
import { OutingClose } from '../../../assets';

interface Props {}

const HistoryCard: FC<Props> = (): ReactElement => {
  return (
    <S.HistoryCard>
      <S.CardTop>
        <S.CardUser>2301 강신희</S.CardUser>
        <S.CardPlace>신성동 하나로마트</S.CardPlace>
      </S.CardTop>
      <S.CardBottom>
        <S.CardDate>2020년 07년 17일</S.CardDate>
        <S.CardTime>
          <span>17:30</span>
          <span>20:30</span>
        </S.CardTime>
      </S.CardBottom>
      <S.HistoryModalWrap>
        <S.ModalBack />
        <S.ModalContent>
          <div>
            <h3>신청 정보</h3>
            <ul>
              <li>
                <span>날짜</span>
                <span>2020년 07년 17일</span>
              </li>
              <li>
                <span>시간</span>
                <span>오후 05:30 - 오후 08:30 </span>
              </li>
              <li>
                <span>장소</span>
                <span>유재민집</span>
              </li>
              <li>
                <span>사유</span>
                <span>콩이가 너무너무 보고 싶어서ㅠㅠㅠ 고앵쓰 보고싶어</span>
              </li>
              <li>
                <span>상태</span>
                <span>승인대기</span>
              </li>
            </ul>
            <img src={OutingClose} alt="close modal" title="close modal" />
          </div>
        </S.ModalContent>
      </S.HistoryModalWrap>
    </S.HistoryCard>
  );
};

export default HistoryCard;
