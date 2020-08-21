import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import { NavIconNoticeBlue } from '../../../assets';
import { Board } from '../../default';
import * as S from './styles';
import { NoticeFilterFunc } from '../../../lib/api';
import { BoardObj } from '../../default/Board/Board';

interface Props {
  data: BoardObj[];
}

const NoticeContainer: FC<Props> = ({ data }) => {
  return (
    <S.Container>
      <Board
        boardData={data}
        date={true}
        title="공지사항"
        imgSrc={NavIconNoticeBlue}
        filterFunc={NoticeFilterFunc}
      />
    </S.Container>
  );
};

export default NoticeContainer;
