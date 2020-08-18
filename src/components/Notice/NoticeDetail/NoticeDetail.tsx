import React, { FC } from 'react';
import * as S from './styles';

interface Props {
  content: string;
}

const NoticeDetail: FC<Props> = ({ content }) => {
  return (
    <S.Container>
      <S.Hr />
      <S.Content>{content}</S.Content>
    </S.Container>
  );
};

export default NoticeDetail;
