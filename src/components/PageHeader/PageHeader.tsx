import React, { FC } from 'react';
import * as S from './styles';

interface Props {
  imgSrc: string;
  title: string;
  type?: string;
}

const PageHeader: FC<Props> = ({ imgSrc, title, type }) => {
  return (
    <S.Container type={type}>
      <S.Img src={imgSrc} />
      <S.Title type={type}>{title}</S.Title>
    </S.Container>
  );
};

export default PageHeader;
