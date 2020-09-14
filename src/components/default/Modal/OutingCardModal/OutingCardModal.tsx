import React from 'react';
import { FC } from 'react';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { stateType } from '../../../../modules/reducer';
import { useState } from 'react';
import { useCallback } from 'react';
import { updateOutingCardModal } from '../../../../modules/action/outingCard';

const OutingCardModal: FC = () => {
  const dispatch = useDispatch();
  const detailId = useSelector((state: stateType) => state.outingCard.id);
  const data = useSelector((state: stateType) =>
    state.outingCard.list.find(({ id }) => id === detailId),
  );

  const closeModal = useCallback(() => {
    dispatch(updateOutingCardModal(0));
  }, []);

  return (
    <>
      {data && (
        <S.Container>
          <S.Modal>
            <h1>신청정보</h1>
            <hr />
            <S.Content>
              <div>
                <div>
                  <strong>학번</strong>
                  <span>{data.number}</span>
                </div>
                <div>
                  <strong>이름</strong>
                  <span>{data.name}</span>
                </div>
                <div>
                  <strong>날짜</strong>
                  <span>{data.date}</span>
                </div>
                <div>
                  <strong>시간</strong>
                  <span>{data.time}</span>
                </div>
                <div>
                  <strong>장소</strong>
                  <span>{data.where}</span>
                </div>
                <div>
                  <strong>사유</strong>
                  <span>{data.reason}</span>
                </div>
              </div>
              <div>
                <S.Button color="#242424">승인</S.Button>
                <S.Button color="#FF5555">거절</S.Button>
              </div>
            </S.Content>
            <S.CloseButton onClick={closeModal} />
          </S.Modal>
        </S.Container>
      )}
    </>
  );
};

export default OutingCardModal;
