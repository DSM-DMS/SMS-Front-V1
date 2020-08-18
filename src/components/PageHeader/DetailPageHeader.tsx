import React, { FC } from 'react';
import * as S from './styles';
import { Hr } from '../Board/styles';

interface Props {
  imgSrc: string;
  title: string;
  href?: string;
}

const DetailPageHeader: FC<Props> = ({ imgSrc, title, href }) => {
  return (
    <>
      <S.Wrap>
        <S.Container type={S.DETAIL}>
          <S.Img src={imgSrc} type={S.DETAIL} />
          <S.Title type={S.DETAIL}>{title}</S.Title>
        </S.Container>
        {href && <S.Button to={href}>목록으로</S.Button>}
      </S.Wrap>
      <Hr />
    </>
  );
};

export default DetailPageHeader;
