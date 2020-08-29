import React, { FC } from 'react';
import * as S from './styles';
import { RightContent } from '../../default';

interface Props {
  imgSrc: string;
  tags: string[];
  projects: string[];
}

const InfoDetailSub: FC<Props> = ({ imgSrc, tags, projects }) => {
  return (
    <S.Container>
      <div>
        <img src={imgSrc} />
      </div>
      <RightContent>
        <S.H3>태그</S.H3>
        {tags.map((tag) => (
          <S.HashTag>{tag}</S.HashTag>
        ))}
      </RightContent>
      <RightContent>
        <S.H3>진행 프로젝트</S.H3>
        {projects.map((project) => (
          <div>{project}</div>
        ))}
      </RightContent>
      <RightContent>
        <S.H3>공지사항</S.H3>
        <div>공지사항1</div>
        <div>공지사항2</div>
      </RightContent>
    </S.Container>
  );
};

export default InfoDetailSub;
