import React, { FC } from 'react';
import * as S from './styles';
import CommentWrite from './CommentWrite/CommentWrite';
import { Comment as CommentType } from '../../../containers/Circle/Wanted/Detail/CircleWantedDetailContainer';
import CommentList from './CommentList/CommentList';

interface Props {
  comments: CommentType[];
}

const option = {
  border: true,
  height: 70,
  placeholder:
    '주제와 맞지 않는 댓글이나 저작권 등, 다른 사람의 권리를 침해하는 댓글은 자제해 주세요.',
};

const Comment: FC<Props> = ({ comments }) => {
  return (
    <S.Container>
      <S.HeaderText>질문하기</S.HeaderText>
      <CommentWrite option={option} />
      <CommentList comments={comments} />
    </S.Container>
  );
};

export default Comment;
