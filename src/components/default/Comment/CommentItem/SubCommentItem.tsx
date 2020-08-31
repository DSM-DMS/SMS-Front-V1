import React, { FC, useState, useCallback } from 'react';
import * as S from './styles';
import { ReComment } from '../../../../assets';
import { SubComment } from '../../../../containers/Circle/Wanted/Detail/CircleWantedDetailContainer';

const SubCommentItem: FC<SubComment> = ({ name, date, content }) => {
  return (
    <S.SubContainer>
      <S.ImgWrap>
        <img src={ReComment} />
      </S.ImgWrap>
      <S.Flex1>
        <S.Header>
          <S.HeaderRow>
            <S.UserName>{name}</S.UserName>
            <S.WriteDate>{date}</S.WriteDate>
          </S.HeaderRow>
          <S.HeaderRow>수정 | 삭제</S.HeaderRow>
        </S.Header>
        <S.Content>{content}</S.Content>
      </S.Flex1>
    </S.SubContainer>
  );
};

export default SubCommentItem;
