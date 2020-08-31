import React, { FC } from 'react';
import * as S from './styles';
import CommentItem from '../CommentItem/CommentItem';
import { Comment } from '../../../../containers/Circle/Wanted/Detail/CircleWantedDetailContainer';

interface Props {
  comments: Comment[];
}

const CommentList: FC<Props> = ({ comments }) => {
  return (
    <S.Container>
      {comments.map(({ name, subComments, content, date }) => (
        <CommentItem
          name={name}
          subComments={subComments}
          content={content}
          date={date}
        />
      ))}
    </S.Container>
  );
};

export default CommentList;
