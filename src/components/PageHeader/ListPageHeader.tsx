import React, { FC, ChangeEvent } from 'react';
import * as S from './styles';
import { Hr } from '../Board/styles';
import { SearchIcon } from '../../assets';

interface Props {
  imgSrc: string;
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ListPageHeader: FC<Props> = ({ imgSrc, title, onChange }) => {
  return (
    <>
      <S.Wrap>
        <S.Container type={S.LIST}>
          <S.Img src={imgSrc} type={S.LIST} />
          <S.Title type={S.LIST}>{title}</S.Title>
        </S.Container>
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

export default ListPageHeader;
