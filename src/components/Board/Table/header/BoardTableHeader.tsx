import React, { FC } from 'react';
import * as S from './styles';

interface Props {
  date?: boolean;
}

const BoardTableHeader: FC<Props> = ({ date }) => {
  return (
    <S.Container>
      <div>번호</div>
      <div>제목</div>
      <div>{date ? '날짜' : '동아리'}</div>
      <div>조회수</div>
    </S.Container>
  );
};

export default BoardTableHeader;
