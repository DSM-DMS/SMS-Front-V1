import React, { FC, ChangeEvent, memo } from 'react';
import * as S from './styles';
import { Hr } from '../Board/styles';
import { SearchIcon } from '../../assets';
import PageHeader from './PageHeader';

interface Props {
  imgSrc: string;
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ListPageHeader: FC<Props> = ({ imgSrc, title, onChange }) => {
  console.log('랜더링');
  return (
    <>
      <S.Wrap>
        <PageHeader imgSrc={imgSrc} title={title} type={S.LIST} />
        <S.InputWrap>
          <S.InputBackground>
            <img src={SearchIcon} />
            <S.Input
              onChange={onChange}
              placeholder="검색할 동아리 이름을 입력하세요."
            />
          </S.InputBackground>
        </S.InputWrap>
      </S.Wrap>
      <Hr />
    </>
  );
};

export default memo(ListPageHeader);
