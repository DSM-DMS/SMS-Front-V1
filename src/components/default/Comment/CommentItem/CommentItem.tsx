import React, { FC, useState, useCallback } from 'react';
import * as S from './styles';
import CommentWrite from '../CommentWrite/CommentWrite';
import SubCommentItem from './SubCommentItem';
import { Comment } from '../../../../containers/Circle/Wanted/Detail/CircleWantedDetailContainer';

const option = {
  border: false,
  height: 30,
  placeholder: '답글을 입력하세요',
};

const CommentItem: FC<Comment> = ({ name, content, subComments, date }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const changeIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <S.Container>
      <S.Header>
        <S.HeaderRow>
          <S.UserName>{name}</S.UserName>
          <S.WriteDate>{date}</S.WriteDate>
        </S.HeaderRow>
        <S.HeaderRow>수정 | 삭제</S.HeaderRow>
      </S.Header>
      <S.Content>{content}</S.Content>
      <S.OpenWrite onClick={changeIsOpen}>
        {isOpen ? '취소' : '답글쓰기'}
      </S.OpenWrite>
      {isOpen && <CommentWrite option={option} />}
      <div>
        {subComments.map(({ date, content, name }) => (
          <SubCommentItem date={date} content={content} name={name} />
        ))}
      </div>
    </S.Container>
  );
};

export default CommentItem;
