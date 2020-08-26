import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import { NavIconNoticeBlue } from '../../../assets';
import { Board } from '../../default';
import * as S from './styles';
import { makeFilterFunc } from '../../../lib/api';
import { BoardObj } from '../../default/Board/Board';

interface Props {
  data: BoardObj[];
}

const NoticeContainer: FC<Props> = ({ data }) => {
  const noticeFilterFunc = makeFilterFunc<BoardObj>(data, (data) => data.title);
  return (
    <S.Container>
      <Board
        boardData={data}
        date={true}
        title="공지사항"
        imgSrc={NavIconNoticeBlue}
        filterFunc={noticeFilterFunc}
      />
    </S.Container>
  );
};

export default NoticeContainer;
