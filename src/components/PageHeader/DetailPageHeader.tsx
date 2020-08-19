import React, { FC } from 'react';
import * as S from './styles';
import { Hr } from '../Board/styles';
import PageHeader from './PageHeader';

interface Props {
  imgSrc: string;
  title: string;
  href?: string;
}

const DetailPageHeader: FC<Props> = ({ imgSrc, title, href }) => {
  return (
    <>
      <S.Wrap>
        <PageHeader imgSrc={imgSrc} title={title} type={S.DETAIL} />
        {href && <S.Button to={href}>목록으로</S.Button>}
      </S.Wrap>
      <Hr />
    </>
  );
};

export default DetailPageHeader;
